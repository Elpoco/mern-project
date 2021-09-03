const express = require("express");
const path = require("path");
const cors = require("cors");
const { CallApi, getCoinData } = require("./ServerApi");
const app = express();
const server = app.listen(3000, () => {
  console.log("server on");
});
const io = require("socket.io")(server);
// const mongoose = require('mongoose')

// mongoose.connect('mongodb://0.0.0.0:27017/mongo-db')

// const db = mongoose.connection

// db.on("error", (err)=>{
// 	console.log("> error\n", err)
// })

// db.once("open", ()=>{
// 	console.log("> db open!!!")
// })

app.use(cors());
app.use(express.static(path.join(__dirname, "react/build")));

var ioSocket = "";

io.on("connection", (socket) => {
  console.log("socket connect!!!!");
  // socket.on("init", function (data) {
  //   socket.emit("data", `hello!`);
  // });
  // socket.emit("data", `hello!`);
  ioSocket = socket;
});

var coinData = "";

setInterval(() => {
  getCoinData((res) => {
    coinData = res;
    if (ioSocket != "") {
      ioSocket.emit("data", res);
      // console.log("emit data~");
    }
  });
}, 1000);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/react/build/index.html"));
});

app.get("/api/coins", (req, res) => {
  res.send(coinData);
});

app.get("/api/market", (req, res) => {
  // CallApi("GET", "/public/ticker/GLM-ETH", (callback) => {
  CallApi("GET", "/public/ticker/ETH-KLIN", (callback) => {
    res.send(callback);
  });
});

app.get("/api/info", (req, res) => {
  CallApi("POST", "/info/get-wallet-info", req.query, (callback) => {
    res.send(callback);
  });
});

app.get("/api/order", (req, res) => {
  CallApi("POST", "/trade/order", req.query, (callback) => {
    res.send(callback);
  });
});

// app.use(express.static("pubilc"));
// app.set("views", __dirname + "/views");
// app.set("view engine", "jsx");
// app.engine("jsx", require("express-react-views").createEngine());

// app.get("/", (req, res) => {
//   res.render("index", { res: returnData });
// });

// user.name = 'test';
// user.data = 'testetsett';

// user.save(function(err) {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log('good');
// 	}
// });
