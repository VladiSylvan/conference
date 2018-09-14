<template>
  <div class="container">
    <form autocomplete="on"
          class="login"
          @submit.prevent="validateBeforeSubmit">
      <div class="login-header">
        <span>Reset Password</span>
      </div>
      <input v-model="reset.new_password"
             v-validate="{ required: true, min: 8, max: 128}"
             autocomplete="current-password"
             :class="{'is-invalid': errors.has('new password')}"
             type="password"
             name="new password"
             placeholder="New password">
      <span v-show="errors.has('new password')"
            class="help is-danger">{{ errors.first('new password') }}</span>
      <input v-model="reset.repeat_new_password"
             v-validate="{ required: true, min: 8, max: 128}"
             autocomplete="current-password"
             :class="{'is-invalid': errors.has('repeat new password')}"
             type="password"
             name="repeat new password"
             placeholder="Repeat new password">
      <span v-show="errors.has('repeat new password')"
            class="help is-danger">{{ errors.first('repeat new password') }}</span>
      <button type="submit">reset password</button>
      <span v-if="authError !== null"
            style="margin-top: 15px; margin-bottom: -15px"
            class="help is-danger">{{ authError }}</span>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ResetPassword',
  data: () => ({
    reset: {'new_password': null, 'repeat_new_password': null, 'reset_token': null}
  }),
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$store.dispatch('ResetConfirmation', this.reset)
        }
      })
    }
  },
  computed: {
    authError () {
      return this.$store.state.authError
    }
  },
  created () {
    this.$route.query.token === undefined ? this.$router.push({name: 'auth-login'}) : (this.reset.reset_token = this.$route.query.token, this.$store.dispatch('verifyToken', this.$route.query.token))
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
  .container .sign-in {
    margin-left: 0 !important;
    margin-right: 0 !important;
    width: 32.16% !important;
    display: flex;
    flex-direction: column;
  }
  .container .login input[type="text"] {
    width: calc(100% - 17px) !important;
  }
  .container .login input[type="password"] {
    width: calc(100% - 17px) !important;
  }
  .container .login button {
    width: 100% !important;
  }
  .container .line {
    margin-right: 0 !important;
  }
  .container .sign-in .sign-up-button {
    width: 100% !important;
  }
  .container .sign-in .facebook {
    width: 100% !important;
  }
  .container .sign-in .google {
    width: 100% !important;
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
  .container .sign-in {
    margin-left: 0 !important;
    margin-right: 0 !important;
    width: 77.78% !important;
    display: flex;
    flex-direction: column;
  }
  .container .line {
    display: none !important;
  }
  .container .sign-in .google {
    margin-bottom: 27px !important;
  }
  .container .login input[type="text"] {
    width: calc(100% - 17px) !important;
  }
  .container .login input[type="password"] {
    width: calc(100% - 17px) !important;
  }
  .container .login button {
    width: 100% !important;
  }
  .container .line {
    margin-right: 0 !important;
  }
  .container .sign-in .sign-up-button {
    width: 100% !important;
  }
  .container .sign-in .facebook {
    width: 100% !important;
  }
  .container .sign-in .google {
    width: 100% !important;
  }
  .container .login button {
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
  padding-bottom: 46px;
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
.container .sign-in {
  width: 280px;
  display: flex;
  flex-direction: column;
}
.container .login .login-header {
  text-align: center;
  margin-top: 45px;
  margin-bottom: 35px;
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
.container .login input[type="password"] {
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
  margin-bottom: 21px;
}
.container .login .login-keep input {
  margin-right: 7px;
}
.container .login button {
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
</style>
