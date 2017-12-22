import State from '../../../src/types/state';
import {expect} from 'code';
import t from 'tcomb';

describe('Given the State type', () => {
    it('should have the correct state', () => {
        expect(t.getTypeName(State)).equal('State');
    });
});
