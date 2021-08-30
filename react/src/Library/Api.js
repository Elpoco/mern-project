import CallApi from "./CallApi";

export const getMarket = (params = "", callback) => {
  CallApi("/api/market", params, (data) => {
    console.log(data);
  });
};

export const getInfo = (params = "") => {
  CallApi("/api/info", params, (data) => {
    console.log(data);
  });
};

export const order = (params = "") => {
  CallApi("/api/order", params, (data) => {
    console.log(data);
  });
};
