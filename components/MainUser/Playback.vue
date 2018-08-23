<template>
  <div v-click-outside="outside"
       class="playback-container">
    <p class="playback-header">Playback</p>
    <div class="playback-player">
      <icon class="icon"
            scale="1.3"
            name="volume-off" />
      <icon class="icon"
            scale="1.3"
            name="backward" />
      <icon class="icon active"
            scale="1.3"
            name="play" />
      <icon class="icon"
            scale="1.3"
            name="forward" />
      <icon class="icon"
            scale="1.3"
            name="retweet" />
    </div>
    <div class="playback-player-head">
      <span>5:10</span>
      <span>11:30</span>
    </div>
    <div class="playback-player-line">
      <div class="playback-player-line-active"></div>
      <div class="playback-player-head-active"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    outside () {
      this.$emit('close-playback')
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 500px) {
  .playback-container {
    width: 95% !important;
  }
}
.playback-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 139px;
  width: 440px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);
}
.playback-header {
  margin-top: 21px;
  margin-bottom: 31px;
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  text-align: center;
}
.playback-player {
  display: flex;
  justify-content: center;
}
.playback-player .icon {
  cursor: pointer;
  color: #dcdcdc;
  margin-left: 12px;
  margin-right: 12px;
}
.playback-player .active {
  color: #2e7eed !important;
}
.playback-player-head {
  width: 90%;
  display: flex;
  justify-content: space-between;
  color: #2565e8;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: center;
  margin-bottom: 10px;
}
.playback-player-line {
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  width: 90%;
  background-color: #dcdcdc;
  height: 5px;
  margin-bottom: 28px;
}
.playback-player-line-active {
  border-radius: 5px 0 0 5px;
  position: absolute;
  height: 5px;
  width: 70%;
  background-color: #2565e8 !important;
}
.playback-player-head-active {
  position: absolute;
  height: 9px;
  width: 2px;
  top: -2px;
  left: 70%;
  background-color: #2565e8 !important;
}
</style>
