import * as core from '@actions/core';
import { getOptional } from '@yakubique/atils/dist';

export enum Inputs {
    Repository = 'repository',
    WorkflowID = 'workflow',
    Token = 'token',
    Params = 'params',
    Ref = 'ref',
}

export interface ActionInputs {
    repository: string;
    workflowID: string;
    token: string;
    params: string;
    ref: string;
}

export function getInputs(): ActionInputs {
    const result = {} as ActionInputs;

    result.repository = core.getInput(Inputs.Repository, { required: true });
    result.workflowID = core.getInput(Inputs.WorkflowID, { required: true });
    result.token = core.getInput(Inputs.Token, { required: true });
    result.ref = core.getInput(Inputs.Ref, { required: true });

    result.params = getOptional(Inputs.Params, "", { required: false });

    return result;
}
