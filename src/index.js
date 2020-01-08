import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

// Service Worker.
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../public/serviceWorker.js');
}
