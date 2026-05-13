import type { Metadata } from 'next'
import Link from 'next/link'
import {
  mockCourses,
  mockUserProfile,
  spendingByPlatform,
  topCategories,
  type Course,
} from '@/lib/mockData'
import { PlatformBadge, StatusBadge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'

export const metadata: Metadata = { title: 'Dashboard' }

function StatCard({
  label,
  value,
  sub,
  icon,
  color,
}: {
  label: string
  value: string
  sub?: string
  icon: React.ReactNode
  color: string
}) {
  return (
    <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5 flex items-start gap-4">
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-2xl font-bold text-zinc-100 leading-tight">{value}</p>
        <p className="text-xs font-medium text-zinc-400 mt-0.5">{label}</p>
        {sub && <p className="text-xs text-zinc-600 mt-0.5">{sub}</p>}
      </div>
    </div>
  )
}

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-[#18181B] border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all group">
      {/* Platform icon placeholder */}
      <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 text-lg">
        {course.platform === 'Udemy' ? '🎓' :
         course.platform === 'Coursera' ? '📚' :
         course.platform === 'Rocketseat' ? '🚀' :
         course.platform === 'Hotmart' ? '🔥' :
         course.platform === 'LinkedIn Learning' ? '💼' : '📖'}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <p className="text-sm font-medium text-zinc-200 truncate group-hover:text-zinc-100 transition-colors">
            {course.title}
          </p>
          <StatusBadge status={course.status} />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <PlatformBadge platform={course.platform} />
          <span className="text-xs text-zinc-600">•</span>
          <span className="text-xs text-zinc-600">{course.instructor}</span>
        </div>
        {course.status !== 'not-started' && (
          <ProgressBar value={course.progress} size="xs" animated />
        )}
      </div>

      <div className="flex-shrink-0 text-right">
        <p className="text-sm font-semibold text-zinc-300">
          {course.progress === 100 ? '✓' : `${course.progress}%`}
        </p>
        <p className="text-xs text-zinc-600 mt-0.5">
          {course.lastAccessed
            ? new Date(course.lastAccessed).toLocaleDateString('pt-BR', { month: 'short', day: 'numeric' })
            : 'Não iniciado'}
        </p>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  const recentCourses = mockCourses.slice(0, 4)
  const expiringSoon = mockCourses.filter(c => c.status === 'subscription').slice(0, 2)

  return (
    <div className="p-6 max-w-[1400px]">
      {/* Top greeting */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-500 mb-1">
              {new Date().toLocaleDateString('pt-BR', { weekday: 'long', month: 'long', day: 'numeric' })}
            </p>
            <h1 className="text-2xl font-bold text-zinc-100">
              Bom dia, {mockUserProfile.name.split(' ')[0]}. 👋
            </h1>
            <p className="text-sm text-zinc-500 mt-1">Aqui está seu panorama de aprendizado.</p>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg text-xs text-zinc-400 transition-all">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
                <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Conectar plataforma
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 border border-blue-500/50 rounded-lg text-xs text-white font-medium transition-all">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
                <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Nova varredura
            </button>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          label="Cursos Encontrados"
          value={String(mockUserProfile.totalCourses)}
          sub="Em 5 plataformas"
          color="bg-blue-500/10"
          icon={
            <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          }
        />
        <StatCard
          label="Total Investido"
          value={`R$${mockUserProfile.totalInvested.toLocaleString('pt-BR')}`}
          sub="+R$1.247 este mês"
          color="bg-green-500/10"
          icon={
            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <StatCard
          label="Certificados"
          value={String(mockUserProfile.totalCertificates)}
          sub="2 aguardando verificação"
          color="bg-purple-500/10"
          icon={
            <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
            </svg>
          }
        />
        <StatCard
          label="Assinaturas Ativas"
          value={String(mockUserProfile.activeSubscriptions)}
          sub="Renovando este mês"
          color="bg-orange-500/10"
          icon={
            <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.990" />
            </svg>
          }
        />
      </div>

      {/* AI Insight banner */}
      <div className="mb-6 p-4 bg-blue-600/8 border border-blue-500/20 rounded-xl flex items-start gap-4">
        <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">Insight de IA</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span className="text-xs text-zinc-600">Agora mesmo</span>
          </div>
          <p className="text-sm text-zinc-300">
            Você tem <strong className="text-zinc-100">8 cursos abandonados</strong> em IA e Machine Learning. Retomar o mais relevante?
          </p>
        </div>
        <Link
          href="/ai"
          className="flex-shrink-0 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg border border-blue-500/50 transition-all"
        >
          Perguntar à IA
        </Link>
      </div>

      {/* Main two-column layout */}
      <div className="grid lg:grid-cols-[1fr_280px] gap-6">
        {/* Left column */}
        <div className="space-y-6">
          {/* Recently Detected */}
          <Card padding="none">
            <div className="px-5 py-4 border-b border-zinc-800 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-zinc-100">Detectados Recentemente</h2>
                <p className="text-xs text-zinc-500 mt-0.5">Cursos encontrados na última varredura</p>
              </div>
              <Link href="/library" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                Ver todos →
              </Link>
            </div>
            <div className="p-4 space-y-3">
              {recentCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </Card>

          {/* Expiring Soon */}
          <Card padding="none">
            <div className="px-5 py-4 border-b border-zinc-800 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-zinc-100">Expirando em Breve</h2>
                <p className="text-xs text-zinc-500 mt-0.5">Assinaturas que precisam de atenção</p>
              </div>
              <span className="text-xs font-medium text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-full">
                Ação necessária
              </span>
            </div>
            <div className="p-4 space-y-3">
              {expiringSoon.map((course) => (
                <div key={course.id} className="flex items-center gap-3 p-3 bg-zinc-900/60 border border-zinc-800 rounded-lg">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-200 truncate">{course.title}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <PlatformBadge platform={course.platform} />
                      <span className="text-xs text-orange-400">Renova em 12 dias</span>
                    </div>
                  </div>
                  <button className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700">
                    Gerenciar
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          {/* Spending by platform */}
          <Card padding="none">
            <div className="px-4 py-3.5 border-b border-zinc-800">
              <h2 className="text-sm font-semibold text-zinc-100">Gastos por Plataforma</h2>
            </div>
            <div className="p-4 space-y-3.5">
              {spendingByPlatform.map((item) => (
                <div key={item.platform}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-zinc-400">{item.platform}</span>
                    <span className="text-xs font-medium text-zinc-300">${item.amount}</span>
                  </div>
                  <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Top Categories */}
          <Card padding="none">
            <div className="px-4 py-3.5 border-b border-zinc-800">
              <h2 className="text-sm font-semibold text-zinc-100">Principais Categorias</h2>
            </div>
            <div className="p-4">
              <div className="space-y-2.5">
                {topCategories.slice(0, 5).map((cat, idx) => (
                  <div key={cat.category} className="flex items-center gap-3">
                    <span className="text-xs font-mono text-zinc-600 w-4">{idx + 1}</span>
                    <div className="flex-1">
                      <p className="text-xs font-medium text-zinc-300">{cat.category}</p>
                      <p className="text-[10px] text-zinc-600">{cat.count} courses · {cat.hours}h</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Quick actions */}
          <Card padding="none">
            <div className="px-4 py-3.5 border-b border-zinc-800">
              <h2 className="text-sm font-semibold text-zinc-100">Ações Rápidas</h2>
            </div>
            <div className="p-3 space-y-1">
              {[
                { href: '/library', label: 'Explorar biblioteca', icon: '📚' },
                { href: '/certificates', label: 'Ver certificados', icon: '🏆' },
                { href: '/ai', label: 'Perguntar ao assistente de IA', icon: '✨' },
                { href: '/profile', label: 'Editar perfil público', icon: '👤' },
              ].map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-zinc-800/60 transition-all group"
                >
                  <span className="text-sm">{action.icon}</span>
                  <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    {action.label}
                  </span>
                  <svg className="w-3 h-3 text-zinc-700 group-hover:text-zinc-500 ml-auto transition-colors" fill="none" viewBox="0 0 16 16">
                    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
