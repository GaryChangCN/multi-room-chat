import createAction from '../createAction';
import {REGISTER} from '../actionType';

import {controlNickname} from '../../service';

export function changeRegisterRoom(value){
    return (dispatch) => {
        dispatch(
            createAction(REGISTER.CHANGE_ROOM, value)
        );
    }
}

export function changeRegisterNickname(value){
    return (dispatch) => {
        dispatch(
            createAction(REGISTER.CHANGE_NICKNAME, value)
        );
    }
}

export function saveNickname(value){
    controlNickname.save(value);
    return (dispatch) => {
        dispatch(
            createAction(REGISTER.SAVE_NICKNAME, true)
        )
    }
}

export function getNickname(){
    let nickname = controlNickname.get();
    return (dispatch) => {
        dispatch(
            createAction(REGISTER.SAVE_NICKNAME, nickname ? true : false)
        )
        dispatch(
            createAction(REGISTER.CHANGE_NICKNAME, nickname ? nickname : "")
        )
    }
}

export function createRoom(){
    // ...这里websocket为创建房间  返回房间号，并更改房间号状态
    console.log("create");
}

export function joinRoom(value){
    // ...这里websocket为及加入房间  返回房间号，并更改房间号状态
    
    console.log(value);
}