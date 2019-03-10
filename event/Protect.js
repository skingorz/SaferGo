var User = require('../models/user');
var api = require('../lib/api');

var Protect = (data, socket, onlineUser) => {

    let from = data.from;
    let to = data.to;

    //保护方在线
    if(to in onlineUser){
        onlineUser[to].emit("protect", data)
    }else{
        socket.emit("protectResult", JSON.stringify({status: 231, msg: '对方不在线'}));
    }
}