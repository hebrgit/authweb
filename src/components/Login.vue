
<script>
import request from '../request/request'
import axois from 'axios'
export default {
  data() {
    return {
      datafrom: {
        uname: "",
        pass: "",
      }, 
    };
  },
  methods: {
    submitData() {

      axois.get('/path/sys/loginT').then(res=>{
        console.log(res)
      })
        // request({
        //   method:'GET',
        //   url:'/path/sys/loginT'
        // }).then({

        // })
        // this.$router.replace("/hello")

    },
  },
};
</script>
<template>
  <div class="login" >
    <div class="login-con">
      <div class="login-input">
        <input
          type="text"
          v-model="datafrom.uname"
          placeholder="请输入账号"
          lable="账号"
        />
        <input
          type="password"
          v-model="datafrom.pass"
          placeholder="请输入密码"
          lable="密码"
        />
      </div>
      <div class="login-submit">
        <input type="submit" @click="submitData()" />
      </div>

    </div>
    <router-view></router-view>
  </div>
</template>
<style scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url(./img/login.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-con {
  position: absolute;
  width: 500px;
  height: 400px;
  background: #999;
  opacity: 0.8;
  border-radius: 30px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.login-submit {
  position: relative;
  top: 80px;
}
.login-submit input {
  position: relative;
  width: 400px;
  height: 50px;
  margin: 20px auto;
  left: 50px;
  background-color: #409eff;
  opacity: 1;
  border: none;
  color: #999;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
  opacity: 0.9;
}

.login-input {
  position: relative;
  top: 100px;
}
.login-input input {
  display: block;
  width: 400px;
  height: 50px;
  outline: none;
  border: none;
  margin: 20px auto;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 15px;
}
</style>