import Link from 'next/link'

// ─── Nav ────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14">
      <div className="absolute inset-0 bg-[#0A0A0B]/80 backdrop-blur-md border-b border-zinc-800/60" />
      <div className="relative max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" fill="white" fillOpacity="0.9"/>
              <path d="M7 4L10 5.5V8.5L7 10L4 8.5V5.5L7 4Z" fill="white" fillOpacity="0.4"/>
            </svg>
          </div>
          <span className="font-semibold text-zinc-100 text-sm tracking-tight">Lumina</span>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-6">
          {[
            { label: 'Produto', href: '#funcionalidades' },
            { label: 'Planos', href: '#planos' },
            { label: 'Enterprise', href: '#enterprise' },
            { label: 'Blog', href: '#' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors animated-underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="px-4 py-1.5 text-sm text-zinc-300 hover:text-zinc-100 transition-colors"
          >
            Entrar
          </Link>
          <Link
            href="/signup"
            className="px-4 py-1.5 text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-lg border border-blue-500/50 transition-all"
          >
            Começar grátis
          </Link>
        </div>
      </div>
    </header>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Announcement pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Escaneando 47 plataformas educacionais automaticamente
          <svg className="w-3 h-3 text-zinc-500" fill="none" viewBox="0 0 16 16">
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-100 leading-[1.08] mb-6 max-w-4xl mx-auto">
          Seu patrimônio intelectual,{' '}
          <span className="gradient-text-blue">finalmente organizado.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Conecte seu e-mail. A Lumina encontra todos os cursos que você comprou, cada certificado que conquistou
          e cada assinatura que esqueceu.{' '}
          <span className="text-zinc-300">Automaticamente.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Link
            href="/signup"
            className="group flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg border border-blue-500/50 transition-all text-sm shadow-glow-blue"
          >
            Começar gratuitamente
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 16 16">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 px-6 py-3 text-zinc-300 hover:text-zinc-100 rounded-lg border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6 8l2-2 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 6v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Ver como funciona
          </a>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-zinc-500">
          <div className="flex -space-x-2">
            {['A', 'M', 'S', 'R', 'K'].map((letter, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-[#0A0A0B] flex items-center justify-center text-xs font-semibold text-white"
                style={{ background: ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'][i] }}
              >
                {letter}
              </div>
            ))}
          </div>
          <span>Junte-se a mais de <strong className="text-zinc-300">12.000</strong> profissionais construindo seu portfólio intelectual</span>
        </div>

        {/* Product mockup */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full" />
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}

// ─── Dashboard Mockup ────────────────────────────────────────────────────────

function DashboardMockup() {
  return (
    <div className="relative mx-auto max-w-5xl rounded-xl border border-zinc-800 bg-[#111113] overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_32px_80px_rgba(0,0,0,0.8)]">
      {/* Window chrome */}
      <div className="h-10 bg-[#0F0F11] border-b border-zinc-800/80 flex items-center px-4 gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-zinc-700" />
          <div className="w-3 h-3 rounded-full bg-zinc-700" />
          <div className="w-3 h-3 rounded-full bg-zinc-700" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="px-3 py-0.5 bg-zinc-900 border border-zinc-800 rounded text-[11px] text-zinc-500">
            app.lumina.io/dashboard
          </div>
        </div>
      </div>

      <div className="flex h-[380px]">
        {/* Mini sidebar */}
        <div className="w-44 border-r border-zinc-800 bg-[#111113] flex flex-col">
          <div className="p-3 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" fill="white" fillOpacity="0.9"/>
                </svg>
              </div>
              <span className="text-xs font-semibold text-zinc-200">Lumina</span>
            </div>
          </div>
          <nav className="p-2 space-y-0.5">
            {[
              { label: 'Dashboard', active: true },
              { label: 'Biblioteca' },
              { label: 'Certificados' },
              { label: 'Assistente de IA' },
              { label: 'Cofre' },
            ].map((item) => (
              <div
                key={item.label}
                className={`px-2.5 py-1.5 rounded text-[11px] font-medium ${item.active ? 'bg-blue-500/10 text-blue-400 border-l-2 border-blue-500 pl-2' : 'text-zinc-500'}`}
              >
                {item.label}
              </div>
            ))}
          </nav>
        </div>

        {/* Main area */}
        <div className="flex-1 p-4 bg-[#0D0D0F] overflow-hidden">
          {/* Greeting */}
          <div className="mb-4">
            <p className="text-xs text-zinc-500">Bom dia</p>
            <p className="text-sm font-semibold text-zinc-100">Aqui está seu panorama de aprendizado</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            {[
              { label: 'Cursos Encontrados', value: '47', color: 'text-blue-400' },
              { label: 'Investido', value: 'R$24K', color: 'text-green-400' },
              { label: 'Certificados', value: '12', color: 'text-purple-400' },
              { label: 'Assinaturas', value: '3', color: 'text-orange-400' },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#18181B] border border-zinc-800 rounded-lg p-2.5">
                <div className={`text-base font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-[10px] text-zinc-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* AI Banner */}
          <div className="bg-blue-600/8 border border-blue-500/15 rounded-lg p-3 mb-4 flex items-start gap-2">
            <div className="w-5 h-5 rounded bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] text-zinc-300 leading-relaxed">Você tem 8 cursos abandonados em IA e Machine Learning. Retomar o mais relevante?</p>
            </div>
            <div className="px-2 py-0.5 bg-blue-600 rounded text-[10px] text-white font-medium flex-shrink-0">Resume</div>
          </div>

          {/* Course list */}
          <div className="space-y-2">
            {[
              { name: 'Machine Learning Specialization', platform: 'Coursera', progress: 43, color: 'bg-blue-400' },
              { name: 'The Complete JavaScript Course', platform: 'Udemy', progress: 100, color: 'bg-green-400' },
              { name: 'Ignite — React Native', platform: 'Rocketseat', progress: 67, color: 'bg-purple-400' },
            ].map((course) => (
              <div key={course.name} className="bg-[#18181B] border border-zinc-800/80 rounded-lg px-3 py-2 flex items-center gap-3">
                <div className={`w-1.5 h-1.5 rounded-full ${course.color} flex-shrink-0`} />
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-medium text-zinc-200 truncate">{course.name}</p>
                  <p className="text-[10px] text-zinc-500">{course.platform}</p>
                </div>
                <div className="w-16">
                  <div className="h-1 bg-zinc-800 rounded-full">
                    <div className={`h-1 rounded-full ${course.progress === 100 ? 'bg-green-400' : 'bg-blue-500'}`} style={{ width: `${course.progress}%` }} />
                  </div>
                  <p className="text-[9px] text-zinc-600 mt-0.5 text-right">{course.progress}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Logos ───────────────────────────────────────────────────────────────────

function LogosStrip() {
  const platforms = [
    'Hotmart', 'Udemy', 'Coursera', 'Rocketseat', 'LinkedIn Learning', 'Skillshare', 'Kiwify', 'edX',
  ]

  return (
    <section className="py-14 border-y border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-8">
          Funciona com todas as plataformas que você usa
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {platforms.map((platform) => (
            <span
              key={platform}
              className="text-sm font-medium text-zinc-600 hover:text-zinc-400 transition-colors cursor-default"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Problem ─────────────────────────────────────────────────────────────────

function Problem() {
  const painPoints = [
    {
      icon: '📧',
      title: '47 plataformas, nenhuma visão geral',
      description: 'Seus cursos estão espalhados por Udemy, Coursera, Hotmart, Rocketseat e dezenas de outros. Não existe um único lugar para ver o que você realmente possui.',
    },
    {
      icon: '💸',
      title: 'R$21.000 investidos, 60% esquecidos',
      description: 'Você investiu milhares na sua educação. Mas sem um inventário claro, a maior parte fica esquecida — dinheiro jogado fora, conhecimento não aproveitado.',
    },
    {
      icon: '📜',
      title: 'Certificados espalhados, progresso invisível',
      description: 'Você conquistou credenciais valiosas, mas não consegue encontrar metade delas. Seu perfil profissional não reflete a profundidade do conhecimento que você realmente construiu.',
    },
  ]

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">O Problema</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">
            Seu aprendizado está em todo lugar.
            <br />
            <span className="text-zinc-500">Sua clareza, não.</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            O profissional moderno aprende continuamente — mas a infraestrutura para gerenciar esse aprendizado simplesmente não existe.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="p-6 bg-[#111113] border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all"
            >
              <div className="text-3xl mb-4">{point.icon}</div>
              <h3 className="text-base font-semibold text-zinc-100 mb-2">{point.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── How It Works ─────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Conecte seu e-mail com segurança',
      description: 'A Lumina usa OAuth somente leitura para conectar suas contas de e-mail. Nenhuma senha armazenada. Buscamos apenas recibos e confirmações de educação.',
      detail: 'Gmail, Outlook e domínios personalizados suportados.',
    },
    {
      number: '02',
      title: 'A IA da Lumina escaneia seu histórico',
      description: 'Nossa IA proprietária identifica confirmações de compra, matrículas em cursos, cobranças de assinatura e certificados em mais de 47 plataformas automaticamente.',
      detail: 'Normalmente encontra de 10 a 15x mais cursos do que os usuários esperam.',
    },
    {
      number: '03',
      title: 'Seu portfólio intelectual aparece',
      description: 'Em minutos, você tem uma biblioteca completa e organizada de tudo que aprendeu, investiu e conquistou — com insights de IA para maximizar seu retorno.',
      detail: 'Página de perfil compartilhável incluída.',
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-[#0D0D0F]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">Como Funciona</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">
            Três passos para seu portfólio de aprendizado completo
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Sem entrada manual. Sem planilhas. A Lumina faz o trabalho pesado para que você possa focar no aprendizado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative">
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(100%+1px)] w-full h-px border-t border-dashed border-zinc-800 -translate-x-1/2 z-0" style={{ width: 'calc(100% - 40px)', left: '80%' }} />
              )}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <span className="text-lg font-bold text-zinc-100">{step.number}</span>
                  </div>
                  <div className="h-px flex-1 bg-zinc-800" />
                </div>
                <h3 className="text-base font-semibold text-zinc-100 mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-3">{step.description}</p>
                <p className="text-xs text-blue-400">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Features ─────────────────────────────────────────────────────────────────

function Features() {
  const features = [
    {
      icon: (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      title: 'Biblioteca Inteligente',
      description: 'Todos os cursos que você já comprou, detectados e organizados automaticamente por plataforma, categoria, status e retorno.',
      tag: 'Core',
    },
    {
      icon: (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
        </svg>
      ),
      title: 'Carteira de Certificados',
      description: 'Armazene, verifique e compartilhe todas as suas credenciais em um só lugar. Verificação por QR para qualquer empregador ou colaborador.',
      tag: 'Pro',
    },
    {
      icon: (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      ),
      title: 'Assistente de IA',
      description: 'Identifica lacunas de conhecimento, sugere trilhas ideais e ajuda você a maximizar o retorno dos cursos que já pagou.',
      tag: 'Pro',
    },
    {
      icon: (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      title: 'Cofre de Acessos',
      description: 'Armazenamento com criptografia AES-256 para todas as suas credenciais de plataforma. Nunca perca o acesso a um curso que comprou.',
      tag: 'Core',
    },
    {
      icon: (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      title: 'Perfil Público',
      description: 'Um perfil compartilhável e elegante exibindo sua expertise verificada. Como o LinkedIn, mas criado para quem realmente aprende.',
      tag: 'Core',
    },
    {
      icon: (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      title: 'Análises de Aprendizado',
      description: 'Visualize seu retorno, taxas de conclusão, tendências de gastos e crescimento de habilidades ao longo do tempo. Decisões de aprendizado baseadas em dados.',
      tag: 'Pro',
    },
  ]

  return (
    <section id="funcionalidades" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">Funcionalidades</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">
            Tudo que sua carreira de aprendizado precisa
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Feito para profissionais que levam seu crescimento a sério. Não é uma plataforma de aprendizado — é a infraestrutura para quem usa todas elas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 bg-[#111113] border border-zinc-800 rounded-xl hover:border-zinc-700 hover:bg-[#131316] transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 group-hover:border-zinc-700 transition-all">
                  {feature.icon}
                </div>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${feature.tag === 'Pro' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-zinc-800 text-zinc-500'}`}>
                  {feature.tag}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-zinc-100 mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function Testimonials() {
  const testimonials = [
    {
      quote: "A Lumina encontrou 31 cursos que esqueci completamente. Incluindo um curso de R$4.997 que nunca comecei. Só essa descoberta já justificou a assinatura por 10 anos.",
      author: 'Marcus Chen',
      role: 'Gerente Sênior de Produto',
      company: 'Stripe',
      avatar: 'M',
      color: 'bg-blue-500',
    },
    {
      quote: "Finalmente tenho um perfil profissional que realmente reflete o que sei. Não apenas meu histórico profissional — meu patrimônio intelectual real. Clientes veem minhas credenciais verificadas na hora.",
      author: 'Sofia Almeida',
      role: 'UX Designer Freelancer',
      company: 'Independente',
      avatar: 'S',
      color: 'bg-purple-500',
    },
    {
      quote: "Como alguém que investe sério em desenvolvimento profissional, a Lumina é a ferramenta que eu esperava. Os insights da IA me mostraram que estava gastando 3x mais do que deveria em conteúdo sobreposto.",
      author: 'Ryan Torres',
      role: 'Engenheiro Sênior',
      company: 'Vercel',
      avatar: 'R',
      color: 'bg-green-500',
    },
  ]

  return (
    <section className="py-24 bg-[#0D0D0F]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">Depoimentos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
            De profissionais que encontraram seus pontos cegos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="p-6 bg-[#18181B] border border-zinc-800 rounded-xl flex flex-col gap-5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2 border-t border-zinc-800">
                <div className={`w-8 h-8 rounded-full ${t.color} flex items-center justify-center text-xs font-semibold text-white`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-200">{t.author}</p>
                  <p className="text-xs text-zinc-500">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Pricing ─────────────────────────────────────────────────────────────────

function Pricing() {
  const plans = [
    {
      name: 'Gratuito',
      price: 'R$0',
      period: 'para sempre',
      description: 'Perfeito para começar e descobrir o que você esqueceu.',
      features: [
        'Conectar até 3 plataformas',
        'Escanear até 50 cursos',
        'Visualização básica da biblioteca',
        'Página de perfil público',
        '5 certificados armazenados',
        'Suporte da comunidade',
      ],
      cta: 'Começar gratuitamente',
      ctaVariant: 'outline' as const,
      popular: false,
    },
    {
      name: 'Pro',
      price: 'R$59',
      period: 'por mês',
      description: 'Para profissionais sérios com seu portfólio intelectual.',
      features: [
        'Plataformas ilimitadas',
        'Cursos ilimitados',
        'Assistente de IA e insights',
        'Carteira de Certificados com verificação QR',
        'Cofre de Acessos (AES-256)',
        'Análises avançadas e ROI',
        'Suporte prioritário por e-mail',
        'Acesso à API',
      ],
      cta: 'Começar Pro — 14 dias grátis',
      ctaVariant: 'primary' as const,
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Personalizado',
      period: 'fale conosco',
      description: 'Para equipes, departamentos de T&D e organizações em escala.',
      features: [
        'Tudo do Pro',
        'Painel de gestão de equipe',
        'Integrações personalizadas e SSO',
        'Emissão em massa de certificados',
        'Integração com LMS (Moodle, Canvas)',
        'Política de retenção de dados personalizada',
        'SLA e suporte dedicado',
        'Opção de implantação local',
      ],
      cta: 'Falar com vendas',
      ctaVariant: 'outline' as const,
      popular: false,
    },
  ]

  return (
    <section id="planos" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">Planos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">
            Planos simples e transparentes
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Comece grátis. Evolua quando precisar de mais. Sem contratos, sem surpresas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 rounded-xl border flex flex-col ${
                plan.popular
                  ? 'bg-[#111113] border-blue-500/40 shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_0_40px_rgba(59,130,246,0.06)]'
                  : 'bg-[#111113] border-zinc-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2">
                  <span className="px-3 py-0.5 text-xs font-semibold bg-blue-600 text-white rounded-b-lg">
                    Mais popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-zinc-400 mb-3">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-3xl font-bold text-zinc-100">{plan.price}</span>
                  <span className="text-sm text-zinc-500 mb-1">/ {plan.period}</span>
                </div>
                <p className="text-sm text-zinc-500">{plan.description}</p>
              </div>

              <ul className="space-y-2.5 flex-1 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-zinc-400">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 16 16">
                      <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className={`w-full py-2.5 text-sm font-medium rounded-lg text-center transition-all ${
                  plan.ctaVariant === 'primary'
                    ? 'bg-blue-600 hover:bg-blue-500 text-white border border-blue-500/50'
                    : 'bg-transparent hover:bg-zinc-800 text-zinc-200 border border-zinc-700'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section id="enterprise" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0D0D0F]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-5 leading-tight">
          Comece a construir seu portfólio intelectual hoje.
        </h2>
        <p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">
          Junte-se a mais de 12.000 profissionais que já organizaram seus ativos de aprendizado.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/signup"
            className="group flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg border border-blue-500/50 transition-all text-sm"
          >
            Começar grátis
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 16 16">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <span className="text-sm text-zinc-600">Sem cartão de crédito</span>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const links = {
    Produto: ['Dashboard', 'Biblioteca', 'Certificados', 'Assistente de IA', 'Cofre', 'Análises'],
    Empresa: ['Sobre', 'Blog', 'Carreiras', 'Imprensa', 'Segurança', 'Privacidade'],
    Recursos: ['Documentação', 'Referência de API', 'Changelog', 'Status', 'Suporte', 'Comunidade'],
  }

  return (
    <footer className="border-t border-zinc-800 bg-[#0A0A0B] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" fill="white" fillOpacity="0.9"/>
                  <path d="M7 4L10 5.5V8.5L7 10L4 8.5V5.5L7 4Z" fill="white" fillOpacity="0.4"/>
                </svg>
              </div>
              <span className="font-semibold text-zinc-100 text-sm tracking-tight">Lumina</span>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Infraestrutura universal para identidade educacional e credenciais profissionais.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">{category}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Lumina Technologies, Inc. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">Termos</a>
            <a href="#" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">Privacidade</a>
            <a href="#" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <Nav />
      <Hero />
      <LogosStrip />
      <Problem />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  )
}
