import * as actionCreators from '../../../src/action-creators';
import * as titleActionCreators from '../../../src/action-creators/title';
import {expect} from 'code';

describe('Given the action creators index', () => {
    it('should be exporting all expected action creators', () => {
        const expectedActionCreators = Object.keys({
            ...titleActionCreators
        });

        const actualActionCreators = Object.keys(actionCreators);

        actualActionCreators.some(actionCreator => {
            return expectedActionCreators.includes(actionCreator);
        });

        expect(actualActionCreators.length).equal(expectedActionCreators.length);
    });
});
