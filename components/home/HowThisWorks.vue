<template>
  <div class="container">
    <p class="header">How This Works</p>
    <div class="body">
      <div class="tittle-container">
        <div v-for="(item, index) in titles"
             :key="item.index"
             @click="index = index">
          <p @click="item.show = !item.show"
             class="title">{{item.name}}
            <icon class="circle"
                  name="angle-down" />
          </p>
          <p v-if="item.show === true"
             class="description">{{item.description}}</p>
        </div>

      </div>
      <div class="video"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    index: 0,
    titles: [
      {name: 'Lorem Ipsum Dolor Set Mit Dor',  description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor', show: false},
      {name: 'Lorem Ipsum Dolor Set Mit Dor',  description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor', show: true},
      {name: 'Lorem Ipsum Dolor Set Mit Dor',  description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor', show: false},
      {name: 'Lorem Ipsum Dolor Set Mit Dor',  description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor', show: false}
    ]
  })

}
</script>

<style scoped>
@media only screen and (min-width: 767px) and (max-width: 1210px) {
  .container {
    width: 90% !important;
    padding-bottom: 56px !important;
  }
  .body {
    flex-direction: column !important;
    justify-content: center;
    width: auto !important;
  }
  .tittle-container {
    order: 2;
  }
  .video {
    order: 1;
    height: 206px !important;
    width: 350px !important;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
  }
}
@media only screen and (max-width: 766px) {
  .title {
    width: calc(100% - 37px) !important;
  }
  .container {
    width: 90% !important;
    padding-bottom: 39px !important;
  }
  .body {
    flex-direction: column !important;
    justify-content: center;
    width: 100% !important;
  }
  .tittle-container {
    order: 2;
  }
  .title {
    width: 412px;
  }
  .video {
    order: 1;
    height: 206px !important;
    width: 350px !important;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 58px;
  }
  .header {
    margin-bottom: 33px !important;
  }
}
.circle {
  width: 20px;
  height: 20px;
  border: 1px solid #2565e8;
  border-radius: 50%;
}
.title {
  cursor: pointer;
}
.container {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 146px;
}
.header {
  margin-top: 46px;
  margin-bottom: 71px;
  color: #444444;
  font-family: "Helvetica Neue";
  font-size: 22px;
  font-weight: 300;
  line-height: 40px;
}
.body {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.title-container {
  display: flex;
  flex-direction: column;
}
.video {
  height: 277px;
  width: 470px;
  background-color: #d8d8d8;
}
.title {
  height: 52px;
  width: 412px;
  background-color: rgba(146, 176, 217, 0.11);
  color: #2565e8;
  font-family: "Helvetica Neue";
  font-size: 15px;
  line-height: 17px;
  display: flex;
  align-items: center;
  padding-left: 17px;
  padding-right: 22px;
  justify-content: space-between;
  margin-bottom: 22px;
}
.description {
  width: 412px;
  color: #818181;
  font-family: "Helvetica Neue";
  font-size: 16px;
  font-weight: 300;
  line-height: 30px;
  margin-bottom: 20px;
  text-align: center;
}
</style>
