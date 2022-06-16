import request from "./request";

export  function Login(){
  return  request({
        method: 'GET',
        url:'path/sys/login',
        // data,
    })
}