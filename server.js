const express = require("express");
const request = require("request");
const path = require("path");
const cors = require("cors");
const { json } = require("express");
// const mongoose = require('mongoose')

// mongoose.connect('mongodb://0.0.0.0:27017/mongo-db')

// const db = mongoose.connection

// db.on("error", (err)=>{
// 	console.log("> error\n", err)
// })

// db.once("open", ()=>{
// 	console.log("> db open!!!")
// })

const app = express();

var data = "";

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
      data = body;
    }
  );
}, 1000);

app.use(cors());
app.use(express.static(path.join(__dirname, "react/test/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/react/test/build/index.html"));
});

app.get("/api/coins", (req, res) => {
  return json(data);
});

// app.use(express.static("pubilc"));
// app.set("views", __dirname + "/views");
// app.set("view engine", "jsx");
// app.engine("jsx", require("express-react-views").createEngine());

// app.get("/", (req, res) => {
//   res.render("index", { res: returnData });
// });

app.listen(3000, () => {
  console.log("on");
});

// user.name = 'test';
// user.data = 'testetsett';

// user.save(function(err) {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log('good');
// 	}
// });
