<template>
  <div class="conference-page">
    <div class="conf-header">
      <span>Conferences</span>
    </div>
    <div class="main-user">
      <div>
        <div class="welcome-container">
          <div class="title">
            <icon class="title-icon"
                  name="calendar" />
            <span>Upcoming Conferences</span>
          </div>
          <main-user-conferences class="main-user-conferences"
                                 :max="0"></main-user-conferences>
        </div>
      </div>
      <div>
        <div class="info-container">
          <div class="call-header">
            <icon class="icon-phone"
                  name="phone"></icon>
            <span>Last Conference</span>
          </div>
          <main-user-past-conferences class="main-user-past-conferences"
                                      :last="false" />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  components: {
    MainUserConferences: () => import('../components/MainUser/Conferences.vue'),
    MainUserPastConferences: () => import('../components/MainUser/PastConferences.vue')
  }

}
</script>

<style scoped>
@media only screen and (min-width: 1150px) {
}
@media only screen and (min-width: 550px) and (max-width: 1149px) {
  .main-user-conferences {
    margin-left: 15px !important;
    width: 95%;
  }
  .main-user {
    flex-direction: column !important;
    display: flex;
  }
  .conference-page {
    width: 80% !important;
    max-width: 589px !important;
    margin: auto;
  }
  .welcome-container {
    max-width: 589px !important;
    width: 100% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
    margin-bottom: 20px !important;
  }
  .title {
    margin-left: 15px;
  }
  .info-container {
    max-width: 589px !important;
    width: 100% !important;
    padding-left: 0px !important;
  }
  .main-user-past-conferences {
    margin-left: 15px;
  }
  .call-header {
    margin-left: 15px;
  }
}
@media only screen and (max-width: 550px) {
  .main-user-conferences {
    margin-left: 15px !important;
  }
  .main-user {
    flex-direction: column !important;
    display: flex;
  }
  .conference-page {
    width: 95% !important;
    margin: auto;
  }
  .welcome-container {
    width: 100% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
    margin-bottom: 20px !important;
  }
  .title {
    margin-left: 15px;
  }
  .info-container {
    width: 100% !important;
    padding-left: 0px !important;
  }
  .main-user-past-conferences {
    margin-left: 15px;
  }
  .call-header {
    margin-left: 15px;
  }
}
.conference-page {
  width: 1115px;
  margin: auto;
}
.main-user {
  display: flex;
  flex-direction: row;
}
.welcome-container {
  margin-right: 33px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* height: auto; */
  width: 424px;
  background-color: #ffffff;
  padding-left: 28px;
  padding-top: 19px;
  padding-bottom: 24px;
  padding-right: 49px;
}
.welcome-container .title {
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
}
.welcome-container .title-icon {
  width: 17px;
  padding-bottom: 5px;
  margin-right: 9px;
}
.info-container {
  display: flex;
  flex-direction: column;
  padding-left: 23px;
  padding-top: 19px;
  padding-bottom: 24px;
  margin-bottom: 50px;
  width: 560px;
  height: auto;
  background-color: #ffffff;
}
.info-container .call-header {
  display: flex;
  margin-bottom: 25px;
  color: #b3b4b4;
  font-family: "Acumin Pro";
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.6px;
  line-height: 17px;
}
.conf-header {
  margin-top: 30px;
  margin-bottom: 18px;
  color: #7a7a7a;
  font-family: "Helvetica Neue";
  font-size: 17px;
  font-weight: 500;
  line-height: 21px;
}
.info-container .call-header .icon-phone {
  margin-right: 9px;
  padding-top: -3px;
}
</style>
