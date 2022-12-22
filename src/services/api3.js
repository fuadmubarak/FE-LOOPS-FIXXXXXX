import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080/loops/api/bank'
  });

  export default api;