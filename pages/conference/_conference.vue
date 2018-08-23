<template>
  <div class="conference-call-container">
    <side-bar @show-settings="showSettings"
              @show-side-bar="showSideBar"
              @hide-side-bar="hideSideBar"
              :modal-component="component" />
    <div v-if="$route.name === 'share-screen'"
         class="conference-call-wrapper">

      <div class="shared-screen">
        <div @click="$router.push({name: 'conference'})"
             class="conference-call-back">
          <icon class="angle-left-icon"
                name="angle-left"
                scale="1.5" />
          <span> Back To Conference</span>
        </div>
        <img class="user-video"
             src="../../assets/ben-unsplash.jpg"
             alt="">
      </div>
    </div>
    <div v-else-if="$route.name === 'video-conference'"
         class="conference-video-call-wrapper">
      <div class="user-wrapper">
        <div class="icon-body mobile mobile-video-icon">
          <ConferenceCallButton :info="{'header': '', 'body': ''}"
                                :modal="false"
                                icon-name="video-camera"
                                :current-component="component"
                                new-component="video-conference"
                                @show-component="showShedule = true, component = $event"
                                @lock-conference="lockConference = $event" />
        </div>
        <img class="user-video"
             src="../../assets/ben-unsplash.jpg"
             alt="">
      </div>
      <div class="users-wrapper">
        <speaker-card class="card desktop"
                      v-for="(user, index) in users"
                      @before-remove-speaker="beforeRemove($event)"
                      :index="index"
                      :user="user"
                      :key="user.id"
                      :type="user.type">
          <div class="conference-call-name">
            <span>Speakers</span>
          </div>
        </speaker-card>
        <speaker-card v-if="hideSpeakers === false"
                      class="card mobile"
                      v-for="(user, index) in users"
                      @before-remove-speaker="beforeRemove($event)"
                      :index="index"
                      :user="user"
                      :key="user.id"
                      :type="user.type">
          <div class="conference-call-name">
            <span>Speakers</span>
          </div>
        </speaker-card>
      </div>
    </div>
    <div v-else
         class="conference-call-wrapper">
      <speaker-card class="card desktop"
                    v-for="(user, index) in users"
                    @before-remove-speaker="beforeRemove($event)"
                    :index="index"
                    :user="user"
                    :key="user.id"
                    :type="user.type">
        <div class="conference-call-name">
          <span>Speakers</span>
          <div class="icon-body mobile">
            <ConferenceCallButton :info="{'header': 'Video call', 'body': 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui.'}"
                                  icon-name="video-camera"
                                  :modal="false"
                                  :current-component="component"
                                  new-component="video-conference"
                                  @show-component="showShedule = true, component = $event"
                                  @lock-conference="lockConference = $event" />
          </div>
        </div>
      </speaker-card>
      <speaker-card v-if="hideSpeakers === false"
                    class="card mobile"
                    v-for="(user, index) in users"
                    @before-remove-speaker="beforeRemove($event)"
                    :index="index"
                    :user="user"
                    :key="user.id"
                    :type="user.type">
        <div class="conference-call-name">
          <span>Speakers</span>
          <div class="icon-body mobile">
            <ConferenceCallButton :info="{'header': 'Video call', 'body': 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui.'}"
                                  icon-name="video-camera"
                                  :modal="false"
                                  :current-component="component"
                                  new-component="video-conference"
                                  @show-component="showShedule = true, component = $event"
                                  @lock-conference="lockConference = $event" />
          </div>
        </div>
      </speaker-card>
    </div>

    <modal-component v-if="showModal">
      <component @close-schedule="showModal = false, component = ''"
                 @remove-speaker="removeSpeaker"
                 :is="component" />
    </modal-component>
    <welcome-modal v-if="welcomeModal"
                   @use-pc="showModal = true, component = 'AudioSettings', welcomeModal = false"
                   @use-phone="showModal = true, component = 'JoinByPhone', welcomeModal = false"
                   @without-audio="welcomeModal = false" />
    <!-- <shared-items v-if="hideSpeakers === false"
                  class="mobile" /> -->
    <shared-items class="desktop" />
  </div>
