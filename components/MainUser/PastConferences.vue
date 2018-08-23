<template>
  <div>
    <div v-for="conference in computedConferences"
         :key="conference.legth">
      <div class="call-container">
        <div class="call-id">
          <div class="call-id-header">
            <span>Call iD</span>
          </div>
          <div class="call-id-body">
            <span>{{conference.conference_uuid.slice(0,5)}}</span>
          </div>
        </div>
        <div class="duration">
          <div class="duration-header">
            <span>Duration</span>
          </div>
          <div class="duration-body">
            <span>{{conference.duration}}</span>
          </div>
        </div>
        <div class="name">
          <div class="name-header">
            <span>Name</span>
          </div>
          <div class="name-body">
            <span>{{conference.conference_name}}</span>
          </div>
        </div>
        <drop-down-component></drop-down-component>
      </div>
      <div v-if="conference !== computedConferences[computedConferences.length - 1]"
           class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainUserPastConferences',
  created () {
    this.$store.dispatch('getConferenceHistory')
  },
  components: {
    DropDownComponent: () => import('./ConfereceDropDown.vue')
  },
  props: ['last'],
  computed: {
    conferences () {
      return this.$store.state.conference.confHistory ? this.$store.state.conference.confHistory : []
    },
    computedConferences () {
      if (this.last && this.conferences.length !== 0) {
        let arr = []
        arr.push(this.conferences[this.conferences.length - 1])
        return arr
      } else {
        return this.conferences
      }
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 1130px) {
  .call-id {
    width: 87px !important;
  }
  .duration {
    width: 98px !important;
  }
  .name-body {
    display: flex;
  }
  .name-body span {
    width: 321px !important;
  }
  .line {
    width: 532px !important;
  }
}
@media only screen and (min-width: 501px) and (max-width: 1129px) {
  .call-container {
    justify-content: space-between;
    width: 95%;
  }
}
@media only screen and (max-width: 500px) {
  .call-container {
    justify-content: space-between;
    width: 95%;
  }
  .name {
    width: 65% !important;
  }
}
.call-container {
  display: flex;
  margin-bottom: 14px;
}
.call-id,
.duration,
.name {
  display: flex;
  flex-direction: column;
}
.call-id-header,
.duration-header,
.name-header {
  color: #b3b4b4;
  font-family: "Acumin Pro";
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.52px;
  line-height: 14px;
  margin-bottom: 12px;
}
.call-id-body,
.duration-body {
  color: #6d6d6d;
  font-family: "Acumin Pro";
  font-size: 16px;
  letter-spacing: -0.69px;
  line-height: 19px;
}
.name-body {
  color: #6d6d6d;
  font-family: "Acumin Pro";
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.69px;
  line-height: 19px;
}
.call-id {
  width: 60px;
}
.duration {
  width: 60px;
}
.name-body {
  display: flex;
}
.name-body span {
  width: 200px;
}
.line {
  box-sizing: border-box;
  width: 95%;
  border: 1px solid #d9d9d9;
  margin-bottom: 11px;
}
</style>
