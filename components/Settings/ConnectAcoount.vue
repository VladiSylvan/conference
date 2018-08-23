<template>
  <div class="container">
    <div class="container-body">
      <div class="icon-body">
        <icon class="icon"
              name="twitter" />
      </div>
      <span>Connect Twitter</span>
    </div>
    <div class="container-body">
      <div class="icon-body">
        <icon class="icon"
              name="linkedin-square" />
      </div>
      <span>Connect LinkedIn</span>
    </div>
    <div class="container-body">
      <div class="icon-body">
        <icon class="icon"
              name="dropbox" />
      </div>
      <span>Connect Dropbox</span>
    </div>
    <div class="container-body">
      <div class="icon-body">
        <img class="icon"
             src="../../assets/google-drive-logo.svg" />
      </div>
      <span>Connect Google Drive</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'connect-account'
}
</script>

<style scoped>
@media only screen and (max-width: 749px) {
  .container {
    width: calc(100% - 30px) !important;
  }
}
.container {
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: calc(299px - 30px);
  background-color: #ffffff;
  padding-top: 26px;
  padding-left: 30px;
  padding-bottom: 15px;
}
.container-body {
  cursor: pointer;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}
.icon-body {
  margin-right: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 29px;
  width: 29px;
  border-radius: 50%;
  background-color: #ababab;
  color: #fff;
}
.icon {
  color: #fff;
  height: 18px;
  width: 18px;
}
.container-body span {
  color: #b7b6b6;
  font-family: "Helvetica Neue";
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
}
</style>
