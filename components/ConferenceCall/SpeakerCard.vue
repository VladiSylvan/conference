<template>
  <div class="speaker-card">
    <slot v-if="index === 0" />
    <div v-if="type !== 'video'"
         class="speaker-header">
      <img class="speaker-avatar"
           src="../../assets/ben-unsplash.jpg"
           alt="">
      <span>{{user.speaker_status}}</span>
    </div>
    <div v-else
         class="speaker-header-video">
      <img class="user-video"
           src="../../assets/ben-unsplash.jpg"
           alt="">
      <icon name="video-camera"
            class="video-icon" />
    </div>
    <div class="speaker-card-body">
      <div class="speaker-info">
        <div class="speaker-name">
          <span>{{user.name}}</span>
        </div>
        <div class="speaker-number">
          <div class="phone-icon">
            <img src="../../assets/conference page/number.svg"
                 alt="">
          </div>
          <span>{{user.number}}</span>
        </div>
      </div>
      <div v-if="!mute"
           @click="mute = true"
           class="mute-speaker">
        <img src="../../assets/conference page/mute speaker.svg"
             alt="">
      </div>
      <div v-else
           @click="mute = false"
           class="unmute-speaker">
        <!-- <icon class="volume-icon"
              name="volume-up" /> -->
        <img src="../../assets/conference page/unmute speaker.svg"
             alt="">
      </div>
      <div @click="$emit('before-remove-speaker', index)"
           class="remove-speaker">
        <img src="../../assets/conference page/remove.svg"
             alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user', 'index', 'type'],
  data: () => ({
    mute: false
  })
}
</script>

<style scoped>
.speaker-card {
  position: relative;
  height: 185px;
  width: 233px;
  border-radius: 2px;
  background-color: #ffffff;
}
.speaker-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 115px;
  width: 234px;
  border-radius: 2px 2px 0 0;
  background: linear-gradient(180deg, #2ed8ed 0%, #6fabff 100%);
  margin-bottom: 21px;
}
.speaker-header-video {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 115px;
  width: 234px;
  border-radius: 2px 2px 0 0;
  background: black;
  margin-bottom: 21px;
}
.user-video {
  width: auto;
  height: 115px;
}
.speaker-avatar {
  margin-top: 15px;
  margin-bottom: 8px;
  height: 65px;
  width: 65px;
  border-radius: 50%;
  vertical-align: middle;
  object-fit: cover;
}
.speaker-header span {
  text-transform: uppercase;
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 10px;
  font-weight: bold;
  line-height: 12px;
}
.speaker-card-body {
  display: flex;
}
.speaker-info {
  display: flex;
  flex-direction: column;
  margin-left: 19px;
  width: 117px;
}
.speaker-name {
  color: #505050;
  font-family: "Helvetica Neue";
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 5px;
}
.speaker-number {
  display: flex;
  color: #5a5a5a;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  margin-bottom: 16px;
}
.phone-icon {
  color: #2565e8;
  margin-right: 11px;
}
.mute-speaker {
  text-transform: uppercase;
  width: 26px;
  margin-right: 15px;
  height: 41px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #bababa;
  font-family: "Helvetica Neue";
  font-size: 9px;
  font-weight: 500;
  line-height: 11px;
}
.remove-speaker {
  text-transform: uppercase;
  height: 41px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #c93137;
  font-family: "Helvetica Neue";
  font-size: 9px;
  font-weight: 500;
  line-height: 11px;
}
.remove-icon,
.volume-icon {
  align-self: center;
  margin-bottom: 4px;
}
.unmute-speaker {
  text-transform: uppercase;
  width: 39px;
  margin-right: 15px;
  height: 41px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #2565e8;
  font-family: "Helvetica Neue";
  font-size: 9px;
  font-weight: 500;
  line-height: 11px;
}
.mute-speaker,
.remove-speaker,
.unmute-speaker {
  cursor: pointer;
}
.video-icon {
  position: absolute;
  left: 80%;
  top: 80%;
  color: white;
}
</style>
