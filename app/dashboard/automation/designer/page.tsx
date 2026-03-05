"use client"

import Whiteboard from "@/components/automation/whiteboard"
import {
    ChevronLeft,
    Workflow,
    Eye,
    Share2,
    Settings
} from "lucide-react"
import Link from "next/link"

export default function DesignerPage() {
    return (
        <div className="flex flex-col h-full bg-slate-950">
            {/* Top Bar */}
            <header className="h-16 border-b border-white/5 bg-slate-950/80 backdrop-blur-md flex items-center justify-between px-6 shrink-0 z-10">
                <div className="flex items-center gap-4">
                    <Link
                        href="/dashboard/automation"
                        className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </Link>
                    <div className="h-6 w-px bg-white/5" />
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                            <Workflow className="w-4 h-4 text-blue-500" />
                        </div>
                        <div>
                            <h2 className="text-sm font-bold text-white leading-none">New AI Workflow</h2>
                            <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-bold">Draft • Just created</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors" title="Preview">
                        <Eye className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors" title="Share">
                        <Share2 className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors" title="Workflow Settings">
                        <Settings className="w-5 h-5" />
                    </button>
                    <div className="h-6 w-px bg-white/5 mx-2" />
                    <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-blue-500/20">
                        Publish Workflow
                    </button>
                </div>
            </header>

            {/* Editor Area */}
            <div className="flex-1 overflow-hidden relative">
                <Whiteboard />
            </div>
        </div>
    )
}
