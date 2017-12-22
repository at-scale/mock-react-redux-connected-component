import {MockReactHeaderComponent} from '@at-scale/mock-react-components';
import PropTypes from 'prop-types';
import React from 'react';

const Header = (props) => {
    return (
        <div className='header'>
            <MockReactHeaderComponent title={props.title}/>
            <button onClick={props.handleHeaderClick}>{'Generate RandomTitle'}</button>
        </div>
    );
};

Header.propTypes = {
    handleHeaderClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
};

export default Header;
