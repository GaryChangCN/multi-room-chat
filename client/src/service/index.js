import io from 'socket.io-client';

export const remote = '127.0.0.1:3333';
export const socket = io(remote);

let M = {
    nickname: null,
    roomId: null
}

// ...这里是监听返回消息地方--->更新消息列表和在线列表
import {updateMessageList} from '../store/action/msgList'
import {freshOnlineList} from '../store/action/onlineList';
import store from '../store/index';
socket.on('message', ({data, err}) => {
    let {nickname, time, message} = data;
    store.dispatch(updateMessageList(data));
});
socket.on('roomMember',({data, err}) => {
    let {roomMember} = data;
    store.dispatch(freshOnlineList(roomMember));
})
// ....................

export function fetchCreateRoom (nickname){
    socket.emit('create',{nickname});
    return new Promise((resolve, reject) => {
        socket.on('create', ({data, err}) => {
            if(err){
                reject(err);
            }
            M = {
                nickname,
                roomId: data.roomId
            }
            resolve(data.roomId);
        })
    })
}

export function fetchJoinRoom(nickname, roomId){
    socket.emit('join', {nickname, roomId});
    return new Promise((resolve, reject) => {
        socket.on('join', ({data, err}) => {
            if(err){
                reject(err);
            }
            M = {
                nickname,
                roomId: data.roomId
            }
            resolve(data.roomId);
        })
    })
}

export function fetchSendUserInput(message){
    let data = {
        nickname: M.nickname,
        message
    }
    socket.send(data, M.roomId);
}

export const controlNickname = {
    save(value){
        window.sessionStorage.setItem('nickname',value);
    },
    get(){
        return window.sessionStorage.getItem('nickname')||"";
    },
    clear(){
        window.sessionStorage.removeItem('nickname');
    }
}

socket.on('connect',() => {
    console.log("已连接");
});
socket.on('disconnect',() => {
    console.log("断开连接");
});