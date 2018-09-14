<template>
  <div class="conference-call-wrapper">
    <div class="shared-screen">
      <div @click="back()"
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
</template>

<script>
export default {
  name: 'share-screen',
  data: () => ({          
    video: {},
    canvas: {},
    captures: []
            
  }),
  mounted() {
  },
  methods: { 
    back() {
      this.$store.commit("confComponent", null)
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
  .conference-call-wrapper {
    width: 100% !important;
    height: fit-content !important;
  }
}

@media only screen and (min-width: 705px) and (max-width: 1000px) {
  .conference-call-back {
    display: flex;
  }

  .conference-call-wrapper {
    width: 100% !important;
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

.conference-call-wrapper {
  margin-top: 78px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  max-width: 1200px;
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
