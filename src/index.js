import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// Service Worker.
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../public/serviceWorker.js');
}