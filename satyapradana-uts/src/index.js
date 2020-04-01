import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';



import postReducer from './components/postReducer';
const store = createStore(postReducer);
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));