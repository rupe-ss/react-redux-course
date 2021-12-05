import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import allReducers from './reducers';

import { createStore } from 'redux';

const globleStore = createStore(allReducers);

ReactDOM.render(<App />, document.getElementById('root'));
