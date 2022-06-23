<template>
  <div class="login" >
    <div class="login-con">
      <div class="login-input">
        <input
          type="text"
          v-model="datafrom.username"
          placeholder="请输入账号"
          lable="账号"
        />
        <input
          type="password"
          v-model="datafrom.password"
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
<script>
import msg from '../utils/message'


export default {
  data() {
    return {
      isActive:false,
      datafrom: {
        username: "",
        password: "",
      }, 
    };
  },
  methods: {

    submitData() {
        this.$http.api.Login(this.datafrom).then((res)=>{
          console.log("rest",res)
            if(res.data.code == 0){
              let message = new msg();
              message.warning(res.data.message)
            }
        })
        

    },
  },
};

</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url(../assets/images/login.jpg);
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