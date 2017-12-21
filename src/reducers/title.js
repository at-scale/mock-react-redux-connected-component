import actions from '../actions';

const generateRandomTitle = (state, action) => {
    return action.title;
};

const actionTypes = {
    [actions.GENERATE_RANDOM_TITLE]: generateRandomTitle
};

export const titleReducer = (state = 'Default Title', action) => {
    const reducer = actionTypes[action.type];

    return reducer ?
           reducer(state, action) :
           state;
};
