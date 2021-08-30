const request = require("request");

exports.CallApi = async (method, url, params, callback = null) => {
  if (callback == null) {
    callback = params;
    params = "";
  }

  const URL = "https://www.metavex.io" + url;
  const options = {
    url: URL,
    method: method,
    json: true,
    body: params,
    headers: { ConnectKey: "d4cba4e78be5e24ede1067321fc2f877" },
  };

  await request(options, function (error, response, body) {
    if (error) {
      console.log("error : ", url);
    } else {
      callback(body);
    }
  });
};

exports.getCoinData = (callback) => {
  request(
    "https://api.upbit.com/v1/ticker?markets=KRW-ETH",
    function (error, response, body) {
      callback(body);
    }
  );
};
