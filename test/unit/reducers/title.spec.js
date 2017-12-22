import Chance from 'chance';
import actions from '../../../src/actions';
import {expect} from 'code';
import {titleReducer} from '../../../src/reducers/title';

describe('Given the title reducer', () => {
    const chance = new Chance();
    const defaultState = 'Default Title';

    describe('and invalid operations', () => {
        it('should return the default state if you pass an undefined state', () => {
            let undefinedState;

            const nextState = titleReducer(undefinedState, {});

            expect(nextState).equal(defaultState);
        });
        it('should return the default state if you pass an invalid action', () => {
            let undefinedState;

            const invalidAction = {
                type: chance.string()
            };

            const nextState = titleReducer(undefinedState, invalidAction);

            expect(nextState).equal(defaultState);
        });
    });

    describe('when generating a random title', () => {
        it('should generate a random title', () => {
            const action = {
                title: chance.string(),
                type: actions.GENERATE_RANDOM_TITLE
            };

            const nextState = titleReducer(defaultState, action);

            expect(nextState).equal(action.title);
        });
    });
});
