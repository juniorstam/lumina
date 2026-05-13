import { Sidebar } from '@/components/ui/Sidebar'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#0A0A0B] overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto pt-14 lg:pt-0 pl-0 md:pl-16 lg:pl-[240px]">
        {children}
      </main>
    </div>
  )
}
