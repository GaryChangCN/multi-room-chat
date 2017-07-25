const app = require('http').createServer((req, res) => {});
app.listen(3333, () => {
    console.log("websocket on 3333");
});
const io = require('socket.io')(app);
const admin = "系统管理员";
io.on('connect', (socket) => {
    console.log("收到前端的链接，id:", socket.id);
    socket.on('create', ({ nickname }) => {
        let roomId = new Date().getTime();
        roomId = roomId.toString().slice(0, -4);
        socket.join(roomId);
        socket.to(roomId).send({
            data: {
                nickname: admin,
                message: `欢迎${nickname}加入房间`
            }
        });
        socket.emit('create', {
            data: {
                roomId
            }
        })
    });
    socket.on('join', ({ roomId, nickname }) => {
        socket.join(roomId + '');
        socket.to(roomId).send({
            nickname: admin,
            message: `欢迎${nickname}加入房间`
        });
        socket.emit('join', {
            data: {
                roomId
            }
        })
    });
    socket.on('disconnect', () => {
        console.log("断开连接");
    });
    socket.on('message', (data, roomId) => {
        socket.to(roomId).send({ data });
    });
})