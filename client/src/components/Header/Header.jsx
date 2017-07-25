import React,{Component} from 'react';
import {connect} from 'react-redux';
import {updateMessageList} from '../../store/action/msgList'

import './Header.less';
class Header extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let {title, roomId} = this.props;
        return (
            <div className="pageHeader">
                <div>
                    <span>{title}</span>
                    <span className="room-id">房间号：{roomId}</span>
                </div>
                <span onClick={this.props.change}>quit</span>
            </div>
        )
    }
}
function mapStateToProps({header: {title}, register: {roomId}}){
    return {
        title,
        roomId
    }
}
function mapDispatchToProps(dispatch){
    return {
        change(){
            dispatch(updateMessageList());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)