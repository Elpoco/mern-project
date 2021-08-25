import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3000");

function App() {
  const [dataS, setDataS] = useState([]);
  const [data, setData] = useState([]);

  const api = async () => {
    const { data } = await axios.get("http://127.0.0.1:3000/api/coins");
    var aData = [];
    Object.entries(data[0]).map((entrie, idx) => {
      aData.push({ key: entrie[0], value: entrie[1] });
    });
    // console.log(aData);
    setData(aData);
  };

  useEffect(() => {
    socket.on("data", (data) => {
      data = JSON.parse(data);
      var aData = [];
      Object.entries(data[0]).map((entrie, idx) => {
        aData.push({ key: entrie[0], value: entrie[1] });
      });
      console.log(data);
      setDataS(aData);
    });
  }, []);

  useEffect(() => {
    api();
    setInterval(() => {
      api();
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1>Hello world!!</h1>
      {/* <div>{data}</div> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div>
          <h3>socket</h3>
          {dataS.map((item, index) => {
            return (
              <div key={index}>
                {item.key} : {item.value}
              </div>
            );
          })}
        </div>
        <div>
          <h3>axios</h3>
          {data.map((item, index) => {
            return (
              <div key={index}>
                {item.key} : {item.value}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
