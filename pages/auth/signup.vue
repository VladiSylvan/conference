<template>
  <div class="container">
    <form autocomplete="on"
          class="login"
          @submit.prevent="validateBeforeSubmit">
      <div class="login-header">
        <span>Sign Up</span>
      </div>

      <input v-model="user.first_name"
             v-validate="{ required: true, min: 2, max: 64}"
             autocomplete='given-name'
             :class="{'is-invalid': errors.has('first name')}"
             type="text"
             name="first name"
             placeholder="First Name">
      <span v-show="errors.has('first name')"
            class="help is-danger">{{ errors.first('first name') }}</span>

      <input v-model="user.last_name"
             v-validate="{ required: true, min: 2, max: 64 }"
             autocomplete='family-name'
             :class="{'is-invalid': errors.has('last name')}"
             type="text"
             name="last name"
             placeholder="Last Name">
      <span v-show="errors.has('last name')"
            class="help is-danger">{{ errors.first('last name') }}</span>

      <input v-model="user.phone"
             v-validate="{ required: true, regex: /^\+[1-9]{1}[0-9]{3,14}$/ }"
             autocomplete='family-name'
             :class="{'is-invalid': errors.has('phone')}"
             type="text"
             name="phone"
             placeholder="Phone">
      <span v-show="errors.has('phone')"
            class="help is-danger">{{ errors.first('phone') }}</span>

      <input v-model="user.email"
             v-validate="'required|email'"
             autocomplete='email'
             :class="{'is-invalid': errors.has('email')}"
             type="text"
             name="email"
             placeholder="Email">
      <span v-show="errors.has('email')"
            class="help is-danger">{{ errors.first('email') }}</span>

      <input v-model="user.password"
             v-validate="{ required: true, min: 8, max: 128}"
             autocomplete="current-password"
             :class="{'is-invalid': errors.has('password')}"
             type="password"
             name="password"
             placeholder="Password">
      <span v-show="errors.has('password')"
            class="help is-danger">{{ errors.first('password') }}</span>
      <button class="register"
              type="submit">Register</button>
      <span v-if="authError !== null"
            style="margin-top: 15px; margin-bottom: -15px"
            class="help is-danger">{{ authError }}</span>
      <button class="facebook">
        <div class="login-button">
          <span>sign in with facebook</span>
          <icon scale="1.5"
                name="facebook" />
        </div>
      </button>
      <button class="google">
        <div class="login-button">
          <span>sign in with google</span>
          <icon scale="1.5"
                name="google-plus" />
        </div>
      </button>
      <div class="login-keep">
        <router-link :to="{name: 'auth-login'}">Already have an account?</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {'first_name': '', 'last_name': '', email: '', password: '', phone: ''}
  }),
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$store.dispatch('register', this.user)
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
.container .sign-in {
  width: 280px;
  display: flex;
  flex-direction: column;
}
.container .login .login-header {
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
  margin-top: 16px;
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
.container .login .facebook {
  margin-bottom: 15px;
  height: 42px;
  width: 280px;
  background-color: #3b5998;
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: bold;
  line-height: 15px;
  text-transform: uppercase;
}
.container .login .facebook span {
  margin-top: 5px;
  margin-right: 6px;
}
.container .login .google {
  height: 42px;
  width: 280px;
  background-color: #d34836;
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: bold;
  line-height: 15px;
  text-transform: uppercase;
}
.container .login .google span {
  margin-top: 3px;
  margin-right: 6px;
}
.login-button {
  display: flex;
  justify-content: center;
}
.register {
  margin-bottom: 36px;
}
</style>
