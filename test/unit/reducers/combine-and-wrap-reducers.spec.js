import * as redux from 'redux';
import Chance from 'chance';
import {combineAndWrapReducers} from '../../../src/reducers/combine-and-wrap-reducers';
import {expect} from 'code';
import sinon from 'sinon';

describe('Combine and wrap reducers', () => {
    const chance = new Chance();
    const sandbox = sinon.createSandbox();

    let combineReducersStub,
        modelStub,
        reducerStub;

    beforeEach(() => {
        combineReducersStub = sandbox.stub(redux, 'combineReducers');
        reducerStub = sandbox.stub();
        combineReducersStub.returns(reducerStub);
        modelStub = sandbox.stub();
    });

    afterEach(() => {
        sandbox.restore();
    });

    const any = {
        action: () => {
            return chance.hash();
        },
        reducers: () => {
            return {
                reducer: chance.hash()
            };
        },
        state: () => {
            return {
                state: chance.hash()
            };
        }
    };

    it('should combine the provided reducers', () => {
        const expectedReducers = any.reducers();

        combineAndWrapReducers(expectedReducers, modelStub);

        sinon.assert.calledOnce(combineReducersStub);
        sinon.assert.calledWithExactly(combineReducersStub, expectedReducers);
    });

    it('should pass the state and action along to the combined reducer', () => {
        const action = any.action();
        const state = any.state();

        const reducer = combineAndWrapReducers(any.reducers(), modelStub);

        reducer(state, action);

        sinon.assert.calledOnce(reducerStub);
        sinon.assert.calledWithExactly(reducerStub, state, action);
    });

    it('should ensure the result of the combined reducer is a tcomb model', () => {
        const reducerResult = Symbol('reducerResult');
        const modelResult = Symbol('modelResult');

        reducerStub.returns(reducerResult);

        modelStub.withArgs(reducerResult).returns(modelResult);

        const reducer = combineAndWrapReducers(any.reducers(), modelStub);

        const nextState = reducer(any.state(), any.action());

        expect(nextState).equal(modelResult);
    });
});
