var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.send('<h1>Welcome Realtime Server</h1>');
});


/* var data = {
	onlineUsers: {},
	onlineCount: 0,
	user: {
		userid,
		username
	}
} */

//在线用户
var onlineUsers = {};
//当前在线人数
var onlineCount = 0;
var maxCount = 1000; // 最大在线人数

io.on('connection', function(socket){
	console.log('a user connected');

	//监听新用户加入
	socket.on('join', function(obj){
		//将新加入用户的唯一标识当作socket的名称，后面退出的时候会用到
		socket.name = obj.userid;

		//检查在线列表，如果不在里面就加入
		if(!onlineUsers.hasOwnProperty(obj.userid) && onlineCount < maxCount) {
			onlineUsers[obj.userid] = obj;
			//在线人数+1
			onlineCount++;

			//向所有客户端广播用户加入
      socket.emit('joined', {onlineUsers:onlineUsers, onlineCount:onlineCount, user:obj,login:true});
			console.log(obj.username+'加入了房间');
			console.log(onlineCount)
		}else{
			// 房间已满
			socket.emit('full')
		}

	});

	//监听用户退出
	socket.on('disconnect', function(){
		//将退出的用户从在线列表中删除
		if(onlineUsers.hasOwnProperty(socket.name)) {
			//退出用户的信息
			var obj = {userid:socket.name, username:onlineUsers[socket.name]};

			//删除
			delete onlineUsers[socket.name];
			//在线人数-1
			onlineCount--;

			//向所有客户端广播用户退出
			io.emit('logout', {onlineUsers:onlineUsers, onlineCount:onlineCount, user:obj,logout:true});
			console.log(obj.username+'退出了聊天室');
			console.log(onlineCount)
		}
	});

	//请求复活
	socket.on('revive', function(obj){
		//向当前客户端广播发布的消息
		socket.emit('revived', obj);
		console.log(obj.username+'复活成功');
	});
	//验证答案
	socket.on('confirmAnswer', function(obj){
	  console.log(obj);
		//向当前客户端广播发布正确答案
		const rightAnswer = 'B';
		socket.emit('answerConfirmd', {
			rightAnswer: rightAnswer, // 正确答案
			point: rightAnswer == obj.answer ? '50' : 0 // 得分
		});
	});

});

const time = 10; // 倒计时20秒开始发题
let index = 1; // 发第几道题

// 模拟倒计时
setTimeout(() => {
	io.emit('start')
	console.log('start pk')
}, (time - 5)*1000)

// 模拟发题
setTimeout(() => {
	sendQuestion()
}, (time - 12)*1000)

// 发题
function sendQuestion() {
	let Ss = setInterval(() => {
		if(index > 3) {
			io.emit('result',{
			  people_num:322,
        num:0
      })
			console.log('send result')
			clearInterval(Ss)
			return false
		}
		io.emit('question', {
			question_index: index,
			question_id: '1',
			question_title: index+'.'+index % 2 > 0 ? '1+1=?' : '2+2=?',
			question_answer: '{"A": "1","B": "2","C": "3","D": "4"}',
      right_answer: 'B'
		})
		console.log('send question ' + index)
		index++
	}, 12000)
}

http.listen(3000, function(){
	console.log('listening on *:3000');
});
