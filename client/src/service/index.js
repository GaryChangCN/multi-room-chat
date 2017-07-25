import io from 'socket.io-client';

const remote = '127.0.0.1:3333';
const socket = io(remote);
let roomId = "";

export function fetchCreateRoom (nickname){
    socket.emit('create',{nickname});
    return new Promise((resolve, reject) => {
        socket.on('create', ({data, err}) => {
            if(err){
                reject(err);
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
            resolve(data.roomId);
        })
    })
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
    // alert("与服务器断开了连接");
});