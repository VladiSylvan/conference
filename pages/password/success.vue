<template>
  <div class="container">
    <div class="login"
         v-if="$route.params.name === 'forgot'">
      <p class="forgot-header">Successful</p>
      <icon class="success"
            name="check-circle" />
      <p>Password reset email has been sent</p>
    </div>
    <div class="login"
         v-else-if="$route.params.name === 'old-token'">
      <icon class="not-success"
            name="times-circle" />
      <p>The received token is incorrect</p>
      <button @click="$router.push({name: 'auth-login'})">Login</button>
    </div>
    <div v-else
         class="login">
      <p class="forgot-header">Successful</p>
      <icon class="success"
            name="check-circle" />
      <p>Password successfully reset</p>
      <button @click="$router.push({name: 'auth-login'})">Login</button>
    </div>
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
          this.$store.commit('ResetConfirmation', this.reset)
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
    if (this.$route.params.name === undefined) {
      this.$router.push({name: 'auth-login'})
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
  }
  .container .login {
    margin-left: 0 !important;
    margin-right: 0 !important;
    width: 77.78% !important;
    display: flex;
    flex-direction: column;
  }
}
.container {
  padding-top: 30px;
  padding-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 212px;
  height: fit-content;
  width: fit-content;
  background-color: #ffffff;
  display: flex;
}
.container .login {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-left: 60px;
  margin-right: 60px;
  width: 280px;
  display: flex;
  flex-direction: column;
}
.container .login p {
  color: #666666;
  font-family: "Helvetica Neue";
  font-size: 16px;
  font-weight: 500;
  line-height: 15px;
}
.forgot-header {
  color: #878787;
  text-align: center;
  font-family: "Helvetica Neue";
  font-size: 24px !important;
  line-height: 29px;
  margin-bottom: 25px;
}
.success {
  width: 80px;
  height: 80px;
  color: #2e7eed;
  margin-bottom: 25px;
}
.not-success {
  width: 80px;
  height: 80px;
  color: #ed3b2e;
  margin-bottom: 25px;
}
.container .login button {
  margin-top: 25px;
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
