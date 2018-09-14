<template>
  <div class="marks-container">
    <div class="mark-header">
      <img class="map-pin-icon"
           src="../../assets/transcription page/mark.svg"
           alt="">
      <span>{{mark.name}}</span>
    </div>
    <div class="mark-body">
      <span>{{mark.time}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['mark']
}
</script>

<style scoped>
@media only screen and (min-width: 705px) and (max-width: 1150px) {
  .marks-container {
    width: 100% !important;
  }
}
@media only screen and (max-width: 704px) {
  .marks-container {
    width: 100% !important;
  }
}
.marks-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 59px;
  width: 270px;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
}
.mark-header {
  display: flex;
  align-items: center;
  margin-left: 26px;
  color: #6ece1a;
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
}
.map-pin-icon {
  margin-right: 8px;
  margin-top: -4px;
}
.mark-body {
  margin-right: 30px;
  color: #2a2929;
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  text-align: right;
}
</style>
