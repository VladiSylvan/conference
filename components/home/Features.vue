<template>
  <div class="feature-container">
    <p class="title">Features</p>
    <div class="cards-body">
      <div class="card"
           v-for="feature in features"
           :key="feature.index">
        <feature-card :feature-data="feature" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'features',
    data: () => ({
    features: [
      {icon: require('../../assets/homepage/icons/support.svg'), title: 'Web Conferences', content: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus'},
      {icon: require('../../assets/homepage/icons/telephone.svg'), title: 'Web Conferences', content: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus'},
      {icon: require('../../assets/homepage/icons/agenda.svg'), title: 'Web Conferences', content: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus'},
      {icon: require('../../assets/homepage/icons/password.svg'), title: 'Web Conferences', content: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus'},
      {icon: require('../../assets/homepage/icons/2-monitors.svg'), title: 'Web Conferences', content: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus'},
      {icon: require('../../assets/homepage/icons/file.svg'), title: 'Web Conferences', content: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus'},
      {icon: require('../../assets/homepage/icons/support-2.svg'), title: 'Web Conferences', content: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus'},
      {icon: require('../../assets/homepage/icons/microphone.svg'), title: 'Web Conferences', content: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus'},
      {icon: require('../../assets/homepage/icons/contract.svg'), title: 'Web Conferences', content: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus'}
      ]
  }),
  components: {
    featureCard: () => import('./FeatureCard.vue')
  }

}
</script>

<style scoped>
@media only screen and (min-width: 767px) and (max-width: 1210px) {
  .feature-container {
    width: 90% !important;
  }
}
@media only screen and (max-width: 766px) {
  .feature-container {
    width: 90% !important;
  }
  .card {
    width: 50% !important;
    margin-bottom: 29px !important;
  }
}
.feature-container {
  width: 72.58%;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 42px;
}
.cards-body {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
}
.title {
  margin-bottom: 35px;
  color: #444444;
  font-family: "Helvetica Neue";
  font-size: 22px;
  font-weight: 300;
  line-height: 40px;
}
.card {
  display: flex;
  justify-content: center;
  width: 33%;
  margin-bottom: 58px;
}
</style>
