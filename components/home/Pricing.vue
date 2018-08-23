<template>
  <div class="container">
    <p class="header">Pricing</p>
    <div class="body desktop">
      <div class="wrapper">
        <pricing-card class="component-one free"
                      :header="free.header"
                      :performan="free.performan"
                      :annualy="free.annualy"
                      :description="free.description" />
      </div>
      <div class="wrapper">
        <pricing-card class="component-one"
                      :header="local.header"
                      :performan="local.performan"
                      :annualy="local.annualy"
                      :description="local.description" />
      </div>
      <div class="wrapper">
        <pricing-card class="component-two"
                      :header="tollFree.header"
                      :performan="tollFree.performan"
                      :annualy="tollFree.annualy"
                      :description="tollFree.description" />
      </div>
    </div>
    <div class="body tablet">
      <div class="wrapper-free">
        <pricing-card class="component-one free"
                      :header="free.header"
                      :performan="free.performan"
                      :annualy="free.annualy"
                      :description="free.description" />
      </div>
      <div class="wrapper">
        <pricing-card class="component-one"
                      :header="local.header"
                      :performan="local.performan"
                      :annualy="local.annualy"
                      :description="local.description" />
        <pricing-card class="component-two"
                      :header="tollFree.header"
                      :performan="tollFree.performan"
                      :annualy="tollFree.annualy"
                      :description="tollFree.description" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    PricingCard: () => import('./PricingCard.vue')
  },
  data: () => ({
    free: {
      'header': 'Free',
      'performan': 0,
      'description': 'Payment is either monthly at 10 usd performan or 8 usd paid annually,for local number.'},
    local: {
      'header': 'Local Number',
      'performan': 10,
      'annualy': 8,
      'description': 'Payment is either monthly at 10 usd performan or 8 usd paid annually,for local number.'},
    tollFree: {
      'header': 'Toll Free Number',
      'performan': 20,
      'annualy': 15,
      'description': 'Payment is either monthly at 10 usd performan or 8 usd paid annually,for local number.'}
  })
}
</script>

<style scoped>
@media only screen and (min-width: 1210px) {
  .tablet {
    display: none !important;
  }
}
@media only screen and (min-width: 767px) and (max-width: 1210px) {
  .desktop {
    display: none !important;
  }
  .wrapper {
    width: 100% !important;
    display: flex;
    justify-content: space-between;
  }
  .body {
    flex-direction: column;
    align-items: center;
  }
  .wrapper-free {
    margin-bottom: 55px;
  }
}
@media only screen and (max-width: 766px) {
  .header {
    margin-bottom: 20px !important;
  }
  .tablet {
    display: none !important;
  }
  .body {
    flex-direction: column !important;
    align-items: center !important;
  }
  .wrapper {
    width: 100% !important;
    margin-bottom: 30px !important;
  }
  .container {
    padding-bottom: 0px !important;
  }
}
.container {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 163px;
}
.header {
  margin-top: 30px;
  color: #444444;
  font-family: "Helvetica Neue";
  font-size: 22px;
  font-weight: 300;
  line-height: 40px;
  margin-bottom: 53px;
}
.body {
  display: flex;
  width: 100%;
  justify-content: center;
}
.wrapper {
  width: 33%;
}
.free {
  border: 2px solid #2e7eed;
  margin: -2px;
}
</style>
