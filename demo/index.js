import {Header} from '../index';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider as ReactReduxProvider} from 'react-redux';
import {create} from './store-configurator';
import {getReducer} from './root-reducer';

const store = create(getReducer());

ReactDom.render(
    <div className='demo'>
        <ReactReduxProvider store={store}>
            <Header/>
        </ReactReduxProvider>
    </div>,
    document.getElementById('content')
);
