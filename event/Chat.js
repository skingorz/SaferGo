
var Chat = (data, onlineUser) => {
    let from = data.from;
    let to = data.to;

    //接受消息方在线
    if(to in onlineUser){
        onlineUser[to].emit("chat", data)
    }else{
        //待添加对方不在线，将消息保存到数据库的操作
    }
}


module.exports = Chat;