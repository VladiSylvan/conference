<template>
  <div class="action-container">
    <icon class="icon"
          name="lock"
          scale="2" />
    <p>Conference Is Locked</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.action-container {
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: calc(100% - 61px - 20px);
  left: calc(100% - 224px - 20px);
  height: 61px;
  width: 224px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 0 4px 0;
}
.icon {
  margin-left: 18px;
  margin-right: 21px;
  color: #2e7eed;
}
p {
  color: #575757;
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
}
</style>
