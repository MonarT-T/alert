import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Alert from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Alert result={Math.random() < 0.5 ? '201' : '200'}/>, document.getElementById('root'));
registerServiceWorker();
