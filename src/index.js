import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Alert from './App';
import registerServiceWorker from './registerServiceWorker';

var result= Math.random() < 0.5 ? '201' : '200';

ReactDOM.render(<Alert result={result}/>, document.getElementById('root'));
registerServiceWorker();
