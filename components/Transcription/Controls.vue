<template>
  <div class="controls">
    <img class="undo"
         src="../../assets/transcription page/refresh-arrow copy.svg"
         alt="">
    <img class="play"
         src="../../assets/transcription page/play-button.svg"
         alt="">
    <img class="undo"
         src="../../assets/transcription page/refresh-arrow.svg"
         alt="">
    <div class="x">
      <span>1x</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media only screen and (min-width: 705px) and (max-width: 1150px) {
  .controls {
    width: 60% !important;
  }
}
@media only screen and (max-width: 704px) {
}
.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
  width: 167px;
}
.controls .undo {
  color: #a5a5a5;
  cursor: pointer;
}
.controls .play {
  cursor: pointer;
  color: #2e7eed;
}
.controls .x {
  cursor: pointer;
  margin-top: 4px;
  color: #2565e8;
  font-family: "Helvetica Neue";
  font-size: 20px;
  font-weight: 500;
  line-height: 25px;
}
</style>
