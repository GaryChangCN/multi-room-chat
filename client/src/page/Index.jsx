import React,{Component} from 'react';
import {connect} from 'react-redux';

import Header from '../components/Header/Header';
import OnlineList from '../components/OnlineList/OnlineList';
import MsgList from '../components/MsgList/MsgLIst';
import UserInput from '../components/UserInput/UserInput';
import './index.less';

class Index extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        let {hasRoomId, history, location} = this.props;
        if(!hasRoomId){
            history.push('/register' + location.search);
        }
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

export default connect((state)=>{
    return {
        hasRoomId:state.register.hasRoomId
    }
},null)(Index);