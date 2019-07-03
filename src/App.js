import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js';
import LastYear from './pages/LastYear.js';
import ThisYear from './pages/ThisYear.js';
import FAQ from './pages/FAQ.js';

import './styles/Index.less';


export default function App() {
    return <Router>
        <div className='app'>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/thisyear' component={ThisYear} />
            <Route path='/lastyear' component={LastYear} />
            <Route path='/faq' component={FAQ} />
        </div>
    </Router>
}