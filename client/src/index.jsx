import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducer from './store/reducer';

import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(reducer,composeWithDevTools(
    applyMiddleware(thunk,promise)
));

import Router from './page/Router';

class Main extends Component{
	render(){
		return (
			<Provider store={store}>
				<Router></Router>
			</Provider>
		)
	}
}

var app=document.getElementById("app");
ReactDOM.render(<Main/>,app);
