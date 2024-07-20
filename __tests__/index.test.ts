
import * as main from '../src/run';

const runMock = jest.spyOn(main, 'run').mockImplementation();

describe('index.ts', () => {
    it('calls run when imported', async () => {
        require('../src/index');

        expect(runMock).toHaveBeenCalled();
    });
});

