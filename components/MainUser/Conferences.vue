<template>
  <div>
    <div v-for="conference in computedConferences"
         :key="conference.length"
         class="conferences-container">
      <div class="conferences-body"
           :class="{'body-space' : conference !== computedConferences[computedConferences.length -1]}">
        <div class="start">
          <div class="start-header">
            <span>Starts In</span>
          </div>
          <div class="start-body">
            <span>{{conference.start}}</span>
          </div>
        </div>
        <div class="name">
          <div class="name-header">
            <span>Name</span>
          </div>
          <div class="name-body">
            <div>
              <span>{{conference.name}}</span>
            </div>
            <router-link :to="{name: 'conference'}">enter now</router-link>
          </div>
        </div>
      </div>
      <div v-if="conference !== computedConferences[computedConferences.length - 1]"
           class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainUserConferences',
  props: ['max'],
  data: () => ({
    conferences: [
      {'start': '15h:22m', 'name': 'Sales & Markeing Planning'},
      {'start': '15h:22m', 'name': 'Sales & Markeing Planning'},
      {'start': '15h:22m', 'name': 'Sales & Markeing Planning'},
      {'start': '15h:22m', 'name': 'Sales & Markeing Planning'},
      {'start': '15h:22m', 'name': 'Sales & Markeing Planning'},
      {'start': '15h:22m', 'name': 'Sales & Markeing Planning'}]
  }),
  computed: {
    computedConferences () {
      if (this.max > 0) {
        return this.conferences.slice(0, this.max)
      } else {
        return this.conferences
      }
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 1130px) {
  .start {
    width: 89px !important;
  }
  .name {
    width: 339px !important;
  }
  .name-body div {
    width: 256.5px !important;
  }
  .line {
    width: 100% !important;
  }
}
@media only screen and (min-width: 501px) and (max-width: 1129px) {
  .conferences-body {
    justify-content: space-between;
  }
  .start {
    width: 89px !important;
  }
  .name {
    width: 80% !important;
  }
  .line {
    width: 100% !important;
  }
  .name-body {
    /* width: 256.5px !important; */
    justify-content: space-between !important;
  }
}
@media only screen and (max-width: 330px) {
  .line {
    width: 95% !important;
  }
}
.conferences-container {
  display: flex;
  flex-direction: column;
}
.conferences-body {
  display: flex;
  flex-direction: row;
}
.body-space {
  margin-bottom: 33px;
}
.start-header,
.name-header {
  color: #b3b4b4;
  font-family: "Acumin Pro";
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.52px;
  line-height: 14px;
  margin-bottom: 12px;
}
.start-body,
.name-body {
  color: #6d6d6d;
  font-family: "Acumin Pro";
  font-size: 16px;
  letter-spacing: -0.69px;
  line-height: 19px;
}
.start {
  width: 75px;
}
.name-body {
  display: flex;
}
.name-body div {
  width: 190.5px;
}
.name-body span {
  font-weight: 600;
}
.name-body a {
  align-self: center;
  font-family: "Helvetica Neue";
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  text-transform: uppercase;
}
.line {
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #d9d9d9;
  margin-bottom: 26px;
}
</style>
