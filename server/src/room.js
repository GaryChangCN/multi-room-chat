class Room {
    constructor(){
        this.roomList = {}
    }
    create(roomId){
        this.roomList[roomId] = [];
    }
    get(roomId){
        return this.roomList[roomId].map(({nickname})=>{
            return nickname;
        });
    }
    join(roomId, nickname, socketId){
        if(!this.roomList[roomId]){
            this.create(roomId);
        }
        this.roomList[roomId].push({nickname, socketId})
    }
    leave(socketId, cb){
        let roomId = null;
        let index = null;
        for (let key in this.roomList){
            let roomMember = this.roomList[key];
            let len = roomMember.length;
            for(let i = 0; i < len; i++ ){
                if(roomMember[i].socketId === socketId){
                    roomId = key;
                    index = i;
                    break;
                }
            }
        }
        if(this.roomList[roomId]){
            this.roomList[roomId].splice(index, 1);
        }
        cb(roomId);
        if(this.roomList[roomId].length === 0){
            delete this.roomList[roomId];
        }
    }
}

module.exports = Room;