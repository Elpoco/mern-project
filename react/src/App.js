import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const api = async () => {
    const { data } = await axios.get("http://127.0.0.1:3000/api/coins");
    var aData = [];
    Object.entries(data[0]).map((entrie, idx) => {
      aData.push({ key: entrie[0], value: entrie[1] });
    });
    setData(aData);
  };

  useEffect(() => {
    api();
  }, []);

  setInterval(() => {
    api();
  }, 1000);

  return (
    <div className="App">
      <h1>Hello world!!</h1>
      {data.map((item, index) => {
        return (
          <div key={index}>
            {item.key} : {item.value}
          </div>
        );
      })}
    </div>
  );
}

export default App;