</template>

<script>
export default {
  props: ['sharescreen'],
  name: 'conference-call',
  components: {
    SideBar: () => import('../../components/ConferenceCall/SideBar.vue'),
    SpeakerCard: () => import('../../components/ConferenceCall/SpeakerCard.vue'),
    ModalComponent: () => import('../../components/ModalComponent.vue'),
    DeleteModal: () => import('../../components/ConferenceCall/DeleteModal.vue'),
    JoinByPhone: () => import('../../components/ConferenceCall/JoinByPhone.vue'),
    AudioSettings: () => import('../../components/ConferenceCall/AudioSettings.vue'),
    WelcomeModal: () => import('../../components/ConferenceCall/WelcomeModal.vue'),
    SharedItems: () => import('../../components/ConferenceCall/SharedItems.vue'),
    ConferenceCallButton: () => import('../../components/app/ConferenceCallButton.vue')
  },
  data: () => ({
    welcomeModal: true,
    component: '',
    showModal: false,
    hideSpeakers: false,
    currentUser: null,
    users: [
      {'name': 'Alisa Wonder', 'number': '781-448-4037', 'avatar_url': '../../assets/ben-unsplash.jpg', 'speaker_status': 'organizer', 'type': 'audio'},
      {'name': 'Alisa Wonder', 'number': '781-448-4037', 'avatar_url': '../../assets/ben-unsplash.jpg', 'speaker_status': 'organizer', 'type': 'audio'},
      {'name': 'Alisa Wonder', 'number': '781-448-4037', 'avatar_url': '../../assets/ben-unsplash.jpg', 'speaker_status': 'organizer', 'type': 'video'},
      {'name': 'Alisa Wond', 'number': '781-448-4047', 'avatar_url': '../../assets/ben-unsplash.jpg', 'speaker_status': 'speaker', 'type': 'video'},
      {'name': 'Alisa WonderWon', 'number': '781-448-4057', 'avatar_url': '../../assets/ben-unsplash.jpg', 'speaker_status': 'speaker', 'type': 'video'},
      {'name': 'Dennis Obrien', 'number': '781-448-4067', 'avatar_url': '../../assets/ben-unsplash.jpg', 'speaker_status': 'speaker', 'type': 'audio'},
      {'name': 'Alisa Wonder', 'number': '781-448-4077', 'avatar_url': '../../assets/ben-unsplash.jpg', 'speaker_status': '', 'type': 'video'},
      {'name': 'Catherine Jordan', 'number': '781-448-4087', 'avatar_url': '../../assets/ben-unsplash.jpg', 'speaker_status': 'organizer', 'type': 'video'}
    ]
  }),
  methods: {
    beforeRemove (index) {
      this.component = 'DeleteModal'
      this.showModal = true
      this.currentUser = index
    },
    removeSpeaker () {
      this.showModal = false
      this.users.splice(this.currentUser, 1)
    },
    showSettings () {
      this.component = 'AudioSettings'
      this.showModal = true
      this.hideSpeakers = false
    },
    showSideBar () {
      this.hideSpeakers = true
    },
    hideSideBar () {
      this.hideSpeakers = false
    }
  }

}
</script>

<style scoped>
.mobile {
  display: none !important;
}
@media only screen and (min-width: 961px) {
  .conference-call-back {
    display: flex;
  }
  .conference-call-name {
    display: flex;
    width: 100% !important;
  }
  .conference-call-container {
    width: 100% !important;
  }
  .conference-call-wrapper {
    width: 100% !important;
    height: fit-content !important;
  }
  .conference-video-call-wrapper {
    width: 100% !important;
    height: fit-content !important;
  }
  .conference-call-wrapper .card {
    margin-bottom: 50px;
  }
  .conference-video-call-wrapper .card {
    margin-bottom: 50px;
  }
  .user-video {
    width: 100%;
    height: auto;
  }
}

