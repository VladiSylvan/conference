<template>
  <div class="update-page-container">
    <div class="header">
      <span>{{header}}</span>
    </div>
    <div class="body">
      <div class="performan">
        <div class="price">
          <span>${{performan}}</span>
        </div>
        <div class="name">
          <span>performan</span>
        </div>
      </div>
      <div v-if="annualy"
           class="or">
        <span>or</span>
      </div>
      <div v-if="annualy"
           class="annually">
        <div class="price">
          <span>${{annualy}}</span>
        </div>
        <div class="name">
          <span>annually</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <span>
        {{description}}
      </span>
    </div>
    <button @click="$router.push({name: 'user'})">choose</button>
  </div>
</template>

<script>
export default {
  props: ['header', 'performan', 'annualy', 'description']
}
</script>

<style scoped>
@media only screen and (max-width: 766px) {
  .update-page-container {
    align-self: center;
    width: 100% !important;
  }
  .update-page-container .footer {
    width: 90% !important;
  }
}
.update-page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 294.5px;
  width: 310px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 6px rgba(223, 223, 223, 0.34);
}
.update-page-container .header {
  margin-top: 32px;
  margin-bottom: 28px;
  color: #222222;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 23px;
  text-align: center;
}
.update-page-container .body {
  display: flex;
}
.update-page-container .price {
  color: #2d7fea;
  font-family: "Helvetica Neue";
  font-size: 36px;
  line-height: 43px;
  text-align: center;
}
.update-page-container .name {
  height: 17px;
  width: 67px;
  color: #656668;
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  text-align: center;
}
.update-page-container .or {
  height: 54px;
  display: flex;
  align-items: center;
  margin-left: 24.26px;
  margin-right: 31.25px;
  color: #3d3d3d;
  font-family: "Helvetica Neue";
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  text-align: center;
}
.update-page-container .footer {
  margin-bottom: 32px;
  width: 266.88px;
  color: #6f6f6f;
  font-family: "Helvetica Neue";
  font-size: 13px;
  line-height: 15px;
  text-align: center;
}
.update-page-container button {
  margin-bottom: 32px;
  padding-top: 2px;
  margin-top: -2px;
  text-transform: uppercase;
  height: 35.31px;
  width: 117.97px;
  border-radius: 19.5px;
  background-color: #2e7eed;
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 10px;
  font-weight: bold;
  line-height: 12px;
  text-align: center;
}
.body {
  margin-bottom: 32px;
}
</style>
