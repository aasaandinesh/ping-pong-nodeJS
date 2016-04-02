var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/3d.html', function(req, res){
  res.sendFile(__dirname + '/3d.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);


    console.log(msg);

  });
  socket.on('acceleration',function(msg){
  	console.log(msg);
  	io.emit('acceleration',msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
