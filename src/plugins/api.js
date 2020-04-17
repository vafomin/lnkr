import axios from "axios"

axios.defaults.baseURL = "https://api.shrt.xyz";

const api = {
    async getToken(token){
        return await axios.get(`/get?token=${token}`)
        .then(response => {
          return response.data.url;
        })
        .catch(error => {
          console.log(error);
        });
    },

    async shortURL(myURL){
        return await axios.post("/short", {
            url: myURL
        })
        .then(response => {
            return response.data.token;
        })
        .catch(error => {
            console.log(error);
        });
    }

}

export default api;