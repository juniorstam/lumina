import type { Metadata } from 'next'
import { mockVaultEntries, PLATFORM_STYLES, type VaultEntry } from '@/lib/mockData'
import { PlatformBadge, StatusBadge } from '@/components/ui/Badge'

export const metadata: Metadata = { title: 'Vault' }

function VaultCard({ entry }: { entry: VaultEntry }) {
  const maskEmail = (email: string) => {
    const [user, domain] = email.split('@')
    return `${user.slice(0, 2)}${'•'.repeat(user.length - 2)}@${domain}`
  }

  return (
    <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-4 space-y-3">
      <div className="flex items-center justify-between">
        <PlatformBadge platform={entry.platform} size="md" />
        <StatusBadge status={entry.status} />
      </div>
      <div>
        <span className="text-sm font-mono text-zinc-400">{maskEmail(entry.email)}</span>
        {entry.notes && <p className="text-xs text-zinc-600 mt-0.5">{entry.notes}</p>}
      </div>
      <div className="flex items-center gap-2 pt-1">
        <button className="flex-1 px-2.5 py-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded text-xs text-zinc-400 hover:text-zinc-200 transition-all min-h-[44px]">
          Visualizar
        </button>
        <button className="flex-1 px-2.5 py-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded text-xs text-zinc-400 hover:text-zinc-200 transition-all min-h-[44px]">
          Editar
        </button>
        <button className="flex-1 px-2.5 py-2 bg-red-600/10 hover:bg-red-600/20 border border-red-500/20 rounded text-xs text-red-400 transition-all min-h-[44px]">
          Remover
        </button>
      </div>
    </div>
  )
}

function VaultRow({ entry }: { entry: VaultEntry }) {
  const maskEmail = (email: string) => {
    const [user, domain] = email.split('@')
    return `${user.slice(0, 2)}${'•'.repeat(user.length - 2)}@${domain}`
  }

  return (
    <tr className="border-b border-zinc-800/60 hover:bg-zinc-900/40 transition-colors group">
      <td className="px-5 py-4">
        <PlatformBadge platform={entry.platform} size="md" />
      </td>
      <td className="px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-mono text-zinc-400">{maskEmail(entry.email)}</span>
          <button className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-600 hover:text-zinc-400">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 2H5a1 1 0 00-1 1v10a1 1 0 001 1h6a1 1 0 001-1V6l-3-4z" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 2v4h4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        {entry.notes && (
          <p className="text-xs text-zinc-600 mt-0.5">{entry.notes}</p>
        )}
      </td>
      <td className="px-5 py-4">
        <span className="text-sm text-zinc-500">
          {new Date(entry.lastUsed).toLocaleDateString('pt-BR', {
            month: 'short', day: 'numeric', year: 'numeric',
          })}
        </span>
      </td>
      <td className="px-5 py-4">
        <StatusBadge status={entry.status} />
      </td>
      <td className="px-5 py-4">
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="px-2.5 py-1 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded text-xs text-zinc-400 hover:text-zinc-200 transition-all">
            View
          </button>
          <button className="px-2.5 py-1 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded text-xs text-zinc-400 hover:text-zinc-200 transition-all">
            Edit
          </button>
          <button className="px-2.5 py-1 bg-red-600/10 hover:bg-red-600/20 border border-red-500/20 rounded text-xs text-red-400 transition-all">
            Remove
          </button>
        </div>
      </td>
    </tr>
  )
}

export default function VaultPage() {
  const activeEntries = mockVaultEntries.filter(e => e.status === 'active').length

  return (
    <div className="p-4 lg:p-6 max-w-[1400px]">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100">Cofre de Acessos</h1>
          <p className="text-sm text-zinc-500 mt-1">
            {mockVaultEntries.length} credenciais armazenadas · {activeEntries} ativas
          </p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-500 border border-blue-500/50 rounded-lg text-white transition-all min-h-[44px] self-start sm:self-auto">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 3v10M3 8h10" strokeLinecap="round"/>
          </svg>
          Adicionar credencial
        </button>
      </div>

      {/* Security banner */}
      <div className="mb-6 p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-sm font-semibold text-zinc-200">Protegido por criptografia AES-256</span>
            <span className="px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded text-[10px] font-semibold text-green-400">
              SEGURO
            </span>
          </div>
          <p className="text-xs text-zinc-500">
            Suas credenciais são criptografadas de ponta a ponta. A Lumina não consegue ler suas senhas — apenas você pode, com sua chave mestra.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="flex items-center gap-1.5 text-xs text-zinc-500">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Última auditoria: há 2 dias
          </div>
        </div>
      </div>

      {/* Security stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          {
            label: 'Total de credenciais',
            value: String(mockVaultEntries.length),
            icon: '🔐',
            color: 'text-blue-400',
          },
          {
            label: 'Acessos ativos',
            value: String(activeEntries),
            icon: '✅',
            color: 'text-green-400',
          },
          {
            label: 'Inativos',
            value: String(mockVaultEntries.length - activeEntries),
            icon: '⏸️',
            color: 'text-zinc-400',
          },
          {
            label: 'Pontuação de segurança',
            value: '94/100',
            icon: '🛡️',
            color: 'text-purple-400',
          },
        ].map((stat) => (
          <div key={stat.label} className="bg-[#18181B] border border-zinc-800 rounded-xl px-4 py-3.5 flex items-center gap-3">
            <span className="text-xl">{stat.icon}</span>
            <div>
              <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-zinc-600">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Biometric notice */}
      <div className="mb-5 flex items-center gap-3 px-4 py-3 bg-zinc-900/40 border border-zinc-800 rounded-xl">
        <div className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-xs font-medium text-zinc-300">Bloqueio biométrico ativado</p>
          <p className="text-xs text-zinc-600">Touch ID ou Face ID necessário para revelar credenciais</p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-xs text-green-400">Ativo</span>
        </div>
      </div>

      {/* Search */}
      <div className="mb-4">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            type="search"
            placeholder="Buscar plataformas ou credenciais..."
            className="w-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-blue-500/40 text-zinc-200 placeholder-zinc-600 rounded-lg pl-10 pr-4 py-2.5 text-sm outline-none transition-all"
          />
        </div>
      </div>

      {/* Mobile cards — visible on small screens */}
      <div className="md:hidden space-y-3">
        {mockVaultEntries.map((entry) => (
          <VaultCard key={entry.id} entry={entry} />
        ))}
      </div>

      {/* Table — visible on md+ */}
      <div className="hidden md:block bg-[#18181B] border border-zinc-800 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-900/40">
              <th className="px-5 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wide w-40">
                Plataforma
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wide">
                Login
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wide w-36">
                Último Uso
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wide w-28">
                Status
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wide w-36">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {mockVaultEntries.map((entry) => (
              <VaultRow key={entry.id} entry={entry} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer note */}
      <div className="mt-4 flex items-center gap-2 text-xs text-zinc-700">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
          <circle cx="8" cy="8" r="6.5"/>
          <path d="M8 7v4M8 5v.5" strokeLinecap="round"/>
        </svg>
        As senhas são exibidas mascaradas por padrão. Clique em &quot;Visualizar&quot; e autentique-se com biometria para revelar uma credencial.
      </div>
    </div>
  )
}
