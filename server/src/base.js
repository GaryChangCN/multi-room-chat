const app = require('http').createServer((req, res) => {});
app.listen(3333, () => {
    console.log("websocket on 3333");
});
const io = require('socket.io')(app);
const admin = "系统管理员";

module.exports = io;