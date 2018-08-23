<template>
  <div class="time">
    <div class="container">
      <div class="header">
        <span>Name This Conference</span>
        <div class="line"></div>
      </div>
      <div class="timer">
        <span>00:00:00</span>
      </div>
      <div v-for="activity in conferenceActivities"
           :key="activity.id"
           class="body">
        <div class="name">
          <span>{{activity.decription}}</span>
        </div>
        <div class="time">
          <span>{{activity.time}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    conferenceActivities: [
      {'decription': 'Conference Started', 'time': '12:34 am'},
      {'decription': 'Alisa Wonder join the conference Alisa Wonder', 'time': '12:34 am'},
      {'decription': 'Alisa Wonder join the conference Alisa Wonder', 'time': '12:34 am'},
      {'decription': 'Alisa Wonder join the conference Alisa Wonder', 'time': '12:34 am'},
      {'decription': 'Alisa Wonder join the conference Alisa Wonder', 'time': '12:34 am'},
      {'decription': 'Alisa Wonder join the conference Alisa Wonder', 'time': '12:34 am'},
      {'decription': 'Alisa Wonder join the conference Alisa Wonder', 'time': '12:34 am'},
      {'decription': 'Alisa Wonder join the conference Alisa Wonder', 'time': '12:34 am'},
      {'decription': 'Alisa Wonder join the conference Alisa Wonder', 'time': '12:34 am'},
      {'decription': 'Alisa Wonder join the conference Alisa Wonder', 'time': '12:34 am'},
      // {'decription': 'Alisa Wonder join the conference Alisa Wonder', 'time': '12:34 am'},
      // {'decription': 'Alisa Wonder join the conference Alisa Wonder', 'time': '12:34 am'},
      // {'decription': 'Alisa Wonder join the conference Alisa Wonder', 'time': '12:34 am'},
      // {'decription': 'Alisa Wonder join the conference Alisa Wonder', 'time': '12:34 am'},
      // {'decription': 'Alisa Wonder join the conference Alisa Wonder', 'time': '12:34 am'},
      // {'decription': 'Alisa Wonder join the conference Alisa Wonder', 'time': '12:34 am'},
      // {'decription': 'Alisa Wonder join the conference Alisa Wonder', 'time': '12:34 am'},
      // {'decription': 'Alisa Wonder join the conference Alisa Wonder', 'time': '12:34 am'},
      {'decription': 'Dennis join the conference', 'time': '12:34 am'},
      {'decription': 'Angela join the conference', 'time': '12:34 am'}
    ]
  })
}
</script>

<style scoped>
@media only screen and (max-width: 675px) {
  .container {
    padding-top: 120px;
    width: 100% !important;
    min-width: 240px;
  }
  .container .body {
    display: flex;
    width: 90% !important;
  }
  .container .body .name {
    width: 60% !important;
  }
  .container .header .line {
    width: 80% !important;
  }
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 282px;
  min-height: 790px;
  background-color: #ffffff;
  padding-bottom: 50px;
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
.container .timer {
  margin-bottom: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 96px;
  color: #7a7a7a;
  font-family: "Helvetica Neue";
  font-size: 45px;
  font-weight: 300;
  line-height: 55px;
  border-bottom: 1px solid #dbdbdb;
}
.container .body {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
}
.container .body .name {
  margin-left: 24px;
  width: 191px;
  color: #c0c0c0;
  font-family: "Helvetica Neue";
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
}
.container .body .time {
  color: #8e8d8d;
  font-family: "Helvetica Neue";
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
}
</style>
