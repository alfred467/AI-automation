export type NodeType = 'trigger' | 'action' | 'ai' | 'logic';

export interface WorkflowNode {
    id: string;
    type: NodeType;
    data: {
        label: string;
        config?: Record<string, any>;
    };
    position: { x: number; y: number };
}

export interface WorkflowEdge {
    id: string;
    source: string;
    target: string;
    animated?: boolean;
}

export interface Workflow {
    id: string;
    name: string;
    status: 'active' | 'inactive';
    nodes: WorkflowNode[];
    edges: WorkflowEdge[];
    createdAt: string;
    updatedAt: string;
    tenantId: string;
}

export interface ExecutionLog {
    id: string;
    workflowId: string;
    status: 'success' | 'failed' | 'running';
    startTime: string;
    endTime?: string;
    duration?: string;
    steps: ExecutionStep[];
    error?: string;
}

export interface ExecutionStep {
    nodeId: string;
    nodeType: NodeType;
    status: 'success' | 'failed';
    input: any;
    output: any;
    duration: string;
    error?: string;
}
