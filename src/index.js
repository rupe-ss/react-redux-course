import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';

const globleStore = createStore();

ReactDOM.render(<App />, document.getElementById('root'));
