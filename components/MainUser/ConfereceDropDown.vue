<template>
  <div v-click-outside="outside"
       class="pop-up-container">
    <div class="button-pop-up"
         @click="showPopUp = !showPopUp">
      <icon class="triangle-icon"
            name="caret-down" />
    </div>
    <div v-if="showPopUp"
         class="drop-down">
      <div class="base pop-up">
        <p @click="$router.push({name: 'transcription'})"
           class="item">View Transcript</p>
        <p class="item"
           @click="showPlayback = true, outside()">Playback</p>
        <a class="item"
           @click="outside"
           href="#">Download Rec</a>
      </div>
    </div>
    <modal v-if="showPlayback">
      <playback @close-playback="showPlayback = false" />
    </modal>
  </div>
</template>

<script>
export default {
  components: {
    playback: () => import('./Playback.vue'),
    modal: () => import('../ModalComponent.vue')
  },
  data: () => ({
    showPopUp: false,
    showPlayback: false
  }),
  methods: {

    outside () {
      this.showPopUp = false
    }
  }
}
</script>

<style scoped>
.drop-down {
  position: absolute;
  margin-top: 12px;
  z-index: 1;
}
.drop-down .base {
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  padding-left: 18px;
  padding-bottom: 16px;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.25);
}
.drop-down:before {
  content: "";
  position: absolute;
  top: -6px;
  right: -19.5px;
  z-index: 1;
  width: 12px;
  height: 12px;
  background: #ffffff;
  transform: rotate(135deg);
  box-shadow: -2px 2px 4px 0px rgba(0, 0, 0, 0.25);
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
  width: 92px;
  left: -74.5px;
  /* top: 27px; */
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
.pop-up .item {
  cursor: pointer;
}
</style>
