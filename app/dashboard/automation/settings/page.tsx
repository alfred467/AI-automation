import {
    Lock,
    Key,
    Settings,
    Globe,
    ShieldCheck,
    AlertTriangle,
    Save,
    RefreshCw,
    Eye,
    EyeOff
} from "lucide-react"

export default function SettingsPage() {
    return (
        <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-slate-950">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-white tracking-tight">API & Module Settings</h1>
                <p className="text-slate-400 mt-1">Configure your AI providers, global rate limits, and security preferences.</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Left Column: Config Forms */}
                <div className="xl:col-span-2 space-y-8">

                    {/* AI Providers Section */}
                    <Section card title="AI Provider Configuration" description="Input your API keys to enable AI-powered steps in your workflows.">
                        <div className="space-y-6">
                            <ApiKeyField
                                label="OpenAI API Key"
                                placeholder="sk-..."
                                description="Required for GPT-4o and DALL-E models."
                            />
                            <ApiKeyField
                                label="Anthropic API Key"
                                placeholder="sk-ant-..."
                                description="Required for Claude 3.5 Sonnet and Opus."
                            />
                            <div className="pt-4 border-t border-slate-800">
                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-4">Custom AI Endpoint (Ollama/Azure)</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input type="text" placeholder="https://your-endpoint.com/v1" className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                                    <input type="password" placeholder="Endpoint Secret / Key" className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* Workflow Defaults */}
                    <Section card title="Module Defaults" description="Global settings applied to all new workflows created in this tenant.">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-300">Default AI Model</label>
                                <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none">
                                    <option>GPT-4o</option>
                                    <option>GPT-3.5 Turbo</option>
                                    <option>Claude 3.5 Sonnet</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-300">Max Steps per Workflow</label>
                                <input type="number" defaultValue={25} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-300">Retry Policy</label>
                                <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none">
                                    <option>Retry 3 times on failure</option>
                                    <option>No retries</option>
                                    <option>Infinite retries (Not recommended)</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-300">Execution Timeout (ms)</label>
                                <input type="number" defaultValue={30000} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none" />
                            </div>
                        </div>
                    </Section>

                    <div className="flex justify-end gap-3">
                        <button className="flex items-center gap-2 px-6 py-3 border border-slate-800 rounded-xl text-slate-400 hover:text-white transition-all font-medium">
                            <RefreshCw className="w-4 h-4" />
                            Reset Changes
                        </button>
                        <button className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20">
                            <Save className="w-4 h-4" />
                            Save Settings
                        </button>
                    </div>
                </div>

                {/* Right Column: Status & Info */}
                <div className="space-y-8">
                    <div className="bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-blue-500/20 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <ShieldCheck className="w-5 h-5 text-blue-400" />
                            <h3 className="font-bold text-white">System Health</h3>
                        </div>
                        <div className="space-y-4">
                            <HealthItem label="Workflow Engine" status="Online" />
                            <HealthItem label="OpenAI API" status="Connected" />
                            <HealthItem label="Webhook Gateway" status="Active" color="text-emerald-400" />
                            <HealthItem label="Log Storage" status="92% Free" color="text-emerald-400" />
                        </div>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4 text-yellow-500">
                            <AlertTriangle className="w-5 h-5" />
                            <h3 className="font-bold text-white underline underline-offset-4 decoration-yellow-500/50">Security Notice</h3>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            API keys are encrypted using AES-256-GCM before storage. They are only decrypted in memory during workflow execution. Never share your primary endpoint secret with unauthorized users.
                        </p>
                    </div>

                    <button className="w-full py-4 border border-slate-800 rounded-2xl flex items-center justify-center gap-3 text-slate-500 hover:text-slate-300 hover:bg-slate-900 transition-all font-semibold">
                        <Lock className="w-4 h-4" />
                        View Audit Logs
                    </button>
                </div>
            </div>
        </div>
    )
}

function Section({ title, description, children, card }: any) {
    return (
        <div className={card ? "bg-slate-900/50 border border-slate-800 rounded-2xl p-8" : "space-y-6"}>
            <div>
                <h2 className="text-xl font-bold text-white mb-1">{title}</h2>
                <p className="text-sm text-slate-500">{description}</p>
            </div>
            <div className="mt-6 uppercase">{children}</div>
        </div>
    )
}

function ApiKeyField({ label, placeholder, description }: any) {
    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-300">{label}</label>
                <div className="flex items-center gap-2 cursor-pointer text-blue-400 hover:text-blue-300">
                    <Eye className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Show</span>
                </div>
            </div>
            <div className="relative">
                <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                <input
                    type="password"
                    placeholder={placeholder}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
            </div>
            <p className="text-[10px] text-slate-500 italic mt-1">{description}</p>
        </div>
    )
}

function HealthItem({ label, status, color = "text-emerald-400" }: any) {
    return (
        <div className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
            <span className="text-sm text-slate-400">{label}</span>
            <span className={`text-sm font-bold ${color}`}>{status}</span>
        </div>
    )
}
