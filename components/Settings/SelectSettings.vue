<template>
  <div class="info-container">
    <p class="info-header">{{header}}</p>
    <div v-click-outside="outsideSpeaker"
         class="select">
      <div @click="showSelect = !showSelect"
           class="select-base">
        <icon name="caret-down"
              scale="1.25"
              class="triangle-icon"></icon>
        <span v-if="selected === false">{{data[0]}}</span>
        <span v-else>{{selected}}</span>
      </div>
      <div v-if="showSelect"
           class="select-body">
        <div @click="selected = item, showSelect = !showSelect"
             v-for="item in data"
             :key="item.id"
             class="select-item">
          <span>{{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info',
  props: ['header', 'data'],
  data: () => ({
    showSelect: false,
    selected: false
  }),
  methods: {
    outsideSpeaker () {
      this.showSelect = false
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 750px) and (max-width: 1150px) {
  .info-container {
    width: 47.5% !important;
  }
  .select {
    width: 100% !important;
  }
  .select-base {
    width: calc(100% - 17px) !important;
  }
  .select-body {
    width: calc(100% - 17px) !important;
  }
}
@media only screen and (max-width: 749px) {
  .info-container {
    width: 100% !important;
  }
  .select {
    width: 100% !important;
  }
  .select-base {
    width: calc(100% - 17px) !important;
  }
  .select-body {
    width: calc(100% - 17px) !important;
  }
}
.info-container {
  margin-bottom: -1px;
}
.info-container .info-header {
  color: #ababab;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  margin-bottom: 11px;
}
.select {
  position: relative;
  /* margin-bottom: 20px; */
  background-color: white;
}
.select-base {
  padding-left: 17px;
  cursor: pointer;
  margin-bottom: 14px;
  position: relative;
  border: none;
  height: 35px;
  width: calc(320px - 17px);
  border: 1px solid #bebebe;
  border-radius: 3px 3px 0 0;
}
.select-base span {
  position: absolute;
  top: 35%;
  /* left: 44px; */
  color: #7e7e7e;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
}
.select-body {
  padding-left: 17px;
  margin-top: -14px;
  background-color: white;
  z-index: 1;
  position: absolute;
  padding-bottom: 28px;
  border: none;
  margin-bottom: 14px;
  width: calc(320px - 17px);
  border-bottom: 1px solid #bebebe;
  border-left: 1px solid #bebebe;
  border-right: 1px solid #bebebe;
}
.select-item {
  cursor: pointer;
  /* margin-left: 17px; */
  padding-top: 15px;
  color: #7e7e7e;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
}
.triangle-icon {
  position: absolute;
  color: #a5a5a5;
  border-radius: 4px;
  top: 50%;
  margin-top: -10px;
  left: 90%;
}
</style>
