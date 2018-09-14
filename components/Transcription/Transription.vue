<template>
  <div class="transcription-container">
    <div class="user-info"
         :style="{color: transcription.user_id === 1 ? '#139DEB' : 'Alisa Wonder'}">
      <img class="avatar"
           src="../../assets/ben-unsplash.jpg"
           alt="">
      <span>{{transcription.name}}</span>
    </div>
    <div class="user-body">
      <div class="user-transcription">
        <span>{{transcription.transcription}}</span>
      </div>
      <div v-if="transcription.mark"
           class="mark-header">
        <img src="../../assets/transcription page/mark.svg"
             class="map-pin-icon"
             alt="">
        <span>{{transcription.mark_id}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['transcription']
}
</script>

<style scoped>
@media only screen and (min-width: 705px) and (max-width: 1150px) {
  .transcription-container {
    width: 100% !important;
    justify-content: space-between !important;
  }
  .user-info {
    width: 20% !important;
    margin-left: 5% !important;
  }
  .avatar {
    margin-right: 2.5% !important;
  }
  .user-body {
    width: 70% !important;
  }
}
@media only screen and (max-width: 704px) {
  .transcription-container {
    flex-direction: column !important;
    width: 100% !important;
    justify-content: space-between !important;
  }
  .user-info {
    width: 100% !important;
    margin-left: 5% !important;
  }
  .user-body {
    margin-left: 5% !important;
    justify-content: center;
    width: 90% !important ;
  }
}
.transcription-container {
  display: flex;
  height: fit-content;
  width: 827px;
  background-color: #ffffff;
}
.avatar {
  height: 32px;
  width: 32px;
  border-radius: 2px;
  vertical-align: middle;
  object-fit: cover;
  margin-right: 20px;
}
.user-info {
  color: #3ea07c;
  width: 190px;
  height: 32px;
  margin-top: 21px;
  margin-left: 39px;
  display: flex;
  align-items: center;
}
.user-body {
  margin-top: 21px;
  width: 557px;
  margin-bottom: 23px;
}
.user-transcription {
  color: #2a2929;
  font-family: "Helvetica Neue";
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 22px;
}
.mark-header {
  display: flex;
  align-items: center;
  color: #6ece1a;
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
}
.map-pin-icon {
  margin-right: 8px;
}
</style>
