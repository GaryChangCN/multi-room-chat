//@ts-check
const app = require('http').createServer((req, res) => {});
app.listen(3333, () => {
    console.log("websocket on 3333");
});
const io =require('socket.io')(app);

io.on('connect', (socket) => {
    console.log("收到前端的链接，id:", socket.id);
    socket.on('disconnect', () => {
        console.log("已关闭链接");
    });
    socket.on('message', (data1, data2) => {
        console.log("receive a default message", data1, data2);
    })
})