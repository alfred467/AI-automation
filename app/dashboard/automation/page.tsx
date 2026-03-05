import {
    Play,
    Workflow,
    Zap,
    BarChart3,
    Plus,
    ArrowUpRight,
    Search,
    MoreVertical
} from "lucide-react"

export default function AutomationDashboard() {
    return (
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Automation Overview</h1>
                    <p className="text-slate-400 mt-1">Manage and monitor your AI-driven workflows.</p>
                </div>
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20">
                    <Plus className="w-5 h-5" />
                    Create New Workflow
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    icon={<Workflow className="w-5 h-5 text-blue-400" />}
                    label="Active Workflows"
                    value="12"
                    trend="+2 this month"
                />
                <StatCard
                    icon={<Zap className="w-5 h-5 text-yellow-400" />}
                    label="Automations Ran"
                    value="1,284"
                    trend="+15% vs last week"
                />
                <StatCard
                    icon={<Play className="w-5 h-5 text-emerald-400" />}
                    label="Success Rate"
                    value="99.4%"
                    trend="Stable"
                />
                <StatCard
                    icon={<BarChart3 className="w-5 h-5 text-purple-400" />}
                    label="AI Tokens Used"
                    value="45.2k"
                    trend="82% of limit"
                />
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Workflows */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">Recent Workflows</h2>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search workflows..."
                                className="bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-64"
                            />
                        </div>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden divide-y divide-slate-800">
                        <WorkflowItem
                            name="Customer Support Auto-Reply"
                            status="active"
                            steps={5}
                            lastRun="2 mins ago"
                            success={true}
                        />
                        <WorkflowItem
                            name="E-commerce Leads Bridge"
                            status="active"
                            steps={3}
                            lastRun="1 hour ago"
                            success={true}
                        />
                        <WorkflowItem
                            name="Social Media Content Generator"
                            status="inactive"
                            steps={8}
                            lastRun="3 days ago"
                            success={false}
                        />
                        <WorkflowItem
                            name="Invoice PDF Parser & Store"
                            status="active"
                            steps={4}
                            lastRun="5 mins ago"
                            success={true}
                        />
                    </div>
                </div>

                {/* Templates/Featured */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-white">Quick Start Templates</h2>
                    <div className="space-y-3">
                        <TemplateCard
                            title="Webhook to GPT-4o"
                            description="Instantly process any incoming data with AI."
                            color="from-blue-500/10 to-blue-500/0"
                            iconColor="text-blue-400"
                        />
                        <TemplateCard
                            title="Daily AI Summary"
                            description="Scheduled task to summarize your daily metrics."
                            color="from-emerald-500/10 to-emerald-500/0"
                            iconColor="text-emerald-400"
                        />
                        <TemplateCard
                            title="Multi-Step Logic"
                            description="A complex workflow with branching and loops."
                            color="from-purple-500/10 to-purple-500/0"
                            iconColor="text-purple-400"
                        />
                    </div>

                    <button className="w-full py-3 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all text-sm font-medium">
                        View All Templates
                    </button>
                </div>
            </div>
        </div>
    )
}

function StatCard({ icon, label, value, trend }: { icon: React.ReactNode, label: string, value: string, trend: string }) {
    return (
        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <ArrowUpRight className="w-12 h-12" />
            </div>
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                    {icon}
                </div>
                <span className="text-sm font-medium text-slate-400">{label}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">{value}</span>
                <span className="text-xs text-slate-500 mt-1">{trend}</span>
            </div>
        </div>
    )
}

function WorkflowItem({ name, status, steps, lastRun, success }: { name: string, status: 'active' | 'inactive', steps: number, lastRun: string, success: boolean }) {
    return (
        <div className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors group">
            <div className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full ${status === 'active' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-slate-600'}`} />
                <div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">{name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                            <Workflow className="w-3 h-3" /> {steps} steps
                        </span>
                        <span className="text-xs text-slate-500">•</span>
                        <span className="text-xs text-slate-500">Last run: {lastRun}</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${success ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                    {success ? 'Success' : 'Failed'}
                </div>
                <button className="p-1 hover:bg-slate-800 rounded transition-colors text-slate-500 hover:text-white">
                    <MoreVertical className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}

function TemplateCard({ title, description, color, iconColor }: { title: string, description: string, color: string, iconColor: string }) {
    return (
        <div className={`p-4 rounded-xl border border-slate-800 hover:border-slate-700 transition-all bg-gradient-to-br ${color} cursor-pointer group`}>
            <h4 className={`text-sm font-bold text-white mb-1 group-hover:${iconColor}`}>{title}</h4>
            <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
        </div>
    )
}
