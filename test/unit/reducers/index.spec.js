import * as reducerFactory from '../../../src/reducers/combine-and-wrap-reducers';
import State from '../../../src/state';
import {expect} from 'code';
import {getWrappedReducers} from '../../../src/reducers';
import sinon from 'sinon';
import {titleReducer as title} from '../../../src/reducers/title';

describe('Given the index reducer', () => {
    const sandbox = sinon.createSandbox();

    afterEach(() => {
        sandbox.restore();
    });

    it('should wrap the composed reducer with the `State` type and return a the wrapped reducers', () => {
        const expectedWrappedReducers = Symbol('wrappedReducersMock');
        const combineAndWrapReducersStub = sandbox.stub(reducerFactory, 'combineAndWrapReducers').returns(expectedWrappedReducers);
        const expectedReducers = {
            title
        };

        const wrappedReducers = getWrappedReducers();

        sinon.assert.calledOnce(combineAndWrapReducersStub);
        sinon.assert.calledWithExactly(combineAndWrapReducersStub, expectedReducers, State);

        expect(wrappedReducers).equal(expectedWrappedReducers);
    });
});
