<template>
  <div v-click-outside="outside"
       class="container">
    <div class="container-header">
      <span>Audio Settings</span>
    </div>
    <div class="microphone-container">
      <div class="microphone-header">
        <span>Microphone Selection</span>
      </div>
      <div class="microphone-test">
        <span>Test Sound</span>
        <div class="icon-circle active"></div>
        <div class="icon-circle active"></div>
        <div class="icon-circle active"></div>
        <div class="icon-circle"></div>
        <div class="icon-circle"></div>
      </div>
    </div>
    <div v-click-outside="outsideMicro"
         class="select">
      <div @click="showMicroSelect = !showMicroSelect"
           class="select-base">
        <icon name="microphone"
              scale="1.25"
              class="microphone-icon"></icon>
        <icon name="caret-down"
              scale="1.25"
              class="triangle-icon"></icon>
        <span>{{currentMicro}}</span>
      </div>
      <div v-if="showMicroSelect"
           class="select-body">
        <div @click="currentMicro = type, showMicroSelect = !showMicroSelect"
             v-for="type in typesMicro"
             :key="type.id"
             class="select-item">
          <span>{{type}}</span>
        </div>
      </div>
    </div>

    <div class="microphone-container">
      <div class="microphone-header">
        <span>Microphone Selection</span>
      </div>
      <div class="microphone-test">
        <span>Test Sound</span>
      </div>
    </div>
    <div v-click-outside="outsideSpeaker"
         class="select">
      <div @click="showSpeakerSelect = !showSpeakerSelect"
           class="select-base">
        <icon name="volume-up"
              scale="1.25"
              class="microphone-icon"></icon>
        <icon name="caret-down"
              scale="1.25"
              class="triangle-icon"></icon>
        <span>{{currentSpeaker}}</span>
      </div>
      <div v-if="showSpeakerSelect"
           class="select-body">
        <div @click="currentSpeaker = type, showSpeakerSelect = !showSpeakerSelect"
             v-for="type in typesSpeaker"
             :key="type.id"
             class="select-item">
          <span>{{type}}</span>
        </div>
      </div>
    </div>
    <button class="save">save</button>

  </div>
</template>

<script>
export default {
  data: () => ({
    showMicroSelect: false,
    showSpeakerSelect: false,
    currentMicro: 'Default - Build In Microphone',
    currentSpeaker: 'Default - Build In Output',
    typesMicro: ['Micro1', 'Micro2', 'Micro13', 'Micro4', 'Micro5'],
    typesSpeaker: ['Speaker1', 'Speaker2', 'Speaker3', 'Speaker4', 'Speaker5']
  }),
  methods: {
    outsideSpeaker () {
      this.showSpeakerSelect = false
    },
    outsideMicro () {
      this.showMicroSelect = false
    },
    outside () {
      this.$emit('close-schedule')
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 500px) {
  .container {
    width: 95% !important;
  }
  .microphone-container {
    width: 92.5% !important;
  }
  .select {
    width: 100% !important;
    display: flex;
    justify-content: center;
  }
  .select-base {
    width: 92.5% !important;
  }
  .triangle-icon {
    left: 90% !important;
  }
  .select-body {
    width: 92.5% !important;
    top: 100% !important;
  }
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 261px auto;
  max-width: 440px;
  width: 440px;
  min-width: 290px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);
}
.container-header {
  margin-top: 29px;
  margin-bottom: 42px;
  color: #262626;
  font-family: "Helvetica Neue";
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  text-align: center;
}
.microphone-container {
  width: 395px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.microphone-header {
  color: #262626;
  font-family: "Helvetica Neue";
  font-size: 12px;
  line-height: 14px;
  text-align: center;
}
.microphone-test {
  display: flex;
  align-items: center;
  color: #2565e8;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
}
.microphone-test span {
  margin-right: 12px;
}
.icon-circle {
  margin-top: -2px;
  margin-right: 5px;
  border-radius: 50%;
  height: 6px;
  width: 6px;
  background-color: #d8d8d8;
}
.active {
  background-color: #2e7eed;
}
.select {
  position: relative;
  margin-bottom: 20px;
}
.select-base {
  cursor: pointer;
  margin-bottom: 14px;
  position: relative;
  border: none;
  height: 35px;
  width: 400px;
  border: 1px solid #bebebe;
  border-radius: 3px 3px 0 0;
}
.select-base span {
  position: absolute;
  top: 35%;
  left: 44px;
  color: #7e7e7e;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
}
.select-body {
  margin-top: -14px;
  background-color: white;
  z-index: 1;
  position: absolute;
  padding-bottom: 28px;
  border: none;
  margin-bottom: 14px;
  width: 400px;
  border-bottom: 1px solid #bebebe;
  border-left: 1px solid #bebebe;
  border-right: 1px solid #bebebe;
}
.select-item {
  cursor: pointer;
  margin-left: 17px;
  padding-top: 15px;
  color: #7e7e7e;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
}
.triangle-icon {
  position: absolute;
  color: #a5a5a5;
  border-radius: 4px;
  top: 50%;
  margin-top: -10px;
  left: 375px;
}
.microphone-icon {
  position: absolute;
  color: #a5a5a5;
  border-radius: 4px;
  top: 50%;
  margin-top: -10px;
  left: 14px;
}
.save {
  height: 36px;
  width: 152px;
  border-radius: 19.5px;
  background-color: #2e7eed;
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 10px;
  font-weight: bold;
  line-height: 12px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 2px;
  margin-bottom: 31px;
}
</style>
