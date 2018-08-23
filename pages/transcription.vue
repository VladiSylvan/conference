<template>
  <div class="transcription-container ">
    <div class="first-container desktop">
      <controls-component class="controls-component " />
      <marks-component v-for="mark in marks"
                       :key="mark.id"
                       :mark="mark" />
    </div>
    <div class="second-container desktop">
      <player-component @share="showShedule = true"
                        class="player-component" />
      <search-component class="search-component" />
      <transription-component v-for="transcription in transcriptions"
                              :key="transcription.id"
                              :transcription="transcription"
                              class="transription-component" />
    </div>

    <div class="first-container mobile">
      <player-component @share="showShedule = true"
                        class="player-component" />
      <controls-component class="controls-component" />
      <marks-component v-for="mark in marks"
                       :key="mark.id"
                       :mark="mark" />

      <search-component class="search-component " />
      <transription-component v-for="transcription in transcriptions"
                              :key="transcription.id"
                              :transcription="transcription"
                              class="transription-component" />
    </div>
    <modal-component v-if="showShedule === true">
      <add-participant :header="'Share'"
                       @close-schedule="showShedule = false" />

    </modal-component>
  </div>
</template>

<script>
export default {
  components: {
    controlsComponent: () => import('../components/Transcription/Controls.vue'),
    marksComponent: () => import('../components/Transcription/Marks.vue'),
    playerComponent: () => import('../components/Transcription/Player.vue'),
    searchComponent: () => import('../components/Transcription/Search.vue'),
    transriptionComponent: () => import('../components/Transcription/Transription.vue'),
    ModalComponent: () => import('../components/ModalComponent.vue'),
    AddParticipant: () => import('../components/MainUser/AddParticipant.vue')
  },
  data: () => ({
    showShedule: false,
    marks: [
      {'name': 'Mark 1', 'time': '1:31'},
      {'name': 'Mark 2', 'time': '1:32'},
      {'name': 'Mark 3', 'time': '1:33'},
      {'name': 'Mark 4', 'time': '1:34'},
      {'name': 'Mark 5', 'time': '1:35'},
      {'name': 'Mark 6', 'time': '1:36'},
      {'name': 'Mark 7', 'time': '1:37'}
    ],
    transcriptions: [
      {'name': 'John Doe', 'user_id': 1, 'avatar_id': '1', 'transcription': 'Donec facilisis tortor ut augue lacinia, at viverra est semper.adipiscing metu.', 'mark': false, 'mark_id': 1},
      {'name': 'Alisa Wonder', 'user_id': 2, 'avatar_id': '1', 'transcription': 'Donec facilisis tortor ut augue lacinia, ng metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.', 'mark': true, 'mark_id': 2},
      {'name': 'John Doe', 'user_id': 1, 'avatar_id': '1', 'transcription': 'Donec facilisis tortor ut augue laciing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.', 'mark': false, 'mark_id': 3},
      {'name': 'Alisa Wonder', 'user_id': 3, 'avatar_id': '1', 'transcription': 'Donec facilisis tortor ut augue lacinia, at viverra, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.', 'mark': true, 'mark_id': 4},
      {'name': 'John Doe', 'user_id': 1, 'avatar_id': '1', 'transcription': 'Donec facilisis tortor ut augue lodio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.', 'mark': true, 'mark_id': 5}
    ]
  })

}
</script>

<style scoped>
@media only screen and (min-width: 1151px) {
  .mobile {
    display: none !important;
  }
}
@media only screen and (min-width: 705px) and (max-width: 1150px) {
  .mobile {
    display: none !important;
  }
  .transcription-container {
    width: 95% !important;
    justify-content: center;
  }
  .first-container {
    width: 30% !important;
  }
  .controls-component {
    margin-left: 25% !important;
  }
  .second-container {
    width: 70% !important;
  }
}
@media only screen and (max-width: 704px) {
  .transcription-container {
    width: 95% !important;
    justify-content: center;
  }
  .desktop {
    display: none !important;
  }
  .controls-component {
    width: 60% !important;
    margin-left: 0 !important;
    margin-top: 0 !important;
    margin-bottom: 23px !important;
  }
  .first-container {
    width: 100% !important;
    margin-right: 0 !important;
    align-items: center !important;
  }
  .search-component {
    margin-top: 10px;
  }
  .player-component {
    width: 90% !important;
  }
}
.transcription-container {
  max-width: 1115px;
  width: 1115px;
  display: flex;
  margin: auto;
}
.first-container {
  display: flex;
  flex-direction: column;
  width: 270px;
  margin-right: 21px;
}
.controls-component {
  margin-top: 59px;
  margin-left: 94px;
  margin-bottom: 47px;
}
.second-container {
  width: 827px;
}
.player-component {
  margin-top: 17px;
  margin-bottom: 17px;
}
.search-component {
  margin-bottom: 10px;
}
.transription-component {
  margin-bottom: 10px;
}
</style>
