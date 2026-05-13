import type { Metadata } from 'next'
import { mockAIInsights } from '@/lib/mockData'

export const metadata: Metadata = { title: 'AI Assistant' }

const suggestedPrompts = [
  'O que devo aprender a seguir com base nos meus objetivos?',
  'Quais dos meus cursos têm maior retorno?',
  'Crie um plano de aprendizado de 30 dias para mim',
  'Em quais assinaturas estou desperdiçando dinheiro?',
  'Mostre minhas lacunas em IA e Machine Learning',
  'Quais certificados devo priorizar?',
]

const conversationHistory = [
  {
    role: 'user' as const,
    content: 'Quantos cursos tenho que ainda não comecei?',
    time: '10:23 AM',
  },
  {
    role: 'assistant' as const,
    content: 'Você tem **8 cursos** que comprou mas nunca abriu. Veja o resumo:\n\n- **3 cursos** em IA e Machine Learning (Coursera, edX)\n- **2 cursos** em Computação em Nuvem (Udemy)\n- **2 cursos** em Desenvolvimento Mobile (Udemy)\n- **1 curso** em Web3 (edX)\n\nO mais recente que você comprou e nunca iniciou é **"Blockchain & Web3 Fundamentals"** do edX — comprado há 5 meses. Quer que eu sugira qual começar primeiro com base nas suas lacunas de habilidades?',
    time: '10:23 AM',
  },
  {
    role: 'user' as const,
    content: 'Sim, qual devo começar primeiro?',
    time: '10:24 AM',
  },
  {
    role: 'assistant' as const,
    content: 'Com base no seu perfil, tendências atuais do mercado de trabalho e as lacunas de habilidades no seu portfólio, recomendo começar por:\n\n🎯 **AWS Solutions Architect Associate** (Udemy — Stephane Maarek)\n\n**Por quê este?**\n- Você está 28% avançado, então não está começando do zero\n- Habilidades em Cloud estão no top 3 das mais requisitadas para sua função\n- Concluir este curso abre uma certificação de alto valor (taxa de R$1.500, mas com ROI em até 3 meses via aumento salarial)\n- Combina bem com suas habilidades em Docker/Node.js\n\nDepois, eu sugiro concluir a **Machine Learning Specialization** (Coursera) — você está 43% no curso do Andrew Ng, que é a credencial de ML mais reconhecida globalmente.\n\nQuer que eu crie um cronograma semanal para concluir os dois?',
    time: '10:24 AM',
  },
  {
    role: 'user' as const,
    content: 'Qual é meu total investido em aprendizado este ano?',
    time: '10:26 AM',
  },
  {
    role: 'assistant' as const,
    content: 'Aqui está o **resumo do seu investimento em aprendizado em 2024**:\n\n| Categoria | Valor |\n|---|---|\n| Novos cursos comprados | R$1.247 |\n| Assinaturas ativas | R$599/mês × 3 = R$1.797 |\n| **Total 2024 até agora** | **R$3.044** |\n\nInvestimento total em todas as plataformas: **R$24.235**\n\nAlguns insights:\n- Sua **taxa de conclusão é de 34%**, ou seja, você está aproveitando o valor total de cerca de 1/3 do que compra\n- Se concluísse todos os cursos em andamento, desbloquearia **7 certificados a mais**, com valor estimado de R$6.000 em credenciais\n- Sua assinatura do Coursera (R$245/mês) tem a **menor taxa de uso** — você não acessa há 58 dias. Considere pausar até terminar a ML Specialization.\n\nQuer que eu sinalize quais assinaturas pausar e quais manter?',
    time: '10:26 AM',
  },
]

function InsightCard({ insight }: { insight: typeof mockAIInsights[0] }) {
  const colors = {
    warning: 'bg-orange-500/8 border-orange-500/20 text-orange-400',
    suggestion: 'bg-blue-500/8 border-blue-500/20 text-blue-400',
    achievement: 'bg-green-500/8 border-green-500/20 text-green-400',
    info: 'bg-zinc-800/60 border-zinc-700 text-zinc-400',
  }
  const icons = {
    warning: '⚠️',
    suggestion: '💡',
    achievement: '🏆',
    info: 'ℹ️',
  }

  return (
    <div className={`p-3.5 border rounded-xl ${colors[insight.type]} flex gap-3`}>
      <span className="text-lg flex-shrink-0">{icons[insight.type]}</span>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-zinc-300 leading-relaxed">{insight.message}</p>
        {insight.actionLabel && (
          <button className="mt-2 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors">
            {insight.actionLabel} →
          </button>
        )}
      </div>
    </div>
  )
}

