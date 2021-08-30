import axios from "axios";

export default function CallApi(apiUrl, params = "", callback = null) {
  if (callback == null) {
    callback = params;
    params = "";
  }
  const URL = "http://127.0.0.1:3000" + apiUrl;

  // console.log(sendData);

  const getCallApi = async () => {
    await axios({ method: "GET", url: URL, params: params })
      .then((getData) => {
        callback(getData.data);
      })
      .catch((e) => {
        console.log("CallApi error : ", e);
      });
  };
  getCallApi();
}
