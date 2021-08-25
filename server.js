const express = require("express");
const request = require("request");
const path = require("path");
const cors = require("cors");
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
  request(
    "https://api.upbit.com/v1/ticker?markets=KRW-ETH",
    function (error, response, body) {
      // Print the error if one occurred
      //   console.log('error:', error);
      // Print the response status code if a response was received
      //   console.log('statusCode:', response && response.statusCode);
      // Print the HTML for the Google homepage.
      //   console.log(body);
      coinData = body;
      if (ioSocket != "") {
        ioSocket.emit("data", coinData);
        // console.log("emit data~");
      }
    }
  );
}, 1000);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/react/build/index.html"));
});

app.get("/api/coins", (req, res) => {
  res.send(coinData);
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
