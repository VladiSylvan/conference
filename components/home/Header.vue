<template>
  <div class="container">
    <div class="title">
      <icon class="header-icon"
            name="phone" />
      <p>Dida Conference</p>
    </div>
    <div class="auth">
      <nuxt-link to="/auth/login"
                 class="login">Login</nuxt-link>
      <nuxt-link to="/auth/signup">
        <div class="sign-up">SIGN UP</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-header'

}
</script>

<style scoped>
@media only screen and (min-width: 767px) and (max-width: 1210px) {
  .container {
    width: 90% !important;
  }
}
@media only screen and (max-width: 766px) {
  .container {
    width: 90% !important;
  }
  .title {
    font-size: 15px !important;
    font-weight: bold !important;
    letter-spacing: -0.64px !important;
    line-height: 18px !important;
  }
  .login {
    margin-top: -2px;
    margin-right: 13px !important;
    font-size: 12px !important;
    font-weight: bold !important;
    line-height: 15px !important;
    text-align: center !important;
  }
  .sign-up {
    height: 29px !important;
    width: 99px !important;
    border-radius: 19.5px !important;
    font-size: 8px !important;
    font-weight: bold !important;
    line-height: 10px !important;
    text-align: center !important;
  }
}
.container {
  display: flex;
  width: 80%;
  height: 36px;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}
.title {
  display: flex;
  color: #ffffff;
  font-family: "Acumin Pro";
  font-size: 17px;
  font-weight: bold;
  letter-spacing: -0.73px;
  line-height: 20px;
}
.header-icon {
  margin-right: 10px;
}
.login {
  margin-right: 15px;
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: bold;
  line-height: 15px;
  text-align: center;
}
.sign-up {
  display: flex;
  width: 123px;
  height: 36px;
  border-radius: 19px;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  color: #2565e8;
  font-family: "Helvetica Neue";
  font-size: 10px;
  font-weight: bold;
  line-height: 12px;
  text-align: center;
}
.auth {
  display: flex;
  align-items: center;
}
</style>
