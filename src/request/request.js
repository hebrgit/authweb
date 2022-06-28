import axios from 'axios'

// baseurl
axios.defaults.baseurl = 'http://localhost:3000'
 
// headers
const request = axios.create({
    baseURL: axios.defaults.baseurl,
    timeout: 60000

})

let whiteList = [

    '/login'

]

axios.interceptors.request.use(config => {
    // 是否需要设置 token
    console.log()
    const isToken = whiteList.indexOf(config.url) == -1 ? true : false;

    if (localStorage.get("token") && isToken) {

    config.headers['token'] = localStorage.getItem("token"); // 让每个请求携带自定义token 请        根据实际情况自行修改

 }

   return config;

 }, error => {

   return Promise.reject(error)

})

// response interceptor

axios.interceptors.response.use((response) => {

    return response.data;

}, error => {

   return Promise.reject(error)

})

export default request