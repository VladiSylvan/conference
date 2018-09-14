<template>
  <div class="container">
    <div class="header">
      <div class="title">
        <img src="../../assets/e-mail tamplates/logo.png"
             class="header-icon"
             alt="">
      </div>
      <div class="socials">
        <img src="../../assets/homepage/icons/Facebook_White.svg"
             alt="">
        <img src="../../assets/homepage/icons/Google +_White.svg"
             alt="">
        <img src="../../assets/homepage/icons/LinkedIN_White.svg"
             alt="">
        <img src="../../assets/homepage/icons/Twitter_White.svg"
             alt="">
      </div>
    </div>
    <div class="wrapper">
      <div v-for="item in info"
           :key="item.index"
           class="info-container">
        <p class="info-header">{{item.title}}</p>
        <p v-for="sub in item.subtitle"
           :key="sub.index"
           class="info-body">{{sub}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    info: [
      {title: 'Title', subtitle: ['Subtitle page', 'Subtitle page2', 'Subtitle page3', 'Subtitle page4']},
      {title: 'Title2', subtitle: ['Subtitle page', 'Subtitle page2', 'Subtitle page3', 'Subtitle page4']},
      {title: 'Title3', subtitle: ['Subtitle page', 'Subtitle page2', 'Subtitle page3', 'Subtitle page4']},
      {title: 'Title4', subtitle: ['Subtitle page', 'Subtitle page2', 'Subtitle page3', 'Subtitle page4']}
    ]
  })
}
</script>

<style scoped>
@media only screen and (max-width: 766px) {
  .container {
    flex-direction: column !important;
    padding-bottom: 0px !important;
  }
  .wrapper {
    width: 100% !important;
  }
  .title {
    margin-right: 0px !important;
  }
  .socials {
    margin-bottom: 31px !important;
  }
  .info-container {
    margin-right: 35px;
    margin-bottom: 29px;
  }
}
.container {
  display: flex;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 37px;
}
.title {
  margin-bottom: 12px;
  margin-right: 190px;
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
  width: 153px;
  height: 21px;
}
.socials {
  color: #ffffff;
  width: 141px;
  display: flex;
  justify-content: space-between;
}
.wrapper {
  width: 486px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.info-container {
  width: 85px;
}
.info-header {
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: bold;
  line-height: 17px;
  margin-bottom: 10px;
}
.info-body {
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 10px;
}
</style>
