<template>
  <div class="modal-container">
    <div class="add-image-container"
         v-click-outside="outside">
      <picture-input ref="pictureInput"
                     width="683"
                     height="470"
                     accept="image/jpeg,image/png"
                     size="10"
                     button-class="btn"
                     :hideChangeButton="true"
                     :plain="true"
                     @change="onChange">
      </picture-input>
      <div class="border"></div>
      <div class="body">
        <icon class="image-icon"
              name="image"
              scale="4" />
        <p class="header">DRAG YOUR IMAGE HERE</p>
      </div>
    </div>
  </div>
</template>

<script>
import PictureInput from 'vue-picture-input'

export default {
  data: () => ({
    image: null
  }),
  components: {
    PictureInput
  },
  methods: {
    onChange (image) {
      // console.log('New picture selected!')
      if (image) {
        // console.log('Picture loaded.')
        this.image = image
        this.$emit('add-image', this.image)
      } else {
        // console.log('FileReader API not supported: use the <form>, Luke!')
      }
    },
    outside () {
      this.$emit('stop-uploading')
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 800px) {
  .add-image-container {
    width: 80% !important;
  }
  .header {
    font-size: 12px !important;
  }
}
.modal-container {
  overflow-y: auto;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.add-image-container {
  position: relative;
  max-height: 470px;
  max-width: 683px;
  width: 100%;
  height: auto;
  background-color: #ffffff;
  box-shadow: 0 0 24px 10px rgba(0, 0, 0, 0.17);
}
.body {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #c3c3c3;
  display: flex;
  flex-direction: column;
  align-items: center !important;
  justify-content: center !important;
}
.border {
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  position: absolute;
  border: 2px dashed #c3c3c3;
}
.image-icon {
  margin-bottom: 27px;
}
.header {
  color: #c3c3c3;
  font-family: "Helvetica Neue";
  font-size: 22px;
  font-weight: 500;
  line-height: 27px;
}
.picture-input div {
  height: 100% !important;
}
</style>
