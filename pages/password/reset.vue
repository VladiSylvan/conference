<template>
  <div class="container">
    <form autocomplete="on"
          class="login"
          @submit.prevent="validateBeforeSubmit">
      <div class="login-header">
        <span>Forgot Password</span>
      </div>
      <div class="login-body">
        <span>Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec torto urana.</span>
      </div>
      <input v-model="email"
             v-validate="'required|email'"
             autocomplete='email'
             :class="{'is-invalid': errors.has('email')}"
             type="text"
             name="email"
             placeholder="Email">
      <span v-show="errors.has('email')"
            class="help is-danger">{{ errors.first('email') }}</span>
      <button type="submit">send</button>
      <span v-if="authError !== null"
            style="margin-top: 15px; margin-bottom: -15px"
            class="help is-danger">{{ authError }}</span>
      <div class="login-keep">
        <router-link :to="{name: 'auth-login'}">Sign In</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: ''
  }),
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$store.dispatch('ForgotPassword', this.email)
        }
      })
    }
  },
  computed: {
    authError () {
      return this.$store.state.authError
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 676px) and (max-width: 1000px) {
  .container {
    margin-top: 26% !important;
    width: 91.8% !important;
    max-width: 400px;
    justify-content: space-around !important;
  }
  .container .login {
    margin-left: 0 !important;
    margin-right: 0 !important;
    width: 70% !important;
    display: flex;
    flex-direction: column;
  }
  .container .login input[type="text"] {
    width: calc(100% - 17px) !important;
  }
}
@media only screen and (max-width: 675px) {
  .container {
    margin-top: 2.35% !important;
    width: 94.44% !important;
    height: fit-content !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    margin-bottom: 4% !important;
    padding-bottom: 0px !important;
  }
  .container .login {
    margin-left: 0 !important;
    margin-right: 0 !important;
    width: 77.78% !important;
    display: flex;
    flex-direction: column;
  }
  .container .login input[type="text"] {
    width: calc(100% - 17px) !important;
  }
  .container .login button {
    width: 100% !important;
    margin-bottom: 0px !important;
    margin-bottom: 27px !important;
  }
}
.container {
  margin-left: auto;
  margin-right: auto;
  margin-top: 212px;
  height: fit-content;
  width: fit-content;
  background-color: #ffffff;
  display: flex;
  padding-bottom: 36px;
}
.container .line {
  margin-top: 16px;
  margin-right: 60px;
  height: 334px;
  width: 1px;
  transform: scaleX(-1);
  background-color: #d9d9d9;
}
.container .login {
  margin-left: 60px;
  margin-right: 60px;
  width: 280px;
  display: flex;
  flex-direction: column;
}
.container .login .login-header {
  text-align: center;
  margin-top: 45px;
  margin-bottom: 20px;
  color: #878787;
  font-family: "Helvetica Neue";
  font-size: 24px;
  line-height: 29px;
}
.container .login input[type="text"] {
  padding-left: 14px;
  height: 42px;
  width: 263px;
  border: 1px solid #dddddd;
  background-color: #ffffff;
  margin-bottom: 15px;
  color: #868686;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
}
.container .login .login-keep {
  display: flex;
  align-items: center;
  color: #666666;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
}
.container .login .login-keep input {
  margin-right: 7px;
}
.container .login button {
  margin-top: 30px;
  margin-bottom: 16px;
  height: 42px;
  width: 280px;
  background-color: #2e7eed;
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: bold;
  line-height: 15px;
  text-transform: uppercase;
}
.container .login .login-body {
  margin-bottom: 35px;
  color: #868686;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
}
</style>
