// const express = require("express");
// const app = express();
// const server = require("http").createServer(app);
// const io = require("socket.io")(server);
// const port = 3000;

// io.on("connection", socket => {
//   console.log("a user connected :D");

// });

// server.listen(port, () => console.log("server running on port:" + port));


// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);

// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });

// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/indx.html')
// });


//   io.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('disconnect', () => {
//       console.log('user disconnected');
//     });
//     io.on('connection', (socket) => {
//       socket.on('chat message', (msg) => {
//         console.log('message: ' + msg);
//       });
//     });
//   });




// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/indx.html');
});

io.on('connection', (socket) => {
  // socket.on('chat message', msg => {
  //   io.emit('chat message', msg);
  // });
  console.log(' i am connected')
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});