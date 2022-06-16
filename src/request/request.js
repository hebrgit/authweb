import axois from 'axios'


const request = axois.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000

})
export default request