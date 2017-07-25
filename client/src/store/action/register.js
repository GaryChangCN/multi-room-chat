import createAction from '../createAction';
import {REGISTER} from '../actionType';

import {controlNickname, fetchCreateRoom, fetchJoinRoom} from '../../service';

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

export function createRoom(nickname){
    return fetchCreateRoom(nickname).then((roomId) => {
        return (dispatch) => {
            dispatch(createAction(REGISTER.CHANGE_ROOM, roomId));
            dispatch(createAction(REGISTER.SAVE_ROOM, true));
        }
    })
}

export function joinRoom(nickname, roomId){
    // ...这里websocket为及加入房间  返回房间号，并更改房间号状态
    return fetchJoinRoom(nickname, roomId).then((roomId) => {
        return (dispatch) => {
            dispatch(createAction(REGISTER.CHANGE_ROOM, roomId));
            dispatch(createAction(REGISTER.SAVE_ROOM, true));
        }
    })
}