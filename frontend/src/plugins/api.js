import axios from "axios";
import config from "../config";

axios.defaults.baseURL = config.app.serverURL;

const api = {
  async shortURL(myURL) {
    return await axios
      .post("/short", {
        url: myURL,
      })
      .then((response) => {
        return response.data.token;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async getToken(token) {
    return await axios
      .get(`/get?tkn=${token}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  /*(async getWatch(token) {
    return await axios
      .get(`/getWatch?token=${token}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },*/
};

export default api;
