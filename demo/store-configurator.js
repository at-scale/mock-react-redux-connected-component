import {applyMiddleware, createStore} from 'redux';
import State from '../src/types/state';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createCheckedReducer} from 'redux-tcomb';
import thunk from 'redux-thunk';

export const create = reducers => {
    const checkedReducer = createCheckedReducer(reducers, State);

    const middlewareStoreCreator = composeWithDevTools(
        applyMiddleware(thunk)
    )(createStore);

    return middlewareStoreCreator(checkedReducer);
};
