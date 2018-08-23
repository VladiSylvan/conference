<template>
  <div class="container">
    <div class="item"></div>
    <div class="file">
      <icon name="file-word-o"
            scale="2" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media only screen and (max-width: 704px) {
  .container {
    position: static !important;
    justify-content: flex-start !important;
    align-items: center;
  }
  .item {
    margin-left: 22px !important;
  }
}
.container {
  display: flex;
  align-items: center;
  bottom: 0;
  height: 60px;
  width: 100%;
  position: fixed;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.14);
  left: 0;
}
.item {
  margin-left: 79px;
  height: 47px;
  width: 84px;
  background-color: #bbbbbb;
  align-items: center;
}
.file {
  margin-left: 29px;
}
</style>
