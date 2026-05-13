import type { Metadata } from 'next'
import { mockUserProfile, mockCertificates, mockCourses } from '@/lib/mockData'
import { PlatformBadge, StatusBadge } from '@/components/ui/Badge'
import { ProgressBar } from '@/components/ui/ProgressBar'

export const metadata: Metadata = { title: 'Profile' }

function ToggleRow({ label, defaultOn = true }: { label: string; defaultOn?: boolean }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-zinc-800/60 last:border-0">
      <span className="text-sm text-zinc-400">{label}</span>
      <div className={`w-9 h-5 rounded-full flex items-center px-0.5 transition-all ${defaultOn ? 'bg-blue-600 justify-end' : 'bg-zinc-700 justify-start'}`}>
        <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
      </div>
    </div>
  )
}

export default function ProfilePage() {
  const completedCourses = mockCourses.filter(c => c.status === 'completed')
  const activeCerts = mockCertificates.filter(c => c.status === 'active').slice(0, 5)

  return (
    <div className="p-6 max-w-[1400px]">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100">Perfil Público</h1>
          <p className="text-sm text-zinc-500 mt-1">Como outras pessoas veem seu portfólio intelectual</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-300 transition-all">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
              <circle cx="8" cy="5" r="2.5"/>
              <path d="M2 14a6 6 0 0112 0" strokeLinecap="round"/>
            </svg>
            Visualizar
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-blue-600 hover:bg-blue-500 border border-blue-500/50 rounded-lg text-white font-medium transition-all">
            Salvar alterações
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        {/* Left — profile preview */}
        <div className="space-y-5">
          {/* Cover + avatar */}
          <div className="bg-[#18181B] border border-zinc-800 rounded-xl overflow-hidden">
            {/* Cover */}
            <div className="h-28 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 relative">
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <button className="absolute top-3 right-3 px-2.5 py-1.5 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 rounded-lg text-xs text-zinc-400 transition-all backdrop-blur-sm">
                Editar capa
              </button>
            </div>

            <div className="px-6 pb-6">
              {/* Avatar */}
              <div className="relative -mt-8 mb-4 w-fit">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold border-4 border-[#18181B]">
                  A
                </div>
                <button className="absolute -bottom-1 -right-1 w-5 h-5 bg-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center text-zinc-400 hover:text-zinc-200 transition-colors">
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2">
                    <path d="M13 3l-8 8H2v-3l8-8 3 3z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Info */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-lg font-bold text-zinc-100">{mockUserProfile.name}</h2>
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-sm text-zinc-400 mb-1">{mockUserProfile.headline}</p>
                <div className="flex items-center gap-1.5 text-xs text-zinc-600">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6z" strokeLinecap="round"/>
                    <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" strokeLinecap="round"/>
                  </svg>
                  {mockUserProfile.location}
                </div>
              </div>

              {/* Profile URL */}
              <div className="flex items-center gap-2 p-3 bg-zinc-900/60 border border-zinc-800 rounded-lg">
                <span className="text-sm font-mono text-zinc-500">app.lumina.io/@</span>
                <span className="text-sm font-mono text-zinc-200 font-medium">{mockUserProfile.username}</span>
                <button className="ml-auto flex items-center gap-1 px-2 py-1 bg-zinc-800 hover:bg-zinc-700 rounded text-xs text-zinc-400 transition-all">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="8" height="8" rx="1"/>
                    <path d="M5 3V2a1 1 0 011-1h6a1 1 0 011 1v8a1 1 0 01-1 1h-1" strokeLinecap="round"/>
                  </svg>
                  Copiar link
                </button>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-zinc-100">Sobre</h3>
              <button className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">Editar</button>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">{mockUserProfile.bio}</p>
          </div>

          {/* Skills */}
          <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-zinc-100">Habilidades</h3>
              <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">+ Adicionar habilidade</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {mockUserProfile.skills.map((skill) => (
                <span
                  key={skill}
                  className="group flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg text-xs font-medium text-zinc-300 transition-all cursor-pointer"
                >
                  {skill}
                  <svg className="w-3 h-3 text-zinc-600 group-hover:text-zinc-400 transition-colors" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 3v10M3 8h10" strokeLinecap="round"/>
                  </svg>
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-zinc-100">Certificações Verificadas</h3>
              <span className="text-xs text-zinc-500">{activeCerts.length} showing</span>
            </div>
            <div className="space-y-3">
              {activeCerts.map((cert) => (
                <div key={cert.id} className="flex items-center gap-3 p-3 bg-zinc-900/60 border border-zinc-800 rounded-lg">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0 text-sm">
                    🏆
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-200 truncate">{cert.courseTitle}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <PlatformBadge platform={cert.platform} />
                      <span className="text-xs text-zinc-600">
                        {new Date(cert.issueDate).getFullYear()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-[10px] font-semibold text-green-400">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 16 16">
                      <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Verificado
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning section */}
          <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-zinc-100">Aprendendo Atualmente</h3>
              <button className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">Editar</button>
            </div>
            <div className="space-y-3">
              {mockCourses.filter(c => c.status === 'in-progress').slice(0, 3).map((course) => (
                <div key={course.id} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sm flex-shrink-0">
                    📚
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-zinc-300 truncate">{course.title}</p>
                    <ProgressBar value={course.progress} size="xs" className="mt-1.5" />
                  </div>
                  <span className="text-xs font-medium text-zinc-500">{course.progress}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — privacy controls */}
        <div className="space-y-4">
          {/* Stats */}
          <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-zinc-100 mb-4">Estatísticas do Perfil</h3>
            <div className="space-y-3">
              {[
                { label: 'Visualizações do perfil', value: '289', trend: '+12%' },
                { label: 'Certificados compartilhados', value: '8', trend: '+2' },
                { label: 'Habilidades endossadas', value: '23', trend: '+5' },
                { label: 'Completude do perfil', value: '87%', trend: '' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between">
                  <span className="text-xs text-zinc-500">{stat.label}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold text-zinc-200">{stat.value}</span>
                    {stat.trend && (
                      <span className="text-[10px] text-green-400">{stat.trend}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy controls */}
          <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-zinc-100 mb-4">Controles de Privacidade</h3>
            <div className="space-y-1">
              <ToggleRow label="Exibir certificados" defaultOn />
              <ToggleRow label="Exibir cursos" defaultOn />
              <ToggleRow label="Exibir dados de gastos" defaultOn={false} />
              <ToggleRow label="Exibir habilidades" defaultOn />
              <ToggleRow label="Exibir progresso de aprendizado" defaultOn />
              <ToggleRow label="Aparecer nas buscas" defaultOn />
            </div>
          </div>

          {/* Share card */}
          <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-zinc-100 mb-3">Compartilhar Perfil</h3>
            <p className="text-xs text-zinc-500 mb-4">Compartilhe seu portfólio intelectual verificado com recrutadores, clientes ou colegas.</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Copiar link', icon: '🔗' },
                { label: 'LinkedIn', icon: '💼' },
                { label: 'Twitter', icon: '🐦' },
                { label: 'QR code', icon: '📱' },
              ].map((action) => (
                <button
                  key={action.label}
                  className="flex items-center gap-2 px-3 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg text-xs text-zinc-400 hover:text-zinc-200 transition-all"
                >
                  <span>{action.icon}</span>
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
