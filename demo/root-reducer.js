import {combineReducers} from 'redux';
import {titleReducer as title} from '../src/reducers/title';

export const getReducer = () => {
    return combineReducers({
        title
    });
};
