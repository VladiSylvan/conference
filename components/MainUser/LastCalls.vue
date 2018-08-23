<template>
  <div>
    <div class="container">
      <div class="call-header">
        <icon class="icon-phone"
              name="phone"></icon>
        <span>Last Conference</span>
      </div>
      <main-user-past-conferences :last="true" />
    </div>
  </div>

</template>

<script>
export default {
  name: 'main-user-copy',
  components: {
    MainUserPastConferences: () => import('./PastConferences.vue')
  },
  data: () => ({
    showPopUp: false
  })
}
</script>

<style scoped>
@media only screen and (min-width: 1130px) {
  .container {
    width: 100%;
  }
}
.container {
  display: flex;
  flex-direction: column;
  padding-left: 23px;
  padding-right: 26px;
  padding-top: 18px;
  margin-bottom: 50px;
  background-color: #ffffff;
}
.call-header {
  display: flex;
  margin-bottom: 28px;
  align-items: center;
  color: #b3b4b4;
  font-family: "Acumin Pro";
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.6px;
  line-height: 17px;
}
.call-header .icon-phone {
  margin-right: 9px;
  padding-top: -3px;
}
.call-container {
  display: flex;
  margin-bottom: 19px;
}
.call-id,
.duration,
.name {
  display: flex;
  flex-direction: column;
}
.call-id-header,
.duration-header,
.name-header {
  color: #b3b4b4;
  font-family: "Acumin Pro";
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.52px;
  line-height: 14px;
  margin-bottom: 12px;
}
.call-id-body,
.duration-body {
  color: #6d6d6d;
  font-family: "Acumin Pro";
  font-size: 16px;
  letter-spacing: -0.69px;
  line-height: 19px;
}
.name-body {
  color: #6d6d6d;
  font-family: "Acumin Pro";
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.69px;
  line-height: 19px;
}
.call-id {
  width: 87px;
}
.duration {
  width: 98px;
}
.name-body {
  display: flex;
}
.name-body span {
  width: 321px;
}
.pop-up-container {
  position: relative;
  margin-top: 20px;
  height: 26px;
  width: 26px;
  border-radius: 26px;
  background-color: #eeeeee;
}
.button-pop-up {
  cursor: pointer;
  height: 26px;
  width: 26px;
}
.triangle-icon {
  color: #9f9f9f;
  position: absolute;
  top: 5px;
  left: 9px;
}
.pop-up {
  position: absolute;
  width: 110px;
  left: -74.5px;
  top: 27px;
}
.pop-up p {
  color: #525252;
  font-family: "Helvetica Neue";
  font-size: 11px;
  font-weight: 500;
  line-height: 13px;
  text-align: left;
}
.pop-up p {
  margin: 0;
  margin-bottom: 10px;
}
.pop-up a {
  margin: 0;
  color: #2565e8;
  font-family: "Helvetica Neue";
  font-size: 11px;
  font-weight: 500;
  line-height: 13px;
}
</style>
