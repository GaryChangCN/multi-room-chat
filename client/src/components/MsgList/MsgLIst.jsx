import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {convertTimeStamp} from '../../lib/utils';
import {clearMessageList} from '../../store/action/msgList';
import './MsgList.less';

class MsgList extends Component {
    constructor(props){
        super(props);
        this.containerRef = null;
        this.innerRef = null;
    }
    componentDidUpdate(){
        let innerHeight = parseInt(window.getComputedStyle(this.innerRef).height);
        let containerHeight = parseInt(window.getComputedStyle(this.containerRef).height)
        if(innerHeight - containerHeight > 0){
            this.containerRef.scrollTop = innerHeight;
        }
    }
    render(){
        let {value,clearScreen} = this.props;
        return (
            <div className="pack-msg">
                <div className="clear-screen" onClick={clearScreen}>清屏</div>
                <div className="msg-list" ref={(ref)=>{this.containerRef=ref}}>
                    <div className="msg-item-container" ref={(ref)=>{this.innerRef=ref}}>
                        {value.map(({user, msg, time}, i) => {
                            return (
                                <div className="msg-item" key={i}>
                                    <div className="user-name">
                                        {convertTimeStamp(time)} {user}
                                    </div>
                                    <div className="user-msg">
                                        {msg}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps({msgList: {value}}){
    return {
        value
    }
}
function mapDispatchToProps(dispatch){
    return {
        clearScreen(){
            clearMessageList();
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MsgList);