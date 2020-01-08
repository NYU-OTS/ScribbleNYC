import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";

import Home from './pages/Home.js';
import About from './pages/About.js';
import LastYear from './pages/LastYear.js';
import ThisYear from './pages/ThisYear.js';
import FAQ from './pages/FAQ.js';

import './styles/Index.less';

createBrowserHistory();
export default function App() {
    return <Router>
        <div className='app'>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/2019' component={ThisYear} />
            <Route exact path='/2018' component={LastYear} />
            <Route exact path='/faq' component={FAQ} />
        </div>
    </Router>
}
