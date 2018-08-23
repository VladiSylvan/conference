<template>
  <div v-if="data === undefined"
       class="info-container">
    <p class="info-header">{{header}}</p>
    <input v-if="data === undefined"
           class="info-body"
           type="text">
  </div>
  <div v-else
       class="info-container-disabled">
    <p class="info-header">{{header}}</p>
    <div class="input-container">
      <input disabled
             :placeholder="data"
             class="info-body-disabled"
             type="text">
      <button v-if="type === 'upgrade'"
              class="upgrade">upgrade</button>
      <p v-else-if="type === 'change'"
         class="change">change</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info',
  props: ['header', 'data', 'type']
}
</script>

<style scoped>
/* @media only screen and (min-width: 676px) and (max-width: 1150px) { */
@media only screen and (min-width: 750px) and (max-width: 1150px) {
  .info-container {
    width: 90% !important;
  }
  .info-container-disabled {
    width: 47.5% !important;
  }
  .info-container-disabled .info-body-disabled {
    width: calc(100% - 17px) !important;
  }
  .info-container-disabled .input-container {
    width: 100% !important;
  }
  .info-container .info-body {
    width: calc(100% - 17px) !important;
  }
  .upgrade {
    left: 80% !important;
  }
}
@media only screen and (max-width: 749px) {
  .info-container {
    width: 100% !important;
  }
  .info-container-disabled {
    width: 100% !important;
  }
  .info-container-disabled .info-body-disabled {
    width: calc(100% - 17px) !important;
  }
  .info-container-disabled .input-container {
    width: 100% !important;
  }
  .info-container .info-body {
    width: calc(100% - 17px) !important;
  }
  .upgrade {
    left: 75% !important;
  }
}

input[type="text"]:focus {
  margin: -1px;
}
.info-container {
  margin-bottom: 13px;
}
.info-container-disabled {
  margin-bottom: 13px;
}
.info-header {
  color: #ababab;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  margin-bottom: 11px;
}
.info-body {
  padding-left: 17px;
  height: 35px;
  width: calc(320px - 17px);
  border-radius: 2px;
  color: #737272;
  font-family: "Helvetica Neue";
  font-size: 13px;
  line-height: 15px;
}
.info-body-disabled {
  background-color: #e7e6e6;
  padding-left: 17px;
  height: 35px;
  width: calc(320px - 17px);
  border-radius: 2px;
  color: #ababab;
  font-family: "Helvetica Neue";
  font-size: 13px;
  line-height: 15px;
}
.input-container {
  position: relative;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
}
.upgrade {
  position: absolute;
  left: 80%;
  top: 25%;
  height: 19px;
  width: 56px;
  border-radius: 1px;
  background-color: #2e7eed;
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 9px;
  font-weight: bold;
  line-height: 11px;
  text-transform: uppercase;
}
.change {
  position: absolute;
  left: 80%;
  top: 25%;
  color: #2565e8;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: bold;
  line-height: 15px;
}
</style>
