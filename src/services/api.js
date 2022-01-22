import axios from "axios";
const api = axios.create({
    baseURL: 'http://26.39.109.150:8010/proxy'
})

export default api;