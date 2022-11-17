import axios from "axios";

const Api = axios.create({
  baseURL: "https://101e-194-224-94-52.eu.ngrok.io",
});

export default Api;