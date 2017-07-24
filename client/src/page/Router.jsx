import React,{Component} from 'react';
import {Route,BrowserRouter as Router} from 'react-router-dom';

import Index from './Index';

export default class REACTROUTER extends Component {
    render(){
        return (
            <Router>
                <Route exact path ='/' component={Index}/>
            </Router>
        )
    }
}