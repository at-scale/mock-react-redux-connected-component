import actions from '../../src/actions';
import {expect} from 'code';

describe('Given the list of actions', () => {
    it('should be a immutable', () => {
        expect(Object.isFrozen(actions)).equal(true);
    });
});
