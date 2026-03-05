import { NextResponse } from 'next/server';
import { Workflow } from '@/lib/automation/types';

// In-memory mock storage for demo purposes
// In production, this would be a database (PostgreSQL as per blueprint)
let workflows: Workflow[] = [
    {
        id: 'wf_1',
        name: 'Customer Support Auto-Reply',
        status: 'active',
        nodes: [
            { id: '1', type: 'trigger', data: { label: 'Incoming Webhook' }, position: { x: 100, y: 150 } },
            { id: '2', type: 'ai', data: { label: 'GPT-4o Analysis', config: { model: 'gpt-4o' } }, position: { x: 400, y: 150 } },
            { id: '3', type: 'action', data: { label: 'Notify Slack' }, position: { x: 700, y: 150 } }
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', animated: true },
            { id: 'e2-3', source: '2', target: '3', animated: true }
        ],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tenantId: 'tenant_default'
    }
];

export async function GET() {
    return NextResponse.json(workflows);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const newWorkflow: Workflow = {
            ...body,
            id: body.id || `wf_${Math.random().toString(36).substr(2, 9)}`,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            tenantId: 'tenant_default'
        };

        workflows.push(newWorkflow);
        return NextResponse.json(newWorkflow, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create workflow' }, { status: 400 });
    }
}
