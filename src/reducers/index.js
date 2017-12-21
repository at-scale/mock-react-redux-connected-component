import State from '../state';
import {combineAndWrapReducers} from './combine-and-wrap-reducers';
import {titleReducer as title} from './title';

export const getWrappedReducers = () => {
    const reducers = {
        title
    };

    return combineAndWrapReducers(reducers, State);
};
