import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

console.log('Code is running!');

chayns.ready
    .then(() => {
        console.log('chayns is ready');
        try {
            console.log('Trying to render App component');
            ReactDOM.render(<App />, document.querySelector('#root'));
        } catch (e) {
            console.error('Encountered error at `ReactDOM.render`: ', e);
        }
    })
    .catch((error) => {
        console.warn('No chayns environment found.', error);
    });
