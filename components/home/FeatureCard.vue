<template>
  <div class="container">
    <img class="icon"
         :src="featureData.icon"
         alt="">
    <p class="header">{{featureData.title}}</p>
    <p class="description">{{featureData.content}}</p>
  </div>
</template>

<script>
export default {
  props: ['feature-data']
}
</script>

<style scoped>
@media only screen and (max-width: 766px) {
  .container {
    height: fit-content !important;
    max-width: 157px !important;
  }
  .header {
    font-size: 12px !important;
    line-height: 14px !important;
  }
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 109px;
  max-width: 203px;
  margin: 0;
}
.icon {
  margin-bottom: 17px;
}
.header {
  margin-bottom: 15px;
  color: #39393a;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 18px;
}
.description {
  color: #727272;
  font-family: "Helvetica Neue";
  font-size: 11px;
  line-height: 12px;
  text-align: center;
}
</style>
