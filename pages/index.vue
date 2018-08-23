<template>
  <div class="home-wrapper">
    <div class="home-container">
      <div class="header-container colored">
        <header-component class="header-component" />
        <header-body-component class="header-body" />
      </div>
      <div class="blocks">
        <block-one class="block-one" />
        <div class="block-two">
          <block-two />
        </div>
        <features />
        <div class="how-this-works">
          <how-this-works />
        </div>
        <pricing-component />
        <div class="how-this-works">
          <reviews-component />
        </div>
        <div class="email-invintation">
          <p>Why wait? Start your first conference!</p>
          <input-email class="invintation-email-input" />
        </div>
        <div class="customers">
          <p class="header">Our Customers</p>
          <div class="wrapper">
            <p>UBER</p>
            <p>UBER</p>
            <p>UBER</p>
            <p>UBER</p>
            <p>UBER</p>
            <p>UBER</p>
          </div>
        </div>
        <footer class="footer-container">
          <footer-comonent />
          <p class="footer-text">2018. (с) Dida Conference . Loremipsum dolor set mit dor lorem ipsum </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    HeaderComponent: () => import('../components/home/Header.vue'),
    HeaderBodyComponent: () => import('../components/home/HeaderBody.vue'),
    BlockOne: () => import('../components/home/BlockOne.vue'),
    BlockTwo: () => import('../components/home/BlockTwo.vue'),
    Features: () => import('../components/home/Features.vue'),
    HowThisWorks: () => import('../components/home/HowThisWorks.vue'),
    PricingComponent: () => import('../components/home/Pricing.vue'),
    ReviewsComponent: () => import('../components/home/ClientReview.vue'),
    InputEmail: () => import('../components/home/InputEmail.vue'),
    FooterComonent: () => import('../components/home/Footer.vue')
  }
}
</script>

<style scoped>
/* tablet 1210px*/
/* moblie 768px*/
@media only screen and (min-width: 767px) and (max-width: 1210px) {
  .block-one {
    margin-bottom: 111px !important;
  }
  .block-two {
    height: fit-content !important;
    padding-bottom: 72px;
  }
}
@media only screen and (max-width: 766px) {
  .block-one {
    margin-bottom: 26px !important;
  }
  .block-two {
    height: fit-content !important;
    padding-bottom: 31px;
  }
  .email-invintation {
    width: 90% !important;
    justify-content: center;
    margin-left: auto !important;
    margin-right: auto !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    font-size: 20px !important;
    font-weight: 300 !important;
    line-height: 40px !important;
    text-align: center !important;
    padding-bottom: 60px !important;
  }
  .email-invintation p {
    margin-bottom: 20px !important;
  }
  .header-component {
    margin-bottom: 119px !important;
  }
  .header-container {
    padding-bottom: 122px !important;
    margin-bottom: 36px !important;
  }
  .customers {
    padding-bottom: 0px !important;
  }
  .customers .wrapper p {
    margin-left: 10px;
    margin-right: 10px;
  }
  .invintation-email-input {
    width: 100% !important;
  }
}
.home-wrapper {
  background-color: #fafcff;
}
.home-container {
  max-width: 1280px;
  margin: auto;
}
.header-component {
  margin-bottom: 159px;
}
.header-container {
  background: linear-gradient(
      rgb(116, 116, 116, 0.74),
      rgb(116, 116, 116, 0.74)
    ),
    url("../assets/bussnesswoman.jpg"), center no-repeat;
  background-size: cover;
  vertical-align: middle;
  object-fit: cover;
  padding-top: 28px;
  padding-bottom: 169px;
  margin-bottom: 98px;
}
.block-one {
  margin-bottom: 117px;
}
.block-two {
  height: 580px;
  width: 100%;
  background-color: #f9f9f9;
  margin-bottom: 45px;
}
.how-this-works {
  width: 100%;
  height: fit-content;
  background-color: #f9f9f9;
}
.email-invintation {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 46px;
  padding-bottom: 75px;
}
.email-invintation p {
  color: #444444;
  font-family: "Helvetica Neue";
  font-size: 22px;
  font-weight: 300;
  line-height: 40px;
  margin-bottom: 29px;
}
.invintation-email-input {
  box-shadow: 0 4px 11px 0 rgba(0, 0, 0, 0.19);
}
.customers {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 66px;
  width: 100%;
  background-color: #f9f9f9;
}
.customers .header {
  color: #444444;
  font-family: "Helvetica Neue";
  font-size: 22px;
  font-weight: 300;
  line-height: 40px;
  margin-bottom: 41px;
}
.customers .wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: space-around;
}
.customers .wrapper p {
  height: 62px;
  width: 62px;
  font-family: "Helvetica Neue";
  font-size: 22px;
  font-weight: 300;
  line-height: 40px;
  margin-bottom: 41px;
}
.footer-container {
  background-color: #4d4d4d;
  padding-top: 40px;
  padding-bottom: 32px;
}
.footer-text {
  margin-left: 10%;
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 12px;
  line-height: 14px;
}
</style>
