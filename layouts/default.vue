<template>
  <div>
    <app-header-menu v-if="showHeader" />
    <nuxt/>

    <!-- <div class="dev-links desktopLink">
      <span>Dev Links: </span>
      <router-link v-for="route in this.$router.options.routes"
                   :key="route.id"
                   :to="route.path"> {{route.name}} |</router-link>
    </div> -->
  </div>
</template>

<script>
export default {
  components: {
    AppHeaderMenu: () => import('../components/app/HeaderMenu.vue')
  },
  data: () => ({
    component: '',
    authPaths: {
      'auth-signup': true, 'password-reset': true, 'password-confirmation': true, 'password-success': true, 'auth-login': true, index: true
    }
  }),
  
  methods: {
    outside () {
      this.showDropDown = false
    }
  },
  watch: {
    $route (el) {
      if (this.authPaths[el.name] !== true ) {
        this.$store.dispatch('getUserFromLocalStorage')
      }
    }
  },
  created () {
    if (this.authPaths[this.$route.name] !== true ) {
      this.$store.dispatch('getUserFromLocalStorage')
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    showHeader () {
      return this.authPaths[this.$route.name] !== true && this.$route.matched.length !== 0 ? true : false
    }
  }
}
</script>

<style>
.is-invalid {
  border-color: red !important;
}
.help {
  color: #d34836;
  margin-bottom: 19px;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
}
body {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
p {
  margin: 0;
}
.desktopLink {
  display: none;
}
@font-face {
  font-family: "Acumin Pro";
  src: url("../assets/fonts/acumin-pro/AcuminPro-Regular.eot");
  src: url("../assets/fonts/acumin-pro/AcuminPro-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/fonts/acumin-pro/AcuminPro-Regular.woff2") format("woff2"),
    url("../assets/fonts/acumin-pro/AcuminPro-Regular.woff") format("woff"),
    url("../assets/fonts/acumin-pro/AcuminPro-Regular.ttf") format("truetype"),
    url("../assets/fonts/acumin-pro/AcuminPro-Regular.svg#AcuminPro-Regular")
      format("svg");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Helvetica Neue";
  src: url("../assets/fonts/helvetica-neue/HelveticaNeue-Light.eot");
  src: url("../assets/fonts/helvetica-neue/HelveticaNeue-Light.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/fonts/helvetica-neue/HelveticaNeue-Light.woff2")
      format("woff2"),
    url("../assets/fonts/helvetica-neue/HelveticaNeue-Light.woff")
      format("woff"),
    url("../assets/fonts/helvetica-neue/HelveticaNeue-Light.ttf")
      format("truetype"),
    url("../assets/fonts/helvetica-neue/HelveticaNeue-Light.svg#HelveticaNeue-Light")
      format("svg");
  font-weight: 300;
  font-style: normal;
}
input[type="text"] {
  border: none;
}
input[type="text"]:focus {
  background: transparent;
  outline: none;
  /* box-shadow: 0 0 5px rgba(81, 203, 238, 1); */
  /* padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px; */
  color: #343434 !important;
  border: 1px solid #2e7eed !important;
}
input[type="password"] {
  border: none;
}
input[type="password"]:focus {
  background: transparent;
  outline: none;
  /* box-shadow: 0 0 5px rgba(81, 203, 238, 1); */
  /* padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px; */
  color: #343434 !important;
  border: 1px solid #2e7eed !important;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  background: none;
  border: none;
}
select:focus {
  outline: none;
}
button {
  -webkit-appearance: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}
button:focus {
  outline: none;
}
button:disabled {
  background-color: gray !important;
}
body {
  margin: 0;
  background-color: #f0f0f0;
}
a {
  text-decoration: none;
}
a:link {
  color: #2565e8;
  text-decoration: none;
}

/* visited link */
a:visited {
  color: #2565e8;
  text-decoration: none;
}

/* mouse over link */
a:hover {
  color: #2565e8;
  text-decoration: none;
}

/* selected link */
a:active {
  color: #2565e8;
  text-decoration: none;
}
@media only screen and (min-width: 1331px) {
  .desktopLink {
    display: block !important;
  }
}
@media only screen and (min-width: 676px) and (max-width: 1330px) {
  .desktopLink {
    display: block !important;
  }
}
.dev-links {
  color: #2565e8;
  position: fixed;
  z-index: 100000000;
  left: 20px;
  top: 95%;
}
.dev-links a {
  cursor: pointer;
}
</style>
