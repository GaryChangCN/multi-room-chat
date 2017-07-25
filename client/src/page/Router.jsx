import React,{Component} from 'react';
import {Route,BrowserRouter as Router} from 'react-router-dom';

import Index from './Index';
import Register from './Register';

export default class REACTROUTER extends Component {
    render(){
        return (
            <Router>
                <div>
                    <Route exact path ='/' component = {Index}/>
                    <Route path = '/register' component = {Register}/>
                </div>
            </Router>
        )
    }
}