function MessageBubble({ role, content, time }: { role: 'user' | 'assistant'; content: string; time: string }) {
  const lines = content.split('\n')

  const formatLine = (line: string) => {
    if (!line) return null
    // Bold formatting
    const parts = line.split(/\*\*(.*?)\*\*/g)
    return parts.map((part, i) =>
      i % 2 === 1 ? <strong key={i} className="font-semibold text-zinc-100">{part}</strong> : part
    )
  }

  return (
    <div className={`flex gap-3 ${role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
      {role === 'assistant' && (
        <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" fill="white" fillOpacity="0.9"/>
          </svg>
        </div>
      )}
      <div className={`max-w-[75%] ${role === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
        <div
          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
            role === 'user'
              ? 'bg-blue-600 text-white rounded-tr-sm'
              : 'bg-[#18181B] border border-zinc-800 text-zinc-300 rounded-tl-sm'
          }`}
        >
          {lines.map((line, idx) => {
            if (!line) return <br key={idx} />
            if (line.startsWith('- ')) {
              return (
                <div key={idx} className="flex items-start gap-1.5 mt-1">
                  <span className="text-zinc-500 flex-shrink-0 mt-0.5">·</span>
                  <span>{formatLine(line.slice(2))}</span>
                </div>
              )
            }
            if (line.startsWith('|') && line.includes('|---')) {
              return null
            }
            if (line.startsWith('|') && line.includes('|')) {
              const cells = line.split('|').filter(Boolean).map(c => c.trim())
              return (
                <div key={idx} className="flex gap-4 mt-1 text-xs font-mono">
                  {cells.map((cell, ci) => (
                    <span key={ci} className={ci === 0 ? 'text-zinc-500 w-48' : 'text-zinc-300'}>
                      {formatLine(cell)}
                    </span>
                  ))}
                </div>
              )
            }
            if (line.startsWith('🎯') || line.startsWith('**Why')) {
              return <p key={idx} className={`${idx > 0 ? 'mt-2' : ''} font-medium`}>{formatLine(line)}</p>
            }
            return <p key={idx} className={idx > 0 ? 'mt-1' : ''}>{formatLine(line)}</p>
          })}
        </div>
        <span className="text-[10px] text-zinc-600 px-1">{time}</span>
      </div>
      {role === 'user' && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0 mt-0.5">
          A
        </div>
      )}
    </div>
  )
}

export default function AIPage() {
  return (
    <div className="h-[calc(100vh-3.5rem)] lg:h-screen flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 px-4 md:px-6 py-4 border-b border-zinc-800 flex items-center justify-between bg-[#0D0D0F]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" fill="white" fillOpacity="0.9"/>
              <path d="M7 4L10 5.5V8.5L7 10L4 8.5V5.5L7 4Z" fill="white" fillOpacity="0.4"/>
            </svg>
          </div>
          <div>
            <h1 className="text-sm font-semibold text-zinc-100">IA da Lumina</h1>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-xs text-zinc-500">Online · Analisando seus dados de aprendizado</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-all">
            Nova conversa
          </button>
          <button className="px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-all">
            Histórico
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Chat */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 md:px-6 py-6 space-y-5">
            {/* Welcome */}
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center mx-auto mb-3">
                <svg width="20" height="20" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" fill="white" fillOpacity="0.9"/>
                  <path d="M7 4L10 5.5V8.5L7 10L4 8.5V5.5L7 4Z" fill="white" fillOpacity="0.4"/>
                </svg>
              </div>
              <h2 className="text-sm font-semibold text-zinc-200 mb-1">Assistente de IA da Lumina</h2>
              <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                Sei tudo sobre seu portfólio de aprendizado. Pergunte o que quiser.
              </p>
            </div>

            {conversationHistory.map((msg, idx) => (
              <MessageBubble key={idx} role={msg.role} content={msg.content} time={msg.time} />
            ))}

            {/* Typing indicator */}
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" fill="white" fillOpacity="0.9"/>
                </svg>
              </div>
              <div className="bg-[#18181B] border border-zinc-800 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Suggested prompts */}
          <div className="flex-shrink-0 px-6 py-3 border-t border-zinc-800/50">
            <div className="flex gap-2 flex-wrap">
              {suggestedPrompts.slice(0, 4).map((prompt) => (
                <button
                  key={prompt}
                  className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg text-xs text-zinc-400 hover:text-zinc-200 transition-all"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="flex-shrink-0 px-4 md:px-6 pb-4 md:pb-6 pt-3">
            <div className="flex items-end gap-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/20 rounded-xl p-3 transition-all">
              <textarea
                placeholder="Pergunte sobre seus cursos, certificados, gastos, trilhas de aprendizado..."
                rows={1}
                className="flex-1 bg-transparent text-sm text-zinc-200 placeholder-zinc-600 outline-none resize-none leading-relaxed"
              />
              <button className="flex-shrink-0 w-8 h-8 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <p className="text-[10px] text-zinc-700 mt-2 text-center">
              A IA da Lumina tem acesso aos seus cursos, certificados, gastos e conexões de plataforma.
            </p>
          </div>
        </div>

        {/* Right panel — insights — hidden on mobile */}
        <div className="hidden lg:flex w-72 flex-shrink-0 border-l border-zinc-800 bg-[#0D0D0F] flex-col overflow-hidden">
          <div className="px-4 py-3.5 border-b border-zinc-800">
            <h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">Insights Ativos</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {mockAIInsights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
