import request from "./request";
import qs from 'qs'
export function Login(param) {
  return request({
    method: 'POST',
    url: '/path/login?'+qs.stringify(param),
    // data: param
  })
}