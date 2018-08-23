<template>
  <div class="drop-down">
    <div class="base">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.drop-down {
  z-index: 9999999;
  position: absolute;
  margin-top: 12px;
}
.drop-down .base {
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  padding-left: 18px;
  padding-bottom: 16px;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.25);
}
.drop-down:before {
  content: "";
  position: absolute;
  top: -6px;
  left: 75%;
  right: 0;
  z-index: 1;
  width: 12px;
  height: 12px;
  background: #ffffff;
  transform: rotate(135deg);
  box-shadow: -2px 2px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
