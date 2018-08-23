<template>
  <div class="tip-container">
    <p class="header">{{info.header}}</p>
    <p class="body">{{info.body}}</p>
  </div>
</template>

<script>
export default {
  props: ['info']

}
</script>

<style scoped>
.tip-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 5px;
  padding-left: 10px;
  left: 20px;
  top: 48px;
  z-index: 1;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  height: fit-content;
  width: 167px;
  border-radius: 2px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
}
.header {
  margin-bottom: 2px;
  color: rgba(107, 107, 108, 1) !important;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: center;
}
.body {
  width: 154.42px;
  color: rgba(173, 174, 175, 1);
  font-family: "Helvetica Neue";
  font-size: 10px;
  line-height: 12px;
  margin-bottom: 11px;
}
</style>
