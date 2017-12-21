import * as actionCreators from '../action-creators/title';
import Header from './header';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    title: state.title
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    handleHeaderClick: () => dispatchProps.generateRandomTitle()
});

export default connect(mapStateToProps, actionCreators, mergeProps)(Header);
