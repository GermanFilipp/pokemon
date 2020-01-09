import axios from "axios";

export const API_URL = process.env.REACT_APP_API_ROOT;

axios.defaults.baseURL = API_URL;

export default function callApi(endpoint, method = "GET") {
  return axios({
    method,
    url: endpoint,
    responseType: "json"
  }).then(response => {
    return response.data;
  });
}
