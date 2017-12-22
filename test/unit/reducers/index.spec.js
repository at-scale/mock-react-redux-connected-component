import * as redux from 'redux';
import {expect} from 'code';
import {getReducer} from '../../../src/reducers';
import sinon from 'sinon';
import {titleReducer as title} from '../../../src/reducers/title';

describe('Given the index reducer', () => {
    const sandbox = sinon.createSandbox();

    afterEach(() => {
        sandbox.restore();
    });

    it('should combine expected reducers', () => {
        const expectedWrappedReducer = Symbol('wrappedReducerMock');
        const combineReducersStub = sandbox.stub(redux, 'combineReducers').returns(expectedWrappedReducer);
        const expectedReducers = {
            title
        };

        const wrappedReducer = getReducer();

        sinon.assert.calledOnce(combineReducersStub);
        sinon.assert.calledWithExactly(combineReducersStub, expectedReducers);

        expect(wrappedReducer).equal(expectedWrappedReducer);
    });
});
