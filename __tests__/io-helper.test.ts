
import * as core from '@actions/core';
import { describe, expect } from '@jest/globals';
import { ActionInputs, getInputs, Inputs } from '../src/io-helper';

let getInputMock: jest.SpiedFunction<typeof core.getInput>;

describe('io-helper.ts', () => {
    beforeEach(() => {
        jest.clearAllMocks();

        getInputMock = jest.spyOn(core, 'getInput').mockImplementation();
    });

    it('should get proper input', () => {
        getInputMock.mockImplementation((name, _) => {
            switch (name) {
                case Inputs.Repository:
                    return 'test';
                case Inputs.WorkflowID:
                    return 'test';
                case Inputs.Token:
                    return 'test';
                case Inputs.Params:
                    return 'test';
                case Inputs.Ref:
                    return 'test';
                default:
                    return '';
            }
        });

        const inputs = getInputs();
        expect(inputs).toEqual({
            repository: 'test',
            workflowID: 'test',
            token: 'test',
            params: 'test',
            ref: 'test',
        } as ActionInputs);
    });
});

