import * as actionCreators from '../action-creators/title';
import Header from './header';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        title: state.title
    };
};

const mergeProps = (stateProps, dispatchProps) => {
    return {
        ...stateProps,
        handleHeaderClick: () => {
            return dispatchProps.generateRandomTitle();
        }
    };
};

export default connect(mapStateToProps, actionCreators, mergeProps)(Header);
