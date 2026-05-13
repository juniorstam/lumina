'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

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
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      {/* Mobile/Tablet TopBar — hidden on lg+ */}
      <div className="fixed top-0 left-0 right-0 h-14 bg-[#0A0A0B]/95 backdrop-blur-sm border-b border-zinc-800 z-40 flex lg:hidden items-center px-4 justify-between">
        <button
          onClick={() => setMobileOpen(true)}
          className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-colors"
          aria-label="Abrir menu"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        </button>

        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" fill="white" fillOpacity="0.9"/>
              <path d="M7 4L10 5.5V8.5L7 10L4 8.5V5.5L7 4Z" fill="white" fillOpacity="0.4"/>
            </svg>
          </div>
          <span className="font-semibold text-zinc-100 text-sm tracking-tight">Lumina</span>
        </Link>

        <div className="w-10 h-10 flex items-center justify-center">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-semibold">
            A
          </div>
        </div>
      </div>

      {/* Overlay — mobile only, when drawer open */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-screen bg-[#111113] border-r border-zinc-800 flex flex-col z-50 transition-transform duration-300
          w-[240px]
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:w-16
          lg:w-[240px]
        `}
      >
        {/* Logo */}
        <div className="h-14 flex items-center border-b border-zinc-800 flex-shrink-0 px-3 md:justify-center lg:px-5 lg:justify-start">
          <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setMobileOpen(false)}>
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" fill="white" fillOpacity="0.9"/>
                <path d="M7 4L10 5.5V8.5L7 10L4 8.5V5.5L7 4Z" fill="white" fillOpacity="0.4"/>
              </svg>
            </div>
            <span className="font-semibold text-zinc-100 text-sm tracking-tight md:hidden lg:block">Lumina</span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2 py-4 space-y-0.5 overflow-y-auto lg:px-3">
          <div className="mb-3">
            <p className="px-3 text-[10px] font-semibold text-zinc-600 uppercase tracking-widest mb-1 md:hidden lg:block">
              Principal
            </p>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                title={item.label}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm
                  transition-all duration-100
                  group min-h-[44px]
                  md:justify-center md:px-2
                  lg:justify-start lg:px-3
                  ${isActive(item.href)
                    ? 'bg-blue-500/10 text-blue-400 border-l-2 border-blue-500 pl-[10px] md:border-l-0 md:pl-2 lg:border-l-2 lg:pl-[10px]'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 border-l-2 border-transparent md:border-l-0 lg:border-l-2'
                  }
                `}
              >
                <span className={`flex-shrink-0 ${isActive(item.href) ? 'text-blue-400' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                  {item.icon}
                </span>
                <span className="md:hidden lg:block">{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>

        {/* Bottom */}
        <div className="px-2 pb-4 border-t border-zinc-800 pt-3 space-y-0.5 lg:px-3">
          {bottomItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              title={item.label}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 transition-all duration-100 group min-h-[44px] md:justify-center md:px-2 lg:justify-start lg:px-3"
            >
              <span className="flex-shrink-0 text-zinc-500 group-hover:text-zinc-300">{item.icon}</span>
              <span className="md:hidden lg:block">{item.label}</span>
            </Link>
          ))}

          {/* User */}
          <div className="mt-2 flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800/40 cursor-pointer transition-all min-h-[44px] md:justify-center md:px-2 lg:justify-start lg:px-3">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
              A
            </div>
            <div className="flex-1 min-w-0 md:hidden lg:block">
              <p className="text-xs font-medium text-zinc-200 truncate">Ingrid Martins</p>
              <p className="text-[10px] text-zinc-500 truncate">ingrid@example.com</p>
            </div>
            <svg className="w-3 h-3 text-zinc-600 md:hidden lg:block" fill="none" viewBox="0 0 16 16">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </aside>
    </>
  )
}
