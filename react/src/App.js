import "./App.css";
import { useEffect, useState } from "react";
import { initSocket } from "./Library/Socket";
import CallApi from "./Library/CallApi";

function App() {
  const [dataS, setDataS] = useState([]);
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(0);
  const [volume, setVolume] = useState(0);
  const [id, setId] = useState(10020);
  const userSrl = 4589;

  const api = () => {
    CallApi("/api/coins", (data) => {
      var aData = [];
      if (data[0]) {
        Object.entries(data[0]).map((entrie, idx) => {
          aData.push({ key: entrie[0], value: entrie[1] });
        });
        setPrice(data[0].trade_price);
        setVolume(data[0].trade_volume);
        setData(aData);
      }
    });
  };

  useEffect(() => {
    // initSocket("data", (res) => {
    //   setDataS(res);
    // });
    api();
    setInterval(() => {
      api();
      // runMM();
    }, 1000);

    CallApi("/api/market", (data) => {
      console.log(data);
    });

    // var params = {
    //   user_srl: "10020",
    //   symbol: "LOOM-ETH",
    // };
    // CallApi("/api/info", params, (data) => {
    //   console.log(data);
    // });
  }, []);

  const runMM = () => {
    console.log("running!!");
    if (price !== 0 && volume !== 0) {
      ask();
      bid();
    }
  };

  const ask = () => {
    var params = {
      // user_srl: "10020",
      user_srl: userSrl,
      symbol: "ETH-KLIN",
      price: price,
      volume: volume,
      side: "ask",
    };
    CallApi("/api/order", params, (data) => {
      console.log(data);
    });
  };

  const bid = () => {
    var params = {
      user_srl: userSrl,
      symbol: "ETH-KLIN",
      price: price,
      volume: volume,
      side: "bid",
    };
    CallApi("/api/order", params, (data) => {
      console.log(data);
    });
  };

  return (
    <div className="App">
      <h1>Hello world!! srl : {userSrl}</h1>
      <div style={{ marginTop: 200 }}></div>
      {/* <div>
        <div>
          <input
            type="radio"
            id="10020"
            name="radio"
            defaultChecked={true}
            onClick={() => setId(10020)}
          />
          <label htmlFor="10020">10020</label>
        </div>
        <div>
          <input type="radio" id="1111" name="radio" onClick={() => setId(1)} />
          <label htmlFor="1111">1111</label>
        </div>
        <div>
          <input type="radio" id="2222" name="radio" onClick={() => setId(2)} />
          <label htmlFor="2222">2222</label>
        </div>
      </div> */}
      <div style={{ marginTop: 50 }}>
        <input
          placeholder="가격"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <button onClick={bid} style={{ backgroundColor: "#FF9494" }}>
          매수
        </button>
        <button onClick={ask} style={{ backgroundColor: "#94A6FF" }}>
          매도
        </button>
      </div>
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
