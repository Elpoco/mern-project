const request = require("request");

exports.CallApi = async (method, url, params, callback = null) => {
  if (callback == null) {
    callback = params;
    params = "";
  }

  // console.log(params);

  // const URL = "https://www.metavex.io" + url;
  // const URL = "https://www.borabit.com" + url;
  const URL = "http://www.borabit.xyz" + url;
  const options = {
    url: URL,
    method: method,
    json: true,
    body: params,
    // 메타벡스
    // headers: { ConnectKey: "d4cba4e78be5e24ede1067321fc2f877" },
    headers: { ConnectKey: "62a6573fd2f707239a4add5b0a6488e9" },
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
