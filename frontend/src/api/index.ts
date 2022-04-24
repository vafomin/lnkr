import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000";

export const shortURL = async (url: string) => {
  const data = { url: url };
  try {
    const res = await axios.post("/short", data);
    if (res.data.token) {
      return res.data;
    } else {
      throw "Token initialization failed";
    }
  } catch (e) {
    console.error(e);
  }
};
