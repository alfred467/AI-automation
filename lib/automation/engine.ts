import { Workflow, WorkflowNode, ExecutionLog, ExecutionStep } from "./types";

export class AutomationEngine {
    private workflow: Workflow;

    constructor(workflow: Workflow) {
        this.workflow = workflow;
    }

    async execute(inputData: any): Promise<ExecutionLog> {
        const executionId = `exec_${Math.random().toString(36).substr(2, 9)}`;
        const startTime = new Date().toISOString();
        const steps: ExecutionStep[] = [];

        let currentLog: ExecutionLog = {
            id: executionId,
            workflowId: this.workflow.id,
            status: 'running',
            startTime,
            steps: []
        };

        try {
            // Find trigger node
            const triggerNode = this.workflow.nodes.find(n => n.type === 'trigger');
            if (!triggerNode) throw new Error("No trigger node found in workflow.");

            // For simplicity in this MVP, we follow the edges in sequence
            // In a real system, we'd handle branching and complexity
            let currentNode: WorkflowNode | undefined = triggerNode;
            let lastOutput = inputData;

            while (currentNode) {
                const stepStartTime = Date.now();
                console.log(`Executing node: ${currentNode.data.label} (${currentNode.type})`);

                let nodeResult: any;
                try {
                    nodeResult = await this.executeNode(currentNode, lastOutput);

                    steps.push({
                        nodeId: currentNode.id,
                        nodeType: currentNode.type,
                        status: 'success',
                        input: lastOutput,
                        output: nodeResult,
                        duration: `${Date.now() - stepStartTime}ms`
                    });

                    lastOutput = nodeResult;

                    // Find next node via edge
                    const edge = this.workflow.edges.find(e => e.source === currentNode?.id);
                    currentNode = edge ? this.workflow.nodes.find(n => n.id === edge.target) : undefined;

                } catch (error: any) {
                    steps.push({
                        nodeId: currentNode.id,
                        nodeType: currentNode.type,
                        status: 'failed',
                        input: lastOutput,
                        output: null,
                        duration: `${Date.now() - stepStartTime}ms`,
                        error: error.message
                    });
                    throw error;
                }
            }

            currentLog.status = 'success';
        } catch (error: any) {
            currentLog.status = 'failed';
            currentLog.error = error.message;
        } finally {
            currentLog.endTime = new Date().toISOString();
            currentLog.duration = `${Date.now() - new Date(startTime).getTime()}ms`;
            currentLog.steps = steps;
        }

        return currentLog;
    }

    private async executeNode(node: WorkflowNode, input: any): Promise<any> {
        switch (node.type) {
            case 'trigger':
                return input; // Webhook data or schedule event

            case 'ai':
                return this.mockAiCall(node, input);

            case 'action':
                return this.executeAction(node, input);

            case 'logic':
                return this.executeLogic(node, input);

            default:
                throw new Error(`Unknown node type: ${node.type}`);
        }
    }

    private async mockAiCall(node: WorkflowNode, input: any): Promise<any> {
        // In production, this would call OpenAI/Azure
        console.log("Mocking AI call for node:", node.data.label);
        await new Promise(r => setTimeout(r, 1500)); // Simulate latency
        return {
            text: `AI processed the following input: ${JSON.stringify(input)}. Based on ${node.data.label}, here is the result.`,
            model: node.data.config?.model || "gpt-4o",
            tokens: 250
        };
    }

    private async executeAction(node: WorkflowNode, input: any): Promise<any> {
        console.log("Executing action:", node.data.label);
        await new Promise(r => setTimeout(r, 500));
        return {
            success: true,
            delivered_to: "system-logs",
            message: "Action completed successfully"
        };
    }

    private async executeLogic(node: WorkflowNode, input: any): Promise<any> {
        console.log("Processing logic:", node.data.label);
        // Basic pass-through for MVP logic nodes
        return input;
    }
}
