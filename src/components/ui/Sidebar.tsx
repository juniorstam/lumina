'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItem {
  href: string
  label: string
  shortLabel: string
  icon: React.ReactNode
  sidebarIcon?: React.ReactNode
}

const DashboardIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="9" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="1" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="9" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

const LibraryIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 4l5.5-1.5a1 1 0 0 1 1.2.7l2.8 10.3a1 1 0 0 1-.7 1.2L10.3 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const CertificatesIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5.5 9.5L4 15l4-2 4 2-1.5-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const AIIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L14.5 8.5L20 9.27L16 13.14L17.09 19L12 16.25L6.91 19L8 13.14L4 9.27L9.5 8.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ProfileIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 14a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const VaultIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5 5V4a3 3 0 0 1 6 0v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="8" cy="9.5" r="1.5" fill="currentColor"/>
  </svg>
)

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 1v2M8 13v2M1 8h2M13 8h2M2.93 2.93l1.41 1.41M11.66 11.66l1.41 1.41M2.93 13.07l1.41-1.41M11.66 4.34l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

// Items shown in both bottom nav (mobile) and sidebar (tablet/desktop)
const bottomNavItems = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    shortLabel: 'Dashboard',
    mobileIcon: <DashboardIcon size={20} />,
    sidebarIcon: <DashboardIcon size={16} />,
  },
  {
    href: '/library',
    label: 'Biblioteca',
    shortLabel: 'Biblioteca',
    mobileIcon: <LibraryIcon size={20} />,
    sidebarIcon: <LibraryIcon size={16} />,
  },
  {
    href: '/certificates',
    label: 'Certificados',
    shortLabel: 'Cert.',
    mobileIcon: <CertificatesIcon size={20} />,
    sidebarIcon: <CertificatesIcon size={16} />,
  },
  {
    href: '/ai',
    label: 'Assistente de IA',
    shortLabel: 'IA',
    mobileIcon: <AIIcon size={20} />,
    sidebarIcon: <AIIcon size={16} />,
  },
  {
    href: '/profile',
    label: 'Perfil',
    shortLabel: 'Perfil',
    mobileIcon: <ProfileIcon size={20} />,
    sidebarIcon: <ProfileIcon size={16} />,
  },
]

// Extra items only in sidebar (not bottom nav)
const sidebarExtraItems = [
  {
    href: '/vault',
    label: 'Cofre',
    icon: <VaultIcon />,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      {/* TopBar mobile — sem hambúrguer, apenas logo centralizado + avatar */}
      <div className="fixed top-0 left-0 right-0 h-14 bg-[#0A0A0B]/95 backdrop-blur-sm border-b border-zinc-800 z-40 flex md:hidden items-center px-4 justify-between">
        {/* Espaço vazio à esquerda para balancear */}
        <div className="w-8" />

        {/* Logo centralizado */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" fill="white" fillOpacity="0.9"/>
              <path d="M7 4L10 5.5V8.5L7 10L4 8.5V5.5L7 4Z" fill="white" fillOpacity="0.4"/>
            </svg>
          </div>
          <span className="font-semibold text-zinc-100 text-sm tracking-tight">Lumina</span>
        </Link>

        {/* Avatar à direita */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-semibold">
          I
        </div>
      </div>

      {/* Bottom Navigation Bar — mobile only */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-[#111113]/95 backdrop-blur-md border-t border-zinc-800">
          <div className="flex items-center justify-around px-2 pt-2 pb-safe">
            {bottomNavItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col items-center justify-center gap-0.5 flex-1 min-h-[56px] py-2 relative transition-colors ${
                    active ? 'text-blue-400' : 'text-zinc-500'
                  }`}
                >
                  {/* Active indicator dot acima do ícone */}
                  {active && (
                    <span className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400" />
                  )}
                  {item.mobileIcon}
                  <span className="text-[10px] font-medium leading-none">{item.shortLabel}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Sidebar — tablet (md) e desktop (lg+), oculto no mobile */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen bg-[#111113] border-r border-zinc-800 flex-col z-50 w-16 lg:w-[240px]">
        {/* Logo */}
        <div className="h-14 flex items-center border-b border-zinc-800 flex-shrink-0 px-3 justify-center lg:px-5 lg:justify-start">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" fill="white" fillOpacity="0.9"/>
                <path d="M7 4L10 5.5V8.5L7 10L4 8.5V5.5L7 4Z" fill="white" fillOpacity="0.4"/>
              </svg>
            </div>
            <span className="font-semibold text-zinc-100 text-sm tracking-tight hidden lg:block">Lumina</span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2 py-4 space-y-0.5 overflow-y-auto lg:px-3">
          <div className="mb-3">
            <p className="px-3 text-[10px] font-semibold text-zinc-600 uppercase tracking-widest mb-1 hidden lg:block">
              Principal
            </p>
            {[...bottomNavItems, ...sidebarExtraItems].map((item) => {
              const href = item.href
              const active = isActive(href)
              const label = item.label
              const icon = 'sidebarIcon' in item ? item.sidebarIcon : item.icon
              return (
                <Link
                  key={href}
                  href={href}
                  title={label}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm
                    transition-all duration-100
                    group min-h-[44px]
                    justify-center
                    lg:justify-start lg:px-3
                    ${active
                      ? 'bg-blue-500/10 text-blue-400 lg:border-l-2 lg:border-blue-500 lg:pl-[10px]'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 lg:border-l-2 lg:border-transparent'
                    }
                  `}
                >
                  <span className={`flex-shrink-0 ${active ? 'text-blue-400' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                    {icon}
                  </span>
                  <span className="hidden lg:block">{label}</span>
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Bottom */}
        <div className="px-2 pb-4 border-t border-zinc-800 pt-3 space-y-0.5 lg:px-3">
          <Link
            href="/settings"
            title="Configurações"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 transition-all duration-100 group min-h-[44px] justify-center lg:justify-start lg:px-3"
          >
            <span className="flex-shrink-0 text-zinc-500 group-hover:text-zinc-300"><SettingsIcon /></span>
            <span className="hidden lg:block">Configurações</span>
          </Link>

          {/* User */}
          <div className="mt-2 flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800/40 cursor-pointer transition-all min-h-[44px] justify-center lg:justify-start lg:px-3">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
              I
            </div>
            <div className="flex-1 min-w-0 hidden lg:block">
              <p className="text-xs font-medium text-zinc-200 truncate">Ingrid Martins</p>
              <p className="text-[10px] text-zinc-500 truncate">ingrid@example.com</p>
            </div>
            <svg className="w-3 h-3 text-zinc-600 hidden lg:block" fill="none" viewBox="0 0 16 16">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </aside>
    </>
  )
}
