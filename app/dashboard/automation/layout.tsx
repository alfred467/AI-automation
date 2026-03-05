import type React from "react"
import Link from "next/link"
import { 
  LayoutDashboard, 
  Workflow, 
  Activity, 
  Settings, 
  ChevronRight,
  PlusCircle
} from "lucide-react"

interface SidebarItemProps {
  href: string
  icon: React.ReactNode
  label: string
}

const SidebarItem = ({ href, icon, label }: SidebarItemProps) => (
  <Link 
    href={href}
    className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors group"
  >
    <span className="text-slate-500 group-hover:text-blue-400 transition-colors">
      {icon}
    </span>
    <span className="text-sm font-medium">{label}</span>
    <ChevronRight className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
  </Link>
)

export default function AutomationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-slate-950 text-slate-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 flex flex-col bg-slate-950/50 backdrop-blur-xl">
        <div className="p-6 border-b border-slate-800">
          <Link href="/dashboard/automation" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <Workflow className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">Xovix <span className="text-blue-500">Auto</span></span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 mb-2">
            Platform
          </div>
          <SidebarItem 
            href="/dashboard/automation" 
            icon={<LayoutDashboard className="w-5 h-5" />} 
            label="Overview" 
          />
          <SidebarItem 
            href="/dashboard/automation/designer" 
            icon={<PlusCircle className="w-5 h-5" />} 
            label="Create Workflow" 
          />
          <SidebarItem 
            href="/dashboard/automation/workflows" 
            icon={<Workflow className="w-5 h-5" />} 
            label="My Workflows" 
          />
          
          <div className="pt-6 text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 mb-2">
            Monitoring
          </div>
          <SidebarItem 
            href="/dashboard/automation/logs" 
            icon={<Activity className="w-5 h-5" />} 
            label="Execution Logs" 
          />
          
          <div className="pt-6 text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 mb-2">
            System
          </div>
          <SidebarItem 
            href="/dashboard/automation/settings" 
            icon={<Settings className="w-5 h-5" />} 
            label="API Settings" 
          />
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-4 border border-slate-700/50">
            <h4 className="text-xs font-semibold text-slate-300 mb-1">Trial Version</h4>
            <p className="text-[10px] text-slate-500 mb-3">Upgrade to Pro for unlimited AI steps and webhooks.</p>
            <button className="w-full py-2 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e293b_0%,transparent_50%)] opacity-20 pointer-events-none" />
        {children}
      </main>
    </div>
  )
}
