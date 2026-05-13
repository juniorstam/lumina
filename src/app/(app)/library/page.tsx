import type { Metadata } from 'next'
import { mockCourses, type Course } from '@/lib/mockData'
import { PlatformBadge, StatusBadge } from '@/components/ui/Badge'
import { ProgressBar } from '@/components/ui/ProgressBar'

export const metadata: Metadata = { title: 'Library' }

function getPlatformEmoji(platform: string) {
  if (platform === 'Udemy') return '🎓'
  if (platform === 'Coursera') return '📚'
  if (platform === 'Rocketseat') return '🚀'
  if (platform === 'Hotmart') return '🔥'
  if (platform === 'LinkedIn Learning') return '💼'
  if (platform === 'Skillshare') return '🎨'
  if (platform === 'Kiwify') return '💡'
  if (platform === 'edX') return '🏛️'
  if (platform === 'Alura') return '⚡'
  return '📖'
}

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="p-4 bg-[#18181B] border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all card-hover">
      {/* Layout: ícone + info + status */}
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg flex-shrink-0">
          {getPlatformEmoji(course.platform)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-zinc-100 line-clamp-2 leading-snug mb-1">{course.title}</p>
          <p className="text-xs text-zinc-500 truncate mb-2">{course.instructor}</p>
          <div className="flex items-center gap-2">
            <PlatformBadge platform={course.platform} />
            <span className="text-xs text-zinc-600 truncate">{course.category}</span>
          </div>
        </div>
        <div className="flex-shrink-0">
          <StatusBadge status={course.status} />
        </div>
      </div>

      {/* Progress bar embaixo, full width */}
      {course.status !== 'not-started' && (
        <div className="mt-3">
          <div className="flex justify-between text-xs text-zinc-600 mb-1">
            <span>Progresso</span>
            <span>{course.progress === 100 ? 'Concluído' : `${course.progress}%`}</span>
          </div>
          <ProgressBar value={course.progress} size="sm" />
        </div>
      )}

      <div className="flex justify-between mt-3 pt-2 border-t border-zinc-800/60 text-xs text-zinc-600">
        <div className="flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
            <circle cx="8" cy="8" r="6.5"/>
            <path d="M8 4v4l2.5 2.5" strokeLinecap="round"/>
          </svg>
          {course.duration}
        </div>
        {course.price > 0 ? (
          <span className="font-medium text-zinc-400">
            {course.currency === 'BRL' ? 'R$' : '$'}{course.price}
          </span>
        ) : (
          <span className="text-green-500">Assinatura</span>
        )}
      </div>
    </div>
  )
}

const filterOptions = [
  { label: 'Todos', value: 'all', count: 20 },
  { label: 'Em Andamento', value: 'in-progress', count: 5 },
  { label: 'Concluídos', value: 'completed', count: 6 },
  { label: 'Não Iniciados', value: 'not-started', count: 5 },
  { label: 'Assinatura', value: 'subscription', count: 4 },
]

export default function LibraryPage() {
  return (
    <div className="px-4 py-4 lg:px-6 lg:py-6 max-w-[1400px]">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100">Biblioteca de Cursos</h1>
          <p className="text-sm text-zinc-500 mt-1">
            {mockCourses.length} cursos encontrados em 8 plataformas
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-400 transition-all min-h-[44px]">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 4h12M4 8h8M6 12h4" strokeLinecap="round"/>
            </svg>
            Filtrar
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-400 transition-all min-h-[44px]">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 5h12M2 8h12M2 11h12" strokeLinecap="round"/>
            </svg>
            Ordenar
          </button>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col gap-3 mb-6">
        {/* Search */}
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            type="search"
            placeholder="Buscar cursos, plataformas, instrutores..."
            className="w-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20 text-zinc-200 placeholder-zinc-600 rounded-lg pl-10 pr-4 py-2.5 text-sm outline-none transition-all"
          />
        </div>

        {/* Filter chips */}
        <div className="flex items-center gap-2 flex-wrap overflow-x-auto pb-1">
          {filterOptions.map((filter, idx) => (
            <button
              key={filter.value}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                idx === 0
                  ? 'bg-blue-600 text-white border-blue-500/50'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
              }`}
            >
              {filter.label}
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${idx === 0 ? 'bg-blue-500/40 text-blue-100' : 'bg-zinc-800 text-zinc-500'}`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="flex flex-wrap items-center gap-4 md:gap-6 p-4 bg-[#111113] border border-zinc-800 rounded-xl mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-xs text-zinc-400">6 Concluídos</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-400" />
          <span className="text-xs text-zinc-400">5 Em Andamento</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-zinc-500" />
          <span className="text-xs text-zinc-400">5 Não Iniciados</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-purple-400" />
          <span className="text-xs text-zinc-400">4 Assinaturas</span>
        </div>
        <div className="ml-auto">
          <span className="text-xs font-semibold text-zinc-300">Conclusão geral: </span>
          <span className="text-xs text-green-400 font-semibold">34%</span>
        </div>
      </div>

      {/* Grid — lista no mobile, grid no desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
        {mockCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}
