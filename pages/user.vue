<template>
  <div class="container">
    <div class="main-user desktop">
      <div class="welcome-container">
        <main-user-welcome class="main-user-welcome" />
      </div>
      <div class="info-container">
        <main-user-info @open-schedule="showShedule = true, component = 'ScheduleForLater'"
                        class="main-user-info" />
        <main-user-copy class="main-user-copy" />
        <main-user-last-calls class="main-user-last-calls" />
      </div>
    </div>

    <div class="main-user mobile">
      <main-user-info @open-schedule="showShedule = true, component = 'ScheduleForLater'"
                      class="main-user-info" />
      <main-user-welcome class="main-user-welcome" />
      <main-user-copy class="main-user-copy" />
      <main-user-last-calls class="main-user-last-calls" />
    </div>

    <div class="main-user tablet">
      <div class="welcome-container">
        <main-user-welcome class="main-user-welcome" />
        <main-user-last-calls class="main-user-last-calls" />
      </div>
      <div class="info-container">
        <main-user-info @open-schedule="showShedule = true, component = 'ScheduleForLater'"
                        class="main-user-info" />
        <main-user-copy class="main-user-copy" />
      </div>
    </div>

    <modal-component v-if="showShedule === true">
      <component :is="component"
                 header="Add participant"
                 @close-schedule="showShedule = false"
                 @back-schedule="component = 'ScheduleForLater'"
                 @add-participant="component = 'AddParticipant'" />

    </modal-component>
  </div>
</template>

<script>
export default {
  name: 'user',
  components: {
    MainUserWelcome: () => import('../components/MainUser/Welcome.vue'),
    MainUserInfo: () => import('../components/MainUser/Info.vue'),
    MainUserCopy: () => import('../components/MainUser/Copy.vue'),
    MainUserLastCalls: () => import('../components/MainUser/LastCalls.vue'),
    ModalComponent: () => import('../components/ModalComponent.vue'),
    ScheduleForLater: () => import('../components/MainUser/ScheduleForLater.vue'),
    AddParticipant: () => import('../components/MainUser/AddParticipant.vue')
  },
  data: () => ({
    showShedule: false,
    component: 'ScheduleForLater'
  })

}
</script>

<style scoped>
@media only screen and (min-width: 1130px) {
  .container {
    width: auto !important;
  }
  .main-user {
    width: 1115px !important;
    margin-top: 40px !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
  }
  .main-user-info {
    margin-bottom: 28px !important;
  }
  .main-user-welcome {
    /* margin-left: 81px; */
    margin-right: 30px !important;
    margin-bottom: 28px !important;
  }
  .main-user-last-calls {
    width: 536px !important;
  }
  .mobile {
    display: none !important;
  }
  .tablet {
    display: none !important;
  }
  .container {
    display: flex;
    justify-content: center;
  }
}
@media only screen and (min-width: 705px) and (max-width: 1129px) {
  .main-user {
    flex-direction: row !important;
  }
  .main-user-welcome {
    width: 411px !important;
    margin-right: 10px;
  }
  .main-user-info {
    width: 269px !important;
    height: fit-content !important;
    margin-bottom: 11px !important;
  }
  .main-user-copy {
    width: 269px !important;
    height: fit-content !important;
  }
  .main-user-last-calls {
    width: 411px !important;
    height: fit-content !important;
  }
  .info-container {
    width: 269px !important;
  }
  .mobile {
    display: none !important;
  }
  .desktop {
    display: none !important;
  }
  .tablet {
    justify-content: center;
  }
}
@media only screen and (max-width: 704px) {
  .info-container {
    order: -1;
  }
  .mobile {
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
  .desktop {
    display: none !important;
  }
  .tablet {
    display: none !important;
  }
}
.container {
  width: 100%;
}
.main-user {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* width: 1115px; */
  margin-top: 20px;
}
.main-user-welcome {
  margin-bottom: 20px;
}
.welcome-container {
  margin-bottom: 20px;
}
.main-user-info {
  margin-bottom: 20px;
}
.main-user-copy {
  margin-bottom: 19px;
}
</style>
