import * as core from '@actions/core';
import * as helper from '../src/io-helper';
import * as trigger from '../src/trigger';
import { run } from '../src/run';

import { describe, expect } from '@jest/globals';


let getInputsMock: jest.SpiedFunction<typeof helper.getInputs>;
let setOutputMock: jest.SpiedFunction<typeof core.setOutput>;
let setFailedMock: jest.SpiedFunction<typeof core.setFailed>;

let triggerMock: jest.SpiedFunction<typeof trigger.triggerWorkflow>;

describe('run.ts', () => {
    beforeEach(() => {
        jest.clearAllMocks();

        getInputsMock = jest.spyOn(helper, 'getInputs').mockImplementation();
        setOutputMock = jest.spyOn(core, 'setOutput').mockImplementation();
        setFailedMock = jest.spyOn(core, 'setFailed').mockImplementation();
        triggerMock = jest.spyOn(trigger, 'triggerWorkflow').mockImplementation();
    });

    it('should work', async () => {
        getInputsMock.mockImplementation(() => {
            return {
                repository: 'yakubique/trigger-github-workflow',
                token: 'bla-bla-bla',
                params: '',
                ref: 'main',
                workflowID: 'test-myself.yaml',
            } as helper.ActionInputs;
        });
        triggerMock.mockImplementation(() => Promise.resolve({ status: 200 }))

        await run()
        expect(getInputsMock).toBeCalled();
        expect(setOutputMock).toHaveBeenNthCalledWith(1, 'result', { status: 200 });
    });

    it('should error', async () => {
        getInputsMock.mockImplementation(() => {
            throw new Error('unexpected input')
        });

        await run();
        expect(getInputsMock).toBeCalled();
        expect(setOutputMock).not.toBeCalled();
        expect(setFailedMock).toBeCalled();
    });
});

