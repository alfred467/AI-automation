"use client"

import React, { useState, useCallback, useRef } from "react"
import ReactFlow, {
    addEdge,
    Background,
    Controls,
    MiniMap,
    useNodesState,
    useEdgesState,
    Connection,
    Edge,
    Panel,
    ReactFlowProvider,
    Node,
} from "reactflow"
import "reactflow/dist/style.css"
import {
    Play,
    Save,
    Trash2,
    Plus,
    Workflow,
    Settings2,
    ChevronRight,
    Zap,
    MessageSquare,
    Database,
    Globe
} from "lucide-react"

// Custom Node Components
const NodeWrapper = ({ children, selected, title, icon: Icon, color }: any) => (
    <div className={`px-4 py-3 rounded-xl bg-slate-900 border-2 transition-all ${selected ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)] scale-105' : 'border-slate-800'} min-w-[180px]`}>
        <div className="flex items-center gap-2 mb-2">
            <div className={`p-1.5 rounded-lg ${color} bg-opacity-10`}>
                <Icon className={`w-4 h-4 ${color.replace('bg-', 'text-')}`} />
            </div>
            <span className="text-xs font-bold text-slate-200 uppercase tracking-tight">{title}</span>
        </div>
        <div className="text-sm text-slate-400 font-medium">
            {children}
        </div>
    </div>
)

const TriggerNode = ({ data, selected }: any) => (
    <NodeWrapper selected={selected} title="Trigger" icon={Zap} color="bg-yellow-500">
        {data.label || 'Webhook Received'}
    </NodeWrapper>
)

const ActionNode = ({ data, selected }: any) => (
    <NodeWrapper selected={selected} title="Action" icon={Play} color="bg-blue-500">
        {data.label || 'Send Email'}
    </NodeWrapper>
)

const AiNode = ({ data, selected }: any) => (
    <NodeWrapper selected={selected} title="AI Module" icon={MessageSquare} color="bg-emerald-500">
        {data.label || 'Generate Content'}
    </NodeWrapper>
)

const nodeTypes = {
    trigger: TriggerNode,
    action: ActionNode,
    ai: AiNode,
}

const initialNodes: Node[] = [
    {
        id: "1",
        type: "trigger",
        data: { label: "Incoming Webhook" },
        position: { x: 100, y: 150 },
    },
    {
        id: "2",
        type: "ai",
        data: { label: "GPT-4o Analysis" },
        position: { x: 400, y: 150 },
    },
    {
        id: "3",
        type: "action",
        data: { label: "Notify Slack" },
        position: { x: 700, y: 150 },
    },
]

const initialEdges: Edge[] = [
    { id: "e1-2", source: "1", target: "2", animated: true },
    { id: "e2-3", source: "2", target: "3", animated: true },
]

