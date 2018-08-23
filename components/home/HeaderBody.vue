<template>
  <div class="container">
    <p class="title">More Conference Features</p>
    <p class="sub-title">Take your conference Levels in the next level</p>
    <p class="text">Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin.</p>
    <inout-email />
  </div>
</template>

<script>
export default {
components: {
  InoutEmail: () => import ('./InputEmail.vue')
}
}
</script>

<style scoped>
@media only screen and (max-width: 766px) {
  .container {
    width: 90% !important;
  }
  .title {
    font-size: 24px !important;
    margin-bottom: 18px !important;
  }
  .sub-title {
    font-size: 16px !important;
    line-height: 18px !important;
    margin-bottom: 13px !important;
  }
  .text {
    font-size: 12px !important;
    line-height: 14px !important;
    margin-bottom: 49px !important;
  }
}
.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 420px;
  text-align: center;
}
.title {
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 26px;
  font-weight: bold;
  line-height: 40px;
  margin-bottom: 14px;
}
.sub-title {
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 19px;
  line-height: 23px;
  margin-bottom: 28px;
}
.text {
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  margin-bottom: 30px;
}
</style>
