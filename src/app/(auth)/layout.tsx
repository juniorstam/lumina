import Link from 'next/link'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0A0A0B] flex flex-col">
      {/* Subtle grid background */}
      <div className="fixed inset-0 grid-pattern opacity-50 pointer-events-none" />

      {/* Top bar */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" fill="white" fillOpacity="0.9"/>
              <path d="M7 4L10 5.5V8.5L7 10L4 8.5V5.5L7 4Z" fill="white" fillOpacity="0.4"/>
            </svg>
          </div>
          <span className="font-semibold text-zinc-100 text-sm tracking-tight">Lumina</span>
        </Link>
        <div className="flex items-center gap-1 text-sm text-zinc-500">
          <span>Need help?</span>
          <a href="mailto:support@lumina.io" className="text-zinc-400 hover:text-zinc-200 transition-colors ml-1">
            support@lumina.io
          </a>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
        {children}
      </div>
    </div>
  )
}
