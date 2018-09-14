<template>
  <div class="home">
    <div class="home-header">
      <div v-if="!this.authPaths[this.$route.name]"
           @click="$router.push({name: 'user'})"
           class="logo">
        <img class="icon"
             src="../../assets/e-mail tamplates/logo.png"
             alt="">
      </div>
      <div v-else
           @click="$router.push({name: 'index'})"
           class="logo">
        <img class="icon"
             src="../../assets/e-mail tamplates/logo.png"
             alt="">
      </div>
      <div v-if="($route.matched[0].name) === 'conference'"
           class="header-icon desktop">
        <ConferenceCallButton :info="{'header': 'Video call', 'body': 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui.'}"
                              :icon="videoCamera"
                              :current-component="component"
                              :modal="false"
                              new-component="VideoConference"
                              @show-component="showShedule = true, component = $event" />
        <ConferenceCallButton v-for="button in conferenceCallMenu"
                              :key="button.id"
                              :modal="button.modal"
                              :info="button.info"
                              :icon="button.icon"
                              :current-component="component"
                              :new-component="button.component"
                              @show-action-tip="actionTip = !actionTip"
                              @show-component="showShedule = true, component = $event" />
      </div>
      <div v-if="!this.authPaths[this.$route.name]"
           v-click-outside="outside"
           class="user">
        <div @click="showDropDown = !showDropDown"
             class="username">
          <span>Username</span>
        </div>
        <img @click="showDropDown = !showDropDown"
             src="../../assets/ben-unsplash.jpg"
             class="user-picture">
        <div class="drop-down-user-container">
          <div class="caret-down-button"
               @click="showDropDown = !showDropDown">
            <icon name="caret-down"
                  class="triangle"></icon>
          </div>
          <drop-down-component v-show="showDropDown"
                               class="drop-down-user">
            <div @click="$router.push({name: 'conferences'}), showDropDown = false"
                 class=phone>
              <icon name="phone" />
              <span>Conferences</span>
            </div>
            <div @click="$router.push({name: 'settings'}), showDropDown = false"
                 class="cog">
              <icon name="cog" />
              <span>Settings</span>
            </div>
            <div @click="$router.push({name: 'payments'}), showDropDown = false"
                 class="clock">
              <icon name="clock-o" />
              <span>Payment History</span>
            </div>
            <div @click="$router.push({name: 'numbers'}), showDropDown = false"
                 class="number">
              <svg fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg"
                   width="16"
                   height="16"
                   viewBox="1 1 24 24">
                <path d="M12 19c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
              <span>Numbers</span>
            </div>
            <button @click="$router.push({name: 'upgrade'}), showDropDown = false"
                    class="upgrade">Upgrade</button>
            <button @click="signOut()"
                    class="upgrade"
                    style="border-color: red; color: red">Sign Out</button>
          </drop-down-component>
        </div>
      </div>
    </div>
    <div v-if="($route.matched[0].name) === 'conference-conference'"
         class="home-header mobile">
      <div class="header-icon">
        <ConferenceCallButton class="video-mobile"
                              :info="{'header': 'Video call', 'body': 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui.'}"
                              :icon="videoCamera"
                              :modal="false"
                              :current-component="component"
                              new-component="VideoConference"
                              @show-action-tip="actionTip = !actionTip"
                              @show-component="showShedule = true, component = $event" />
        <conference-call-button v-for="button in conferenceCallMenu"
                                :modal="button.modal"
                                :key="button.id"
                                :info="button.info"
                                :icon="button.icon"
                                :current-component="component"
                                :new-component="button.component"
                                @show-action-tip="actionTip = !actionTip"
                                @show-component="showShedule = true, component = $event" />
      </div>
    </div>
    <shared-items class="mobile"
                  v-if="($route.matched[0].name) === 'conference'" />
    <modal-component v-if="showShedule">
      <component header="Add participant"
                 @share-screen="showShedule = false"
                 @close-schedule="showShedule = false, component = ''"
                 :is="component" />

    </modal-component>
    <action-tip v-if="actionTip && ($route.matched[0].name) === 'conference-conference'" />

  </div>
</template>

