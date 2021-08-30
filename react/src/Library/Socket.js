import io from "socket.io-client";

export const initSocket = (name, callback) => {
  const socket = io.connect("http://localhost:3000");
  socket.on(name, (data) => {
    data = JSON.parse(data);
    var aData = [];
    Object.entries(data[0]).map((entrie, idx) => {
      aData.push({ key: entrie[0], value: entrie[1] });
    });
    // console.log(data);
    callback(aData);
  });
};
