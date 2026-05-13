import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Configurações | Lumina' }

export default function SettingsPage() {
  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-100 tracking-tight">Configurações</h1>
        <p className="text-zinc-500 mt-1">Gerencie sua conta e preferências.</p>
      </div>

      {/* Perfil */}
      <section className="mb-6">
        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">Perfil</h2>
        <div className="bg-[#18181B] border border-zinc-800 rounded-xl divide-y divide-zinc-800">
          <SettingRow label="Nome completo" value="Ingrid Martins" />
          <SettingRow label="E-mail" value="ingrid@example.com" />
          <SettingRow label="Username" value="@ingrid" />
          <SettingRow label="Idioma" value="Português (Brasil)" />
        </div>
      </section>

      {/* Conexões */}
      <section className="mb-6">
        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">E-mails conectados</h2>
        <div className="bg-[#18181B] border border-zinc-800 rounded-xl divide-y divide-zinc-800">
          <SettingRow label="Gmail" value="ingrid@gmail.com" badge="Conectado" badgeColor="green" />
          <SettingRow label="Outlook" value="Não conectado" badge="Conectar" badgeColor="blue" />
          <SettingRow label="Apple Mail" value="Não conectado" badge="Conectar" badgeColor="blue" />
        </div>
      </section>

      {/* Segurança */}
      <section className="mb-6">
        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">Segurança</h2>
        <div className="bg-[#18181B] border border-zinc-800 rounded-xl divide-y divide-zinc-800">
          <SettingRow label="Senha" value="••••••••••" />
          <SettingRow label="Autenticação em dois fatores" value="Desativada" badge="Ativar" badgeColor="blue" />
          <SettingRow label="Bloqueio biométrico do Cofre" value="Ativado" badge="Ativo" badgeColor="green" />
        </div>
      </section>

      {/* Notificações */}
      <section className="mb-6">
        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">Notificações</h2>
        <div className="bg-[#18181B] border border-zinc-800 rounded-xl divide-y divide-zinc-800">
          <ToggleRow label="Novos cursos detectados" defaultOn />
          <ToggleRow label="Certificados próximos do vencimento" defaultOn />
          <ToggleRow label="Assinaturas renovando em breve" defaultOn />
          <ToggleRow label="Insights semanais de IA" defaultOn />
          <ToggleRow label="Novidades do produto" />
        </div>
      </section>

      {/* Plano */}
      <section className="mb-6">
        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">Plano</h2>
        <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-zinc-100">Pro</p>
            <p className="text-xs text-zinc-500 mt-0.5">Renova em 15 de junho · R$12/mês</p>
          </div>
          <button className="px-4 py-1.5 text-sm text-zinc-300 border border-zinc-700 rounded-lg hover:border-zinc-600 hover:text-zinc-100 transition-all">
            Gerenciar plano
          </button>
        </div>
      </section>

      {/* Zona de perigo */}
      <section>
        <h2 className="text-sm font-semibold text-red-500/80 uppercase tracking-widest mb-3">Zona de perigo</h2>
        <div className="bg-[#18181B] border border-red-900/30 rounded-xl divide-y divide-zinc-800">
          <div className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm font-medium text-zinc-300">Exportar meus dados</p>
              <p className="text-xs text-zinc-500 mt-0.5">Baixe todos os seus dados em formato JSON.</p>
            </div>
            <button className="px-4 py-1.5 text-sm text-zinc-400 border border-zinc-700 rounded-lg hover:border-zinc-600 hover:text-zinc-100 transition-all">
              Exportar
            </button>
          </div>
          <div className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm font-medium text-red-400">Excluir conta</p>
              <p className="text-xs text-zinc-500 mt-0.5">Ação irreversível. Todos os dados serão removidos.</p>
            </div>
            <button className="px-4 py-1.5 text-sm text-red-400 border border-red-900/50 rounded-lg hover:bg-red-900/20 hover:border-red-700 transition-all">
              Excluir
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

function SettingRow({
  label,
  value,
  badge,
  badgeColor,
}: {
  label: string
  value: string
  badge?: string
  badgeColor?: 'green' | 'blue'
}) {
  const badgeStyles = {
    green: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    blue: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
  }

  return (
    <div className="flex items-center justify-between p-4">
      <div>
        <p className="text-sm font-medium text-zinc-300">{label}</p>
        <p className="text-xs text-zinc-500 mt-0.5">{value}</p>
      </div>
      <div className="flex items-center gap-3">
        {badge && (
          <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${badgeColor ? badgeStyles[badgeColor] : ''}`}>
            {badge}
          </span>
        )}
        <button className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">Editar</button>
      </div>
    </div>
  )
}

function ToggleRow({ label, defaultOn = false }: { label: string; defaultOn?: boolean }) {
  return (
    <div className="flex items-center justify-between p-4">
      <p className="text-sm font-medium text-zinc-300">{label}</p>
      <div
        className={`w-9 h-5 rounded-full relative transition-colors ${defaultOn ? 'bg-blue-600' : 'bg-zinc-700'}`}
      >
        <div
          className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
            defaultOn ? 'translate-x-4' : 'translate-x-0.5'
          }`}
        />
      </div>
    </div>
  )
}
