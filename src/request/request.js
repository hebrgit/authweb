import axois from 'axios'


const request = axois.create({
    baseURL: 'http://localhost:3000',
    timeout: 60000

})
export default request