@media only screen and (min-width: 705px) and (max-width: 1000px) {
  .conference-call-back {
    display: flex;
  }
  .conference-call-name {
    display: flex;
    width: 100% !important;
  }
  .conference-call-container {
    width: 100% !important;
  }
  .conference-call-wrapper {
    width: 100% !important;
  }
  .conference-call-wrapper .card {
    margin-bottom: 50px;
    margin-right: 2.5% !important;
    margin-left: 2.5% !important;
  }
  .conference-video-call-wrapper {
    width: 100% !important;
  }
  .conference-video-call-wrapper .card {
    margin-bottom: 50px;
  }
  .user-wrapper {
    position: relative;
    margin-top: 0 !important;
    max-width: 100% !important;
    height: fit-content !important;
  }
  .user-video {
    width: 100%;
    height: auto;
  }
}
@media only screen and (max-width: 704px) {
  .users-wrapper {
    justify-content: center !important;
    margin-right: 0 !important;
    width: 100% !important;
  }
  .mobile {
    display: block !important;
  }
  .desktop {
    display: none !important;
  }
  .conference-call-back {
    display: flex;
  }
  .conference-call-name {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100% !important;
  }
  .icon-body {
    cursor: pointer;
    color: #5f697a;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(195, 195, 195, 1);
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }
  .conference-call-container {
    align-self: center;
    width: 100% !important;
  }
  .conference-call-body {
    width: fit-content;
    align-items: center;
    width: 100% !important;
  }
  .conference-call-wrapper {
    justify-content: center !important;
    margin-right: 0 !important;
    width: 100% !important;
  }
  .conference-call-wrapper .card {
    margin-right: 2.5% !important;
    margin-left: 2.5% !important;
    margin-bottom: 50px;
  }
  .conference-video-call-wrapper {
    justify-content: center !important;
    margin-right: 0 !important;
    width: 100% !important;
  }
  .conference-video-call-wrapper .card {
    margin-right: 2.5% !important;
    margin-left: 2.5% !important;
    margin-bottom: 50px;
  }
  .user-wrapper {
    position: relative;
    margin-top: 0 !important;
    max-width: 100% !important;
    height: fit-content !important;
  }
  .user-video {
    width: 100%;
    height: auto;
  }
  .mobile-video-icon {
    position: absolute;
    left: 80%;
    top: 10%;
  }
  .mobile-video-icon div {
    background-color: rgba(208, 2, 27, 1) !important;
    color: white !important;
    position: absolute;
  }
}
.conference-call-back {
  cursor: pointer;
  top: -50px;
  position: absolute;
  align-items: center;
  margin-bottom: 24px;
  color: #2565e8;
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
}
.conference-call-back div {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.angle-left-icon {
  margin-right: 20px;
}
.conference-call-container {
  width: 1280px;
  display: flex;
  flex-direction: row;
}
.conference-call-name {
  position: absolute;
  top: -74px;
  max-width: 1115px;
  margin-top: 33px;
  margin-bottom: 24px;
  color: #7a7a7a;
  font-family: "Helvetica Neue";
  font-size: 17px;
  font-weight: 500;
  line-height: 21px;
}
.conference-call-wrapper {
  margin-top: 78px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  max-width: 1200px;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.conference-video-call-wrapper {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  max-width: 1200px;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}
.conference-call-wrapper .card {
  position: relative;
  margin-right: 32px;
  margin-left: 32px;
  margin-bottom: 50px;
}
.conference-video-call-wrapper .card {
  margin-right: 32px;
  margin-left: 32px;
  margin-bottom: 50px;
}
.video-call-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user-wrapper {
  margin-top: 45px;
  margin-bottom: 96px;
  height: 408px;
  max-width: 612px;
  width: 100%;
}
.users-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.shared-screen {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background-color: black;
  width: 80%;
  height: auto;
}
</style>