<script>
export default {
  name: 'HeaderMenu',
  components: {
    DropDownComponent: () => import('../DropDownComponent.vue'),
    AddParticipant: () => import('../MainUser/AddParticipant.vue'),
    ModalComponent: () => import('../ModalComponent.vue'),
    ShareFileComponent: () => import('../ConferenceCall/ShareFile.vue'),
    ShareScreen: () => import('../ConferenceCall/ShareScreenModal.vue'),
    MenuTip: () => import('../ConferenceCall/MenuTips.vue'),
    ConferenceCallButton: () => import('./ConferenceCallButton.vue'),
    ActionTip: () => import('../ConferenceCall/ActionTip.vue'),
    SharedItems: () => import('../ConferenceCall/SharedItems.vue')
  },
  data: () => ({
    authPaths: {
      'auth-signup': true, 'password-reset': true, 'password-confirmation': true, 'password-success': true, 'auth-login': true, index: true
    },
    conferenceCallMenu: [
      {modal: true, icon: require("../../assets/conference page/share screen.svg"), 'info': {'header': 'Share screen', 'body': 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui.'}, 'component': 'ShareScreen'},
      {modal: true, icon: require("../../assets/conference page/upload file.svg"), 'info': {'header': 'Share File', 'body': 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui.'}, 'component': 'ShareFileComponent'},
      {modal: true, icon: require("../../assets/conference page/invite user.svg"), 'info': {'header': 'Add participant', 'body': 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui.'}, 'component': 'AddParticipant'},
      {modal: false, icon: require("../../assets/conference page/record.svg"), 'info': {'header': 'Microphone', 'body': 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui.'}, 'component': false},
      {modal: false, icon: require("../../assets/conference page/mute.svg"), 'info': {'header': 'Mute', 'body': 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui.'}, 'component': false},
      {modal: false, icon: require("../../assets/conference page/lock.svg"), 'info': {'header': 'Lock Conference', 'body': 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui.'}, 'component': 'lock-conference'},
      {modal: false, icon: require("../../assets/conference page/leave.svg"), 'info': {'header': 'Close Conference', 'body': 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui.'}, 'component': 'close'}

    ],
    showDropDown: false,
    showShedule: false,
    actionTip: false,
    videoCamera: require("../../assets/conference page/enable video.svg"),
    component: ''
  }),
  methods: {
    outside () {
      this.showDropDown = false
    },
    signOut () {
      this.$store.dispatch('signout')
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 1331px) {
  .home .mobile {
    display: none !important;
  }
  .home .home-header {
    max-width: 1115px !important;
    width: 100%;
  }
  .home {
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
  }
  .desktopLink {
    display: block !important;
  }
}
@media only screen and (min-width: 705px) and (max-width: 1330px) {
  .home .mobile {
    display: none !important;
  }
  .home .logo {
    margin-left: 2.5% !important;
  }
  .desktopLink {
    display: block !important;
  }
}
@media only screen and (max-width: 704px) {
  .home {
    display: flex;
    order: 0;
  }
  .home .icon-body-close {
    margin: 0 !important;
  }
  .home .header-icon {
    margin-left: 2.5% !important;
    margin-right: 2.5% !important;
    align-self: center !important;
    display: flex !important;
    justify-content: space-around !important;
    width: 100%;
  }
  .home .desktop {
    display: none !important;
  }
  .home .home-header,
  .home .mobile {
    border: none !important;
  }
  .home {
    justify-content: center !important;
  }
  .home .logo {
    margin-left: 2.5% !important;
  }
  .home .icon-body {
    margin: 0 !important;
  }
}
@media only screen and (max-width: 704px) {
  .video-mobile {
    display: none !important;
  }
}
.mobile {
  z-index: 998 !important;
}
.home {
  z-index: 999;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background-color: #2e7eed;
}
.home-header {
  z-index: 999;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  background-color: #2e7eed;
}
.home .logo {
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 21px;
}
.home .icon {
  width: 153px;
  height: 21px;
}
.home .dida-conference {
  margin-left: 10px;
  height: 17px;
  width: fit-content;
  color: #ffffff;
  font-family: "Acumin Pro";
  font-size: 17px;
  font-weight: bold;
  letter-spacing: -0.73px;
  line-height: 20px;
}
.home .user {
  display: flex;
  align-items: center;
  margin-right: 12px;
  height: 27px;
  width: 121px;
}
.home .username {
  cursor: pointer;
  height: 15px;
  width: 59px;
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: bold;
  line-height: 15px;
}
.home .user-picture {
  cursor: pointer;
  margin-left: 13px;
  height: 27px;
  width: 30px;
  border-radius: 4px;
  vertical-align: middle;
  object-fit: cover;
}
.home .triangle {
  cursor: pointer;
  margin-left: 11px;
  height: 16px;
  width: 16px;
  color: #ffffff;
}
.home .drop-down-user-container {
  display: flex;
  position: relative;
}
.home .drop-down-user-container .caret-down-button {
  display: flex;
}
.home .drop-down-user {
  width: 133px;
  top: 36px;
  left: -120px;
}
.home .drop-down-user div {
  margin: 0;
  color: #9f9f9f;
  font-family: "Helvetica Neue";
  font-size: 11px;
  font-weight: 500;
  line-height: 13px;
  text-align: left;
  margin-bottom: 10px;
}
.home .drop-down-user a {
  margin: 0;
  color: #2565e8;
  font-family: "Helvetica Neue";
  font-size: 11px;
  font-weight: 500;
  line-height: 13px;
}
.home .upgrade {
  margin-top: 12px;
  margin-left: -7px;
  height: 26px;
  width: 111px;
  border: 1px solid #2e7eed;
  border-radius: 3px;
  color: #2565e8;
  font-family: "Helvetica Neue";
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
}
.home .drop-down-user .phone,
.home .drop-down-user .cog,
.home .drop-down-user .clock,
.home .drop-down-user .number {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.home .drop-down-user .phone span,
.home .drop-down-user .cog span,
.home .drop-down-user .clock span,
.home .drop-down-user .number span {
  margin-left: 7px;
}
.home .header-icon {
  display: flex;
}
.home .header-icon .icon-body {
  position: relative;
  cursor: pointer;
  margin-right: 20px;
  color: #2565e8;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
}
.home .header-icon .icon-body-close {
  position: relative;
  cursor: pointer;
  margin-right: 20px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(213, 71, 71, 1);
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
}
</style>
