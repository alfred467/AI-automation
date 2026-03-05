import {
    Activity,
    Search,
    Filter,
    Download,
    AlertCircle,
    CheckCircle2,
    Clock,
    ExternalLink,
    ChevronRight
} from "lucide-react"

export default function LogsPage() {
    return (
        <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-slate-950">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Execution Logs</h1>
                    <p className="text-slate-400 mt-1">Real-time audit trail of all automated workflows.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 px-4 py-2 rounded-lg text-slate-300 text-sm font-medium transition-all">
                        <Download className="w-4 h-4" />
                        Export CSV
                    </button>
                    <button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 px-4 py-2 rounded-lg text-slate-300 text-sm font-medium transition-all">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
                </div>
            </div>

            {/* Main Table Area */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm">
                <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search logs by workflow or ID..."
                            className="bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-80"
                        />
                    </div>
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                        <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-500" /> 1,240 Success</span>
                        <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-rose-500" /> 12 Failed</span>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-950/50 text-slate-500 uppercase text-[10px] font-bold tracking-widest">
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Workflow</th>
                                <th className="px-6 py-4">Execution ID</th>
                                <th className="px-6 py-4">Duration</th>
                                <th className="px-6 py-4">Started At</th>
                                <th className="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/50">
                            <LogRow
                                status="success"
                                workflow="Customer Support Auto-Reply"
                                id="exec_9v2m1n0a"
                                duration="1.2s"
                                time="Just now"
                            />
                            <LogRow
                                status="failed"
                                workflow="E-commerce Leads Bridge"
                                id="exec_4k8l3p9q"
                                duration="0.4s"
                                time="2 mins ago"
                                error="AI Timeout"
                            />
                            <LogRow
                                status="success"
                                workflow="Invoice PDF Parser"
                                id="exec_7b6c5x4y"
                                duration="3.8s"
                                time="15 mins ago"
                            />
                            <LogRow
                                status="success"
                                workflow="Social Media Content Gen"
                                id="exec_1a2z3x4c"
                                duration="4.2s"
                                time="1 hour ago"
                            />
                            <LogRow
                                status="success"
                                workflow="Customer Support Auto-Reply"
                                id="exec_8m7n6b5v"
                                duration="1.1s"
                                time="2 hours ago"
                            />
                            <LogRow
                                status="success"
                                workflow="E-commerce Leads Bridge"
                                id="exec_k8l3p9qj"
                                duration="0.5s"
                                time="3 hours ago"
                            />
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t border-slate-800 bg-slate-950/50 flex items-center justify-between">
                    <span className="text-xs text-slate-500">Showing 1-10 of 1,252 executions</span>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1 bg-slate-900 border border-slate-800 rounded text-xs text-slate-400 hover:text-white transition-colors">Previous</button>
                        <button className="px-3 py-1 bg-blue-600 border border-blue-500 rounded text-xs text-white">Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function LogRow({ status, workflow, id, duration, time, error }: any) {
    return (
        <tr className="hover:bg-white/5 transition-colors group">
            <td className="px-6 py-4">
                {status === 'success' ? (
                    <div className="flex items-center gap-2 text-emerald-500">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-tighter">Success</span>
                    </div>
                ) : (
                    <div className="flex items-center gap-2 text-rose-500">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-tighter">Failed</span>
                    </div>
                )}
            </td>
            <td className="px-6 py-4">
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors cursor-pointer">{workflow}</span>
                    {error && <span className="text-[10px] text-rose-400 mt-0.5">{error}</span>}
                </div>
            </td>
            <td className="px-6 py-4">
                <code className="text-xs text-slate-500">{id}</code>
            </td>
            <td className="px-6 py-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {duration}
                </div>
            </td>
            <td className="px-6 py-4 text-xs text-slate-500">
                {time}
            </td>
            <td className="px-6 py-4 text-right">
                <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-500 hover:text-white transition-all">
                    <ExternalLink className="w-4 h-4" />
                </button>
            </td>
        </tr>
    )
}
