import { Octokit } from "@octokit/core";
import { ActionInputs } from './io-helper';

export async function triggerWorkflow(inputs: ActionInputs): Promise<any> {
    const octokit = new Octokit({
        auth: inputs.token
    })

    const [owner, repo] = inputs.repository;
    const body = {
        owner,
        repo,
        workflow_id: inputs.workflowID,
        ref: inputs.ref,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    } as any;

    if (inputs.params && inputs.params.length > 0) {
        body.inputs = JSON.parse(inputs.params);
    }

    const response = await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', body);

    return response;
}