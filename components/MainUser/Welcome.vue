<template>
  <div class="container">
    <div class="header">
      <span>Hi {{username}}!</span>
    </div>
    <div class="title">
      <icon class="title-icon"
            name="calendar" />
      <span>Upcoming Conferences</span>
    </div>
    <main-user-conferences class="main-user-conferences"
                           :max="3"></main-user-conferences>
  </div>
</template>

<script>
export default {
  components: {
    MainUserConferences: () => import('./Conferences.vue')
  },
  name: 'MainUserWelcome',
  data: () => ({
    username: 'username'
  })

}
</script>

<style scoped>
@media only screen and (min-width: 1130px) {
  .container {
    width: 424px !important;
    padding-left: 28px !important;
    padding-right: 49px !important;
  }
  .header {
    margin-left: 0px !important;
  }
  .title {
    margin-left: 0px !important;
  }
  .main-user-conferences {
    margin-left: 0px !important;
  }
}
.main-user-conferences {
  margin-left: 15px;
  width: 95%;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  width: 100%;
  background-color: #ffffff;
  /* padding-left: 28px; */
  padding-top: 19px;
  padding-bottom: 24px;
  /* padding-right: 49px; */
}
.header {
  color: #636363;
  font-family: "Helvetica Neue";
  font-size: 24px;
  letter-spacing: -0.45px;
  line-height: 29px;
  margin-bottom: 31px;
  margin-left: 20px;
}
.title {
  height: 17px;
  display: flex;
  align-items: center;
  color: #b3b4b4;
  font-family: "Acumin Pro";
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.6px;
  line-height: 17px;
  margin-bottom: 22px;
  margin-left: 20px;
}
.title-icon {
  width: 17px;
  padding-bottom: 5px;
  margin-right: 9px;
}
</style>
