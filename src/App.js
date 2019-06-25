import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home.js';

import Backdrop from './images/LooseLeafBackground.svg';

import './styles/Index.less';


export default function App() {
    return <Router>
        <div className='app'>
            <Route exact path='/' component={Home} />
        </div>
    </Router>
}