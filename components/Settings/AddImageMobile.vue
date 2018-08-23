<template>
  <div class="modal-container">
    <div class="add-image-container">
      <button class="take-photo">Take Photo</button>
      <button class="upload-from-library">Upload From Library</button>
      <button @click="close"
              class="cancel">Cancel</button>
    </div>
  </div>

</template>

<script>
export default {
  data: () => ({
    image: null
  }),
  methods: {
    close () {
      this.$emit('stop-upload')
    }
  }
}
</script>

<style scoped>
.modal-container {
  background-color: rgba(0, 0, 0, 0.4);
  overflow-y: auto;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.add-image-container {
  width: 96%;
  height: fit-content;
  display: flex;
  flex-direction: column;
}
.take-photo {
  width: 100%;
  height: 57px;
  border-radius: 12px 12px 0 0;
  border-bottom: 1px solid rgba(77, 77, 77, 0.3);
  background-color: rgba(255, 255, 255, 1);
  color: rgba(10, 96, 255, 1);
  font-family: "Helvetica Neue";
  font-size: 20px;
  letter-spacing: 0.38px;
  line-height: 24px;
  text-align: center;
}
.upload-from-library {
  width: 100%;
  height: 57px;
  border-radius: 0 0 12px 12px;
  background-color: rgba(255, 255, 255, 1);
  margin-bottom: 10px;
  color: rgba(10, 96, 255, 1);
  font-family: "Helvetica Neue";
  font-size: 20px;
  letter-spacing: 0.38px;
  line-height: 24px;
  text-align: center;
}
.cancel {
  width: 100%;
  height: 57px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  margin-bottom: 10px;
  color: rgba(10, 96, 255, 1);
  font-family: "Helvetica Neue";
  font-size: 20px;
  letter-spacing: 0.38px;
  line-height: 24px;
  text-align: center;
}
</style>
