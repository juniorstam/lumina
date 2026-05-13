import type { Metadata } from 'next'
import { mockCertificates, PLATFORM_STYLES, type Certificate } from '@/lib/mockData'
import { PlatformBadge, StatusBadge } from '@/components/ui/Badge'

export const metadata: Metadata = { title: 'Certificates' }

function CertificateCard({ cert }: { cert: Certificate }) {
  return (
    <div className="group bg-[#18181B] border border-zinc-800 hover:border-zinc-700 rounded-xl overflow-hidden transition-all card-hover">
      {/* Top color accent based on platform */}
      <div className={`h-1 w-full ${cert.status === 'expired' ? 'bg-zinc-700' : 'bg-blue-600'}`} />

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg flex-shrink-0">
            🏆
          </div>
          <StatusBadge status={cert.status} />
        </div>

        {/* Content */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-zinc-100 leading-snug mb-1.5">
            {cert.courseTitle}
          </h3>
          <div className="flex items-center gap-2 mb-3">
            <PlatformBadge platform={cert.platform} />
          </div>
          <p className="text-xs text-zinc-500">Por {cert.instructor}</p>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {cert.skills.slice(0, 3).map((skill) => (
            <span key={skill} className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 rounded text-[10px] text-zinc-400">
              {skill}
            </span>
          ))}
          {cert.skills.length > 3 && (
            <span className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 rounded text-[10px] text-zinc-600">
              +{cert.skills.length - 3}
            </span>
          )}
        </div>

        {/* QR Placeholder + Verified */}
        <div className="flex items-center gap-3 p-3 bg-zinc-900/60 border border-zinc-800 rounded-lg mb-4">
          {/* QR code placeholder */}
          <div className="w-12 h-12 bg-zinc-800 rounded flex-shrink-0 overflow-hidden">
            <svg viewBox="0 0 10 10" className="w-full h-full" fill="currentColor">
              <rect x="1" y="1" width="3" height="3" className="text-zinc-300" />
              <rect x="6" y="1" width="3" height="3" className="text-zinc-300" />
              <rect x="1" y="6" width="3" height="3" className="text-zinc-300" />
              <rect x="2" y="2" width="1" height="1" className="text-zinc-800" />
              <rect x="7" y="2" width="1" height="1" className="text-zinc-800" />
              <rect x="2" y="7" width="1" height="1" className="text-zinc-800" />
              <rect x="5" y="5" width="1" height="1" className="text-zinc-300" />
              <rect x="7" y="5" width="1" height="1" className="text-zinc-300" />
              <rect x="6" y="6" width="1" height="1" className="text-zinc-300" />
              <rect x="8" y="6" width="1" height="1" className="text-zinc-300" />
              <rect x="5" y="7" width="1" height="1" className="text-zinc-300" />
              <rect x="7" y="7" width="1" height="1" className="text-zinc-300" />
            </svg>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <svg className="w-3 h-3 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 16 16">
                <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[11px] font-semibold text-green-400">Verificado</span>
            </div>
            <p className="text-[10px] text-zinc-600 font-mono truncate">{cert.credentialId}</p>
          </div>
        </div>

        {/* Dates */}
        <div className="flex items-center justify-between text-[10px] text-zinc-600 mb-4">
          <span>Emitido em {new Date(cert.issueDate).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })}</span>
          {cert.expiryDate && (
            <span className={cert.status === 'expired' ? 'text-red-400' : 'text-zinc-500'}>
              Exp. {new Date(cert.expiryDate).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button className="flex-1 py-2 text-xs font-medium bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-300 transition-all flex items-center justify-center gap-1.5 min-h-[44px]">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 2v8M4 7l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 13h12" strokeLinecap="round"/>
            </svg>
            Baixar
          </button>
          <button className="flex-1 py-2 text-xs font-medium bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-300 transition-all flex items-center justify-center gap-1.5 min-h-[44px]">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
              <path d="M11 5H5M11 5v6M11 5l-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Compartilhar
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CertificatesPage() {
  const activeCerts = mockCertificates.filter(c => c.status === 'active')
  const expiredCerts = mockCertificates.filter(c => c.status === 'expired')

  return (
    <div className="p-4 lg:p-6 max-w-[1400px]">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100">Carteira de Certificados</h1>
          <p className="text-sm text-zinc-500 mt-1">
            {mockCertificates.length} certificados · {activeCerts.length} ativos
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-300 transition-all min-h-[44px]">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 2v8M4 7l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 13h12" strokeLinecap="round"/>
            </svg>
            <span className="hidden sm:inline">Exportar todos</span>
            <span className="sm:hidden">Exportar</span>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-500 border border-blue-500/50 rounded-lg text-white transition-all min-h-[44px]">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 3v10M3 8h10" strokeLinecap="round"/>
            </svg>
            <span className="hidden sm:inline">Adicionar manual</span>
            <span className="sm:hidden">Adicionar</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-6 border-b border-zinc-800 pb-px">
        {[
          { label: 'Meus Certificados', count: activeCerts.length, active: true },
          { label: 'Pendentes', count: 2, active: false },
          { label: 'Expirados', count: expiredCerts.length, active: false },
        ].map((tab) => (
          <button
            key={tab.label}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-all ${
              tab.active
                ? 'border-blue-500 text-zinc-100'
                : 'border-transparent text-zinc-500 hover:text-zinc-300'
            }`}
          >
            {tab.label}
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${tab.active ? 'bg-blue-500/20 text-blue-300' : 'bg-zinc-800 text-zinc-600'}`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Summary bar */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Total Verificados', value: '12', icon: '🏆', color: 'text-yellow-400' },
          { label: 'Compartilhados este mês', value: '4', icon: '📤', color: 'text-blue-400' },
          { label: 'Visualizações do perfil', value: '89', icon: '👁', color: 'text-green-400' },
        ].map((stat) => (
          <div key={stat.label} className="bg-[#111113] border border-zinc-800 rounded-xl px-4 py-3 flex items-center gap-3">
            <span className="text-xl">{stat.icon}</span>
            <div>
              <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-zinc-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {mockCertificates.map((cert) => (
          <CertificateCard key={cert.id} cert={cert} />
        ))}
      </div>
    </div>
  )
}
