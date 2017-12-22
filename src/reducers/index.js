import {combineReducers} from 'redux';
import {titleReducer as title} from './title';

export const getReducer = () => {
    return combineReducers({
        title
    });
};
