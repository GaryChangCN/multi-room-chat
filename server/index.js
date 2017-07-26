const admin = "系统管理员";
const io = require('./src/base');
const Room = require('./src/room');
const room = new Room();

function welcomeNewMember(roomId, nickname){
    io.to(roomId).send({
        data: {
            nickname: admin,
            time: new Date(),
            message: `欢迎${nickname}加入房间`
        }
    });
}
function freshRoomMemberList(roomId){
    io.to(roomId).emit('roomMember',{
        data:{
            roomMember: room.get(roomId)
        }
    })
}
io.on('connect', (socket) => {
    console.log("收到前端的链接，id:", socket.id);
    socket.on('create', ({ nickname }) => {
        let roomId = (Math.random()*10000).toFixed(0);
        socket.join(roomId);
        room.create(roomId);
        socket.emit('create', {
            data: {
                roomId
            }
        })
        room.join(roomId, nickname, socket.id);
        welcomeNewMember(roomId, nickname);
        freshRoomMemberList(roomId);
    });
    socket.on('join', ({ roomId, nickname }) => {
        console.log("join",socket.id);
        socket.join(roomId + '');
        room.join(roomId, nickname, socket.id);        
        socket.emit('join', {
            data: {
                roomId
            }
        })
        welcomeNewMember(roomId, nickname);
        freshRoomMemberList(roomId);        
    });
    socket.on('disconnect', () => {
        console.log("断开连接", new Date());
        room.leave(socket.id, (roomId) => {
            freshRoomMemberList(roomId);
        });
    });
    socket.on('message', (data, roomId) => {
        data.time = new Date();
        io.to(roomId).send({ data });
    });
})
