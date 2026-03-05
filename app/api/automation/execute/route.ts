import { NextResponse } from 'next/server';
import { AutomationEngine } from '@/lib/automation/engine';
import { Workflow } from '@/lib/automation/types';

export async function POST(request: Request) {
    try {
        const { workflowId, input, workflowData } = await request.json();

        // In a real system, we'd fetch the workflow from DB if workflowData isn't provided
        const workflow: Workflow = workflowData;

        if (!workflow) {
            return NextResponse.json({ error: 'Workflow not found' }, { status: 404 });
        }

        const engine = new AutomationEngine(workflow);
        const result = await engine.execute(input || {});

        return NextResponse.json(result);
    } catch (error) {
        console.error('Execution error:', error);
        return NextResponse.json({ error: 'Failed to execute workflow' }, { status: 500 });
    }
}
