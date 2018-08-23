<template>
  <transition name="modal">
    <div class="modal-mask">
      <p class="modal-header">Welcome!</p>
      <p class="modal-title">Choose how you want to choose conference</p>
      <div class="modal-body">
        <button @click="$emit('use-phone')"
                style="margin-right: 30px;">
          <div class="welcome-button">
            <icon class="modal-icon"
                  name="phone" />
            <span>my phone</span>
          </div>
        </button>
        <button @click="$emit('use-pc')">
          <div class="welcome-button">
            <icon class="modal-icon"
                  name="desktop" />
            <span>my computer</span>
          </div>
        </button>
      </div>
      <p @click="$emit('without-audio')"
         class="modal-footer">I don't need audio</p>
    </div>
  </transition>
</template>

<script>
export default {
}
</script>

<style scoped>
.modal-mask {
  overflow-y: auto;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.53);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}
.modal-header {
  color: rgba(255, 255, 255, 1);
  font-family: "Helvetica Neue";
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  text-align: center;
  margin-bottom: 20px;
}
.modal-title {
  color: rgba(255, 255, 255, 1);
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  margin-bottom: 19px;
}
.modal-body {
  display: flex;
  flex-direction: row;
  margin-bottom: 23px;
}
.modal-body button {
  height: 37px;
  width: 145px;
  border-radius: 2px;
  background-color: rgba(46, 126, 237, 1);
  color: rgba(255, 255, 255, 1);
  font-family: "Helvetica Neue";
  font-size: 11px;
  font-weight: bold;
  line-height: 13px;
  text-align: center;
  text-transform: uppercase;
}
.welcome-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-icon {
  margin-right: 17px;
}
.modal-footer {
  cursor: pointer;
  height: 24px;
  color: rgba(255, 255, 255, 1);
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  border-bottom: 1px dashed rgba(255, 255, 255, 1);
}
</style>
