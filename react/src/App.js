import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { initSocket } from "./Library/Socket";
import CallApi from "./Library/CallApi";

function App() {
  const [dataS, setDataS] = useState([]);
  const [data, setData] = useState([]);

  const api = () => {
    CallApi("/api/coins", (data) => {
      var aData = [];
      if (data[0]) {
        Object.entries(data[0]).map((entrie, idx) => {
          aData.push({ key: entrie[0], value: entrie[1] });
        });
        // console.log(aData);
        setData(aData);
      }
    });
  };

  useEffect(() => {
    initSocket("data", (res) => setDataS(res));
    api();
    setInterval(() => {
      api();
    }, 1000);

    CallApi("/api/market", (data) => {
      console.log(data);
    });

    var params = {
      user_srl: "10020",
      symbol: "GLM-ETH",
    };
    CallApi("/api/info", params, (data) => {
      console.log(data);
    });
  }, []);

  const order = () => {
    var params = {
      user_srl: "10020",
      symbol: "GLM-ETH",
      price: "0.00016220",
      volume: "100",
      side: "ask",
    };
    CallApi("/api/order", params, (data) => {
      console.log(data);
    });
  };

  return (
    <div className="App">
      <h1>Hello world!!</h1>
      <button onClick={order}>주문하기</button>
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
