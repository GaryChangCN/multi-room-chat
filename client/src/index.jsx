import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

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
