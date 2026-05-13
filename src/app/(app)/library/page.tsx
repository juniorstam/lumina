import type { Metadata } from 'next'
import { mockCourses, type Course } from '@/lib/mockData'
import { PlatformBadge, StatusBadge } from '@/components/ui/Badge'
import { ProgressBar } from '@/components/ui/ProgressBar'

export const metadata: Metadata = { title: 'Library' }

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="group bg-[#18181B] border border-zinc-800 hover:border-zinc-700 rounded-xl p-5 flex flex-col gap-4 transition-all card-hover">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg flex-shrink-0">
          {course.platform === 'Udemy' ? '🎓' :
           course.platform === 'Coursera' ? '📚' :
           course.platform === 'Rocketseat' ? '🚀' :
           course.platform === 'Hotmart' ? '🔥' :
           course.platform === 'LinkedIn Learning' ? '💼' :
           course.platform === 'Skillshare' ? '🎨' :
           course.platform === 'Kiwify' ? '💡' :
           course.platform === 'edX' ? '🏛️' :
           course.platform === 'Alura' ? '⚡' : '📖'}
        </div>
        <StatusBadge status={course.status} />
      </div>

      {/* Title & instructor */}
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors leading-snug mb-1.5">
          {course.title}
        </h3>
        <p className="text-xs text-zinc-500">{course.instructor}</p>
      </div>

      {/* Meta */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <PlatformBadge platform={course.platform} />
          <span className="text-xs text-zinc-600">{course.category}</span>
        </div>

        {/* Progress */}
        {course.status !== 'not-started' && (
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] text-zinc-600">Progresso</span>
              <span className="text-[10px] font-medium text-zinc-400">
                {course.progress === 100 ? 'Concluído' : `${course.progress}%`}
              </span>
            </div>
            <ProgressBar value={course.progress} size="sm" />
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-1 border-t border-zinc-800/60">
          <div className="flex items-center gap-1 text-xs text-zinc-600">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
              <circle cx="8" cy="8" r="6.5"/>
              <path d="M8 4v4l2.5 2.5" strokeLinecap="round"/>
            </svg>
            {course.duration}
          </div>
          {course.price > 0 ? (
            <span className="text-xs font-medium text-zinc-400">
              {course.currency === 'BRL' ? 'R$' : '$'}{course.price}
            </span>
          ) : (
            <span className="text-xs text-green-500">Assinatura</span>
          )}
        </div>
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
    <div className="p-6 max-w-[1400px]">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100">Biblioteca de Cursos</h1>
          <p className="text-sm text-zinc-500 mt-1">
            {mockCourses.length} cursos encontrados em 8 plataformas
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-400 transition-all">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 4h12M4 8h8M6 12h4" strokeLinecap="round"/>
            </svg>
            Filtrar
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-400 transition-all">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 5h12M2 8h12M2 11h12" strokeLinecap="round"/>
            </svg>
            Ordenar
          </button>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
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
        <div className="flex items-center gap-2 flex-wrap">
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
      <div className="flex items-center gap-6 p-4 bg-[#111113] border border-zinc-800 rounded-xl mb-6">
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

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {mockCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}
