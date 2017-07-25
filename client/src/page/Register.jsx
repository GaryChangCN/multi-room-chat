import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {changeRegisterNickname, changeRegisterRoom, getNickname, saveNickname, createRoom, joinRoom} from '../store/action/register';
import './register.less';

class NickName extends Component {
    constructor(props){
        super(props);
        this.input = null;
    }
    componentDidMount(){
        this.input.focus();
    }
    handleChange(e){
        this.props.onChange(e.target.value);
    }
    render(){
        return (
            <div className="nickName">
                <div className="title">输入昵称</div>
                <input
                    ref={(ref)=>{this.input=ref}}
                    onChange={this.handleChange.bind(this)}
                    value={this.props.value}
                />
                <div className="enter" onClick={()=>{this.props.onSubmit()}}>确认</div>
            </div>
        )
    }
}
class Room extends Component {
    constructor(props){
        super(props);
        this.state = {
            showJoin: true,
            title: "输入房间号",
            leftText: "创建房间",
            rightText: "加入房间"
        }
    }
    handleLeft(){
        let {showJoin} = this.state;
        if(showJoin){
            this.setState({
                showJoin: false,
                title: "创建一个新房间",
                leftText: "加入房间",
                rightText: "确定"
            })
        }else{
            this.setState({
                showJoin: true,
                title: "输入房间号",
                leftText: "创建房间",
                rightText: "加入房间"
            })
        }
    }
    handleRight(){
        let {showJoin} = this.state;
        let {createRoom, joinRoom, value} = this.props;
        if(showJoin){
            if(!value){
                alert("不能为空");
                return ;
            }
            joinRoom(value);
        }else{
            createRoom();
        }
    }
    handleChange(e){
        this.props.onChange(e.target.value)
    }
    render(){
        let {showJoin, title, leftText, rightText} = this.state;
        let {value} = this.props;
        return (
            <div className="room">
                <div className="title">{title}</div>
                {showJoin ? <input type="number" onChange={this.handleChange.bind(this)} value={value}/> : <div className="place"></div>}
                <div className="btn-group">
                    <div className="left" onClick={this.handleLeft.bind(this)}>{leftText}</div>
                    <div className="right" onClick={this.handleRight.bind(this)}>{rightText}</div>
                </div>
            </div>
        )
    }
}
class Register extends Component {
    constructor(props){
        super(props);
        this.renderChild=this.renderChild.bind(this);
    }
    componentDidMount(){
        this.props.getNickname();
    }
    componentWillReceiveProps({hasRoomId, history}){
        if(hasRoomId){
            history.replace('/');
        }
    }
    renderChild(){
        let {roomId, nickName, handleChangeNickName, handleChangeRoomId, hasNickname, saveNickname,createRoom,joinRoom} = this.props;
        if(hasNickname){
            return (
                <Room
                    onChange = {(value)=>{handleChangeRoomId(value)}}
                    value = {roomId}
                    createRoom = {()=>{createRoom(nickName)}}
                    joinRoom = {(value)=>{joinRoom(nickName, value)}}
                />
            );
        }else{
            return (
                <NickName
                    onChange = {(value)=>{handleChangeNickName(value)}}
                    value = {nickName}
                    onSubmit = {()=>{saveNickname(nickName)}}
                />
            )
        }
    }
    render(){
        return (
            <div className="register-container">
                <div className="register-box">
                    {this.renderChild()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    let {register:{roomId, nickName, hasNickname, hasRoomId}} = state;
    return {
        roomId, nickName, hasNickname, hasRoomId
    }
}

function mapDispatchToProps(dispatch){
    return {
        handleChangeNickName(value){
            dispatch(changeRegisterNickname(value))
        },
        handleChangeRoomId(value){
            dispatch(changeRegisterRoom(value))
        },
        getNickname(){
            dispatch(getNickname())
        },
        saveNickname(value){
            dispatch(saveNickname(value))
        },
        createRoom(nickname){
            dispatch(createRoom(nickname))
        },
        joinRoom(nickname, roomId){
            console.log(nickname);
            dispatch(joinRoom(nickname, roomId))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);