const WebSocket = require("ws");

const ip = "127.0.0.1";
const port = 5757;
const url = "ws://" + ip + ":" + port;

const ws = new WebSocket(url);

ws.on("open", function open() {
  ws.send("something");
});

ws.on("message", function incoming(data: any) {
  console.log(data);
});
