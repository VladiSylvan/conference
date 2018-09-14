<template>
  <div v-click-outside="outside"
       class="side-bar">
    <div class="side-bar-container">
      <div @click="showTime"
           class="icon">
        <img v-if="'SideBarTime' == component"
             src="../../assets/conference page/clock selected.svg"
             alt="">
        <img v-else
             src="../../assets/conference page/clock.svg"
             alt="">
      </div>
      <div @click="showViewers"
           class="icon">
        <img v-if="'SideBarViewers' == component"
             src="../../assets/conference page/male selected.svg"
             alt="">
        <img v-else
             src="../../assets/conference page/male.svg"
             alt="">
      </div>
      <div class="icon"
           @click="showChat">
        <img v-if="'SideBarChat' == component"
             src="../../assets/conference page/chat selected.svg"
             alt="">
        <img v-else
             src="../../assets/conference page/chat.svg"
             alt="">
      </div>
      <div class="icon">
        <img src="../../assets/conference page/questions-circular-button.svg"
             alt="">
      </div>
      <div @click="showSettings"
           class="icon">
        <img src="../../assets/conference page/settings.svg"
             alt="">
      </div>
    </div>
    <transition name="fade">
      <component v-if="showSideBarBody"
                 class="side-bar-body"
                 :is="component" />
    </transition>
  </div>
</template>

<script>
export default {
  props: ['modalComponent'],
  components: {
    SideBarTime: () => import('./SideBarTime.vue'),
    SideBarViewers: () => import('./SideBarViewers.vue'),
    SideBarChat: () => import('./SideBarChat.vue')
  },
  data: () => ({
    component: '',
    showSideBarBody: false
  }),
  methods: {
    showTime () {
      this.showSideBarBody = !this.showSideBarBody
      if (this.component === 'SideBarTime') {
        this.component = ''
        this.$emit('hide-side-bar')
      } else {
        this.showSideBarBody = true
        this.component = 'SideBarTime'
        this.$emit('show-side-bar')
      }
    },
    showViewers () {
      this.showSideBarBody = !this.showSideBarBody
      if (this.component === 'SideBarViewers') {
        this.component = ''
        this.$emit('hide-side-bar')
      } else {
        this.showSideBarBody = true
        this.component = 'SideBarViewers'
        this.$emit('show-side-bar')
      }
    },
    showChat () {
      this.showSideBarBody = !this.showSideBarBody
      if (this.component === 'SideBarChat') {
        this.component = ''
        this.$emit('hide-side-bar')
      } else {
        this.showSideBarBody = true
        this.component = 'SideBarChat'
        this.$emit('show-side-bar')
      }
    },
    showSettings () {
      this.showSideBarBody = false
      this.component = ''
      this.$emit('show-settings')
    },
    outside () {
      this.showSideBarBody = false
      this.component = ''
    }
  }
}
</script>

<style scoped>
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-enter {
  transform: translateX(-100%);
}
/* .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-leave-to {
  transform: translateX(-100%);
} */
@media only screen and (min-width: 961px) {
  .side-bar {
    order: 0;
    width: fit-content;
    margin-right: 50px;
  }
}
@media only screen and (min-width: 705px) and (max-width: 960px) {
  .side-bar-container {
    margin-top: -60px !important;
  }
  .side-bar-body {
    position: absolute;
    z-index: 2;
  }
  .side-bar {
    order: 0;
    min-width: 50px;
    width: fit-content;
  }
}
@media only screen and (max-width: 704px) {
  .side-bar-body {
    margin-top: -120px;
    width: calc(100% - 50px);
    left: 0 !important;
    position: absolute;
    z-index: 2;
  }
  .side-bar {
    order: 0;
    min-width: 50px;
    width: fit-content;
  }
  .side-bar-container {
    margin-top: -180px !important;
  }
}
.side-bar {
  display: table;
  order: 0;
  width: fit-content;
}
.side-bar-container {
  z-index: 5;
  border-color: #dbdbdb;
  border-style: solid;
  border-width: 0px 1px 0 1px;
  background-color: #ffffff;
  padding-bottom: 120px;
  margin-top: -120px;
  position: fixed;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 50px;
}
.side-bar-container .icon {
  cursor: pointer;
  align-self: center;
  color: #a7a7a7;
  height: 18px;
  width: 18px;
  margin-bottom: 33px;
}
.side-bar-body {
  margin-left: 50px;
}
</style>
