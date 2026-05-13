import { Sidebar } from '@/components/ui/Sidebar'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#0A0A0B] overflow-hidden">
      <Sidebar />
      <main className="flex-1 ml-[240px] overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
