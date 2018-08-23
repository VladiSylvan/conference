<template>
  <div class="container">
    <div class="time">
      <div class="time-header">
        <span>09 : 47</span>
      </div>
      <div class="time-body">
        <div class="time-zone">
          <div>
            <span>
              EST
            </span>
          </div>
          <div>
            <icon name="caret-down" />
          </div>
        </div>
        <div class="morning">
          <span>am</span>
        </div>
      </div>
    </div>
    <div class="actions-container">
      <div class="actions-button">
        <button @click="startConference()">START CONFERENCE</button>
      </div>
      <div class="actions-body">
        <div>
          <icon class="icon-phone"
                name="phone" />
          <span>Test Call</span>
        </div>
        <div>
          <span @click="$emit('open-schedule')">Schedule For Later</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainUserInfo',
  methods: {
    startConference() {
      this.$store.dispatch('postConference')
    }
  }

}
</script>

<style scoped>
@media only screen and (min-width: 1130px) {
  .container {
    width: 583px !important;
    flex-direction: row !important;
    display: flex;
    height: 126px !important;
  }
  .time {
    margin-right: 116px !important;
    margin-bottom: 0 !important;
  }
  .time-header {
    margin-left: 44px !important;
  }
  .actions-container {
    margin-bottom: 0px !important;
  }
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  background-color: #ffffff;
}
.time {
  display: flex;
  margin-top: 10px;
  /* margin-right: 116px; */
}
.time-header {
  /* margin-left: 44px; */
  margin-right: 6px;
  width: 147px;
  color: #626262;
  font-family: "Helvetica Neue";
  font-size: 50px;
  font-weight: 300;
  letter-spacing: -0.94px;
  line-height: 60px;
  text-align: center;
}
.time-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.time-zone {
  display: flex;
  align-items: center;
  height: 15px;
  color: #484848;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: bold;
  letter-spacing: -0.23px;
  line-height: 15px;
  text-align: center;
  margin-bottom: 15px;
}
.time-zone span {
  margin-right: 4px;
}
.morning {
  color: #626262;
  font-family: "Helvetica Neue";
  font-size: 16px;
  font-weight: 300;
  letter-spacing: -0.3px;
  line-height: 18px;
  text-align: center;
}
.actions-button {
  margin-bottom: 16px;
}
.actions-button button {
  padding-top: 5px;
  height: 39px;
  width: 209px;
  border-radius: 19.5px;
  background-color: #2e7eed;
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 10px;
  font-weight: bold;
  line-height: 12px;
  text-align: center;
  text-transform: uppercase;
}
.actions-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.actions-body span {
  color: #a39f9f;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: center;
}
.actions-body div {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.actions-body .icon-phone {
  color: #2e7eed;
  margin-top: 1px;
  margin-right: 12px;
}
.actions-container {
  margin-bottom: 24px;
}
</style>
