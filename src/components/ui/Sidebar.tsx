'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItem {
  href: string
  label: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="9" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="1" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="9" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    href: '/library',
    label: 'Biblioteca',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 4l5.5-1.5a1 1 0 0 1 1.2.7l2.8 10.3a1 1 0 0 1-.7 1.2L10.3 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: '/certificates',
    label: 'Certificados',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5.5 9.5L4 15l4-2 4 2-1.5-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: '/ai',
    label: 'Assistente de IA',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 8h6M8 5v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    href: '/vault',
    label: 'Cofre',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 5V4a3 3 0 0 1 6 0v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="8" cy="9.5" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    href: '/profile',
    label: 'Perfil',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 14a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

const bottomItems: NavItem[] = [
  {
    href: '/settings',
    label: 'Configurações',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 1v2M8 13v2M1 8h2M13 8h2M2.93 2.93l1.41 1.41M11.66 11.66l1.41 1.41M2.93 13.07l1.41-1.41M11.66 4.34l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <aside className="fixed left-0 top-0 h-screen w-[240px] bg-[#111113] border-r border-zinc-800 flex flex-col z-30">
      {/* Logo */}
      <div className="h-14 flex items-center px-5 border-b border-zinc-800">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" fill="white" fillOpacity="0.9"/>
              <path d="M7 4L10 5.5V8.5L7 10L4 8.5V5.5L7 4Z" fill="white" fillOpacity="0.4"/>
            </svg>
          </div>
          <span className="font-semibold text-zinc-100 text-sm tracking-tight">Lumina</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        <div className="mb-3">
          <p className="px-3 text-[10px] font-semibold text-zinc-600 uppercase tracking-widest mb-1">
            Principal
          </p>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 px-3 py-2 rounded-lg text-sm
                transition-all duration-100
                group
                ${isActive(item.href)
                  ? 'bg-blue-500/10 text-blue-400 border-l-2 border-blue-500 pl-[10px]'
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 border-l-2 border-transparent'
                }
              `}
            >
              <span className={`flex-shrink-0 ${isActive(item.href) ? 'text-blue-400' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-4 border-t border-zinc-800 pt-3 space-y-0.5">
        {bottomItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 transition-all duration-100 group"
          >
            <span className="flex-shrink-0 text-zinc-500 group-hover:text-zinc-300">{item.icon}</span>
            {item.label}
          </Link>
        ))}

        {/* User */}
        <div className="mt-2 flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800/40 cursor-pointer transition-all">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-zinc-200 truncate">Ingrid Martins</p>
            <p className="text-[10px] text-zinc-500 truncate">ingrid@example.com</p>
          </div>
          <svg className="w-3 h-3 text-zinc-600" fill="none" viewBox="0 0 16 16">
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </aside>
  )
}
