<template>
  <div v-click-outside="outside"
       class="container">
    <p class="header">Share Screen</p>
    <img src="../../assets/Share screen logo.svg"
         class="icon"
         alt="">
    <p class="body">Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis </p>
    <button @click="shareScreen"
            class="share">share screen</button>
  </div>
</template>

<script>
export default {
  methods: {
    outside () {
      this.$emit('close-schedule')
    },
    shareScreen () {
      this.$store.commit("confComponent", "shareScreen")
      this.$emit('share-screen')
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 500px) {
  .container {
    width: 95% !important;
  }
  .body {
    width: 95% !important;
    margin-left: 2.5% !important;
    margin-right: 2.5% !important;
  }
  input {
    width: 92.5% !important;
  }
}
.container {
  height: fit-content;
  width: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);
}
.header {
  margin-top: 29px;
  margin-bottom: 38px;
  color: rgba(38, 38, 38, 1);
  font-family: "Helvetica Neue";
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  text-align: center;
}
.icon {
  margin-bottom: 24px;
}
.body {
  margin-bottom: 30px;
  width: 380px;
  color: rgba(66, 66, 66, 1);
  font-family: "Helvetica Neue";
  font-size: 12px;
  line-height: 16px;
  text-align: center;
}
.share {
  height: 36px;
  width: 152px;
  border-radius: 19.5px;
  background-color: rgba(46, 126, 237, 1);
  color: rgba(255, 255, 255, 1);
  font-family: "Helvetica Neue";
  font-size: 10px;
  font-weight: bold;
  line-height: 12px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 31px;
}
</style>
