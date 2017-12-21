import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const create = reducers => {
    const middlewareStoreCreator = composeWithDevTools(
        applyMiddleware(thunk)
    )(createStore);

    return middlewareStoreCreator(reducers);
};
