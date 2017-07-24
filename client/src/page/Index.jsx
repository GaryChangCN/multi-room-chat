import React,{Component} from 'react';

import Header from '../components/Header/Header';
import OnlineList from '../components/OnlineList/OnlineList';
import MsgList from '../components/MsgList/MsgLIst';
import UserInput from '../components/UserInput/UserInput';
import './index.less';

export default class Index extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="container">
                <Header></Header>
                <div className="content">
                    <div className="left">
                        <div className="msg-container">
                            <MsgList/>
                        </div>
                        <div className="input-container">
                            <UserInput/>
                        </div>
                    </div>
                    <div className="right">
                        <OnlineList/>
                    </div>
                </div>
            </div>
        )
    }
}