function WhiteboardInner() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
    const [selectedNode, setSelectedNode] = useState<Node | null>(null)

    const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
        [setEdges]
    )

    const onNodeClick = (_: any, node: Node) => {
        setSelectedNode(node)
    }

    const onPaneClick = () => {
        setSelectedNode(null)
    }

    const addNode = (type: string) => {
        const id = `${Date.now()}`
        const newNode: Node = {
            id,
            type,
            data: { label: `New ${type}` },
            position: { x: Math.random() * 400, y: Math.random() * 400 },
        }
        setNodes((nds) => nds.concat(newNode))
    }

    return (
        <div className="flex-1 flex overflow-hidden bg-slate-950">
            <div className="flex-1 relative">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onNodeClick={onNodeClick}
                    onPaneClick={onPaneClick}
                    nodeTypes={nodeTypes}
                    fitView
                    className="bg-slate-950"
                >
                    <Background color="#334155" gap={20} />
                    <Controls className="bg-slate-900 border border-slate-800 fill-blue-500" />
                    <MiniMap
                        nodeColor={(n) => {
                            if (n.type === 'trigger') return '#eab308'
                            if (n.type === 'ai') return '#10b981'
                            if (n.type === 'action') return '#3b82f6'
                            return '#1e293b'
                        }}
                        maskColor="rgba(15, 23, 42, 0.8)"
                        className="bg-slate-900 border border-slate-800"
                    />

                    <Panel position="top-left" className="flex gap-2">
                        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-1 rounded-xl flex items-center shadow-2xl">
                            <PanelButton icon={<Zap className="w-4 h-4 text-yellow-400" />} label="Trigger" onClick={() => addNode('trigger')} />
                            <div className="w-px h-6 bg-slate-800 mx-1" />
                            <PanelButton icon={<MessageSquare className="w-4 h-4 text-emerald-400" />} label="AI" onClick={() => addNode('ai')} />
                            <PanelButton icon={<Play className="w-4 h-4 text-blue-400" />} label="Action" onClick={() => addNode('action')} />
                        </div>
                    </Panel>

                    <Panel position="top-right" className="flex gap-3">
                        <button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 px-4 py-2 rounded-xl text-slate-300 font-medium transition-all">
                            <Save className="w-4 h-4" />
                            Save
                        </button>
                        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl text-white font-bold transition-all shadow-lg shadow-blue-500/20">
                            <Play className="w-4 h-4" />
                            Test Run
                        </button>
                    </Panel>
                </ReactFlow>
            </div>

            {/* Sidebar / Config Panel */}
            <aside className={`w-80 border-l border-slate-800 bg-slate-950/50 backdrop-blur-xl flex flex-col transition-all ${selectedNode ? 'translate-x-0' : 'translate-x-full absolute right-0'}`}>
                {selectedNode ? (
                    <div className="flex flex-col h-full">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg bg-slate-800`}>
                                    <Settings2 className="w-5 h-5 text-blue-400" />
                                </div>
                                <h3 className="font-bold text-white">Node Config</h3>
                            </div>
                            <button
                                onClick={() => setNodes(nds => nds.filter(n => n.id !== selectedNode.id))}
                                className="p-2 hover:bg-rose-500/10 text-slate-500 hover:text-rose-500 rounded-lg transition-colors"
                                title="Delete Node"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            <div className="space-y-4">
                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Node Name</label>
                                <input
                                    type="text"
                                    value={selectedNode.data.label}
                                    onChange={(e) => {
                                        const newLabel = e.target.value
                                        setNodes(nds => nds.map(n => n.id === selectedNode.id ? { ...n, data: { ...n.data, label: newLabel } } : n))
                                    }}
                                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                />
                            </div>

                            {selectedNode.type === 'ai' && (
                                <div className="space-y-4 pt-4 border-t border-slate-900">
                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Model Selection</label>
                                    <select className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none">
                                        <option>GPT-4o (Premium)</option>
                                        <option>Claude 3.5 Sonnet</option>
                                        <option>Llama 3 70B</option>
                                    </select>

                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Prompt Template</label>
                                    <textarea
                                        className="w-full h-32 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none text-sm"
                                        placeholder="Analyze the following input: {{input_data}}"
                                    />
                                </div>
                            )}

                            {selectedNode.type === 'trigger' && (
                                <div className="space-y-4 pt-4 border-t border-slate-900">
                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Webhook URL</label>
                                    <div className="flex items-center gap-2 p-3 bg-slate-900 rounded-xl border border-slate-800">
                                        <code className="text-[10px] text-blue-400 truncate flex-1">https://api.xovix.com/hook/...</code>
                                        <button className="text-[10px] font-bold text-slate-400 hover:text-white uppercase">Copy</button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="p-6 border-t border-slate-800 bg-slate-900/30">
                            <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all">
                                Update Settings
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full text-slate-600 italic text-sm">
                        Select a node to configure
                    </div>
                )}
            </aside>
        </div>
    )
}

function PanelButton({ icon, label, onClick }: { icon: React.ReactNode, label: string, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="p-2 hover:bg-white/5 rounded-lg transition-all group flex flex-col items-center gap-1 min-w-[60px]"
        >
            {icon}
            <span className="text-[9px] font-bold text-slate-500 group-hover:text-slate-200 uppercase tracking-tighter">{label}</span>
        </button>
    )
}

export default function Whiteboard() {
    return (
        <ReactFlowProvider>
            <WhiteboardInner />
        </ReactFlowProvider>
    )
}
