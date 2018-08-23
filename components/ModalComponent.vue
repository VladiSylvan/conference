<template>
  <transition name="modal">
    <div class="modal-mask">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
}
</script>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s;
}
.modal-enter, .modal-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.modal-mask {
  overflow-y: auto;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(46, 126, 237, 0.27);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}
</style>
