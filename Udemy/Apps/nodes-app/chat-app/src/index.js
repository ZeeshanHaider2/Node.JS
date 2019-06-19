const express = require("express");
const path = require("path"); //this is a core node module so there is no need to install it
const http = require("http"); ////this is a core node module so there is no need to install it
const socketio = require("socket.io");
const app = express();
const server = http.createServer(app); //creating another server by calling a method createServer on http
const io = socketio(server);
const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

io.on("connection", () => {
  console.log("New websocket connection");
});

server.listen(port, () => {
  //from app to server
  console.log(`server is up on ${port}`);
});
