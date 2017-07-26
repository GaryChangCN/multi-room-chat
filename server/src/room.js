class Room {
    constructor(){
        this.roomList = {}
    }
    create(roomId){
        this.roomList[roomId] = []
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
    leave(socketId){
        Object.keys(this.roomList).forEach((roomId) => {
            let roomMember = this.roomList[roomId];
            let index = null;
            let len = this.roomMember.length;
            for(let i = 0; i < len; i++ ){
                if(this.roomMember[i].socketId === socketId){
                    index = i
                }
            }
            roomMember.splice(index, 1);
            if (roomMember.length === 0){
                // roomMember = null;
                delete this.roomList.roomId;
            }
        })
    }
}

module.exports = Room;