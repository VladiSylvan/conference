<template>
  <div>
    <div class="container">
      <div class="header">
        <span>Name This Conference</span>
        <div class="line"></div>
      </div>
      <div class="viewers">
        <div class="viewers-header">
          <span>Viewers</span>
        </div>
        <div v-for="viewer in viewers"
             :key="viewer.id"
             class="viewers-body">
          <img class="viewer-avatar"
               src="../../assets/ben-unsplash.jpg"
               alt="">
          <span>{{viewer.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    viewers: [
      {'name': 'Mark James'},
      {'name': 'John Doe'},
      {'name': 'Alisa Wonder'},
      {'name': 'Mark James'},
      {'name': 'Mark James'}
    ]
  })
}
</script>

<style scoped>
@media only screen and (max-width: 675px) {
  .container {
    padding-top: 120px;
    min-width: 240px;
    width: 100% !important;
  }
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 282px;
  min-height: 790px;
  background-color: #ffffff;
}
.container .header {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #afadad;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 26px;
}
.container .header span {
  align-self: flex-start;
  margin-left: 36px;
  margin-bottom: 14px;
  font-family: "Helvetica Neue";
  font-size: 15px;
  line-height: 17px;
}
.container .header .line {
  width: 219px;
  border: 0.5px solid #b8b8b8;
}
.container .viewers {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-left: 33px;
}
.container .viewers .viewers-header {
  height: 20px;
  width: 60px;
  color: #7a7a7a;
  font-family: "Helvetica Neue";
  font-size: 17px;
  line-height: 20px;
  margin-bottom: 21px;
}
.container .viewers .viewers-body {
  margin-bottom: 26px;
}
.container .viewers .viewers-body .viewer-avatar {
  height: 27px;
  width: 30px;
  margin-right: 22px;
  border-radius: 4px;
  vertical-align: middle;
  object-fit: cover;
}
.container .viewers .viewers-body span {
  color: #505050;
  font-family: "Helvetica Neue";
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
}
</style>
