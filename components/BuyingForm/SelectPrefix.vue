<template>
  <div v-if="!bought"
       class="find-your-state">
    <div class="buying-dida-conferen">
      <span>Buing Dida Confedence Number</span>
    </div>
    <div class="base">
      <span>{{state.full_state}}</span>
      <button @click="$emit('select', 'FindYourState')"
              class="icon-close">
        <icon name="close"></icon>
      </button>
    </div>
    <div v-if="prefix !== false"
         class="base">
      <span>{{prefix}}</span>
      <button @click="prefix = false, number = false"
              class="icon-close">
        <icon name="close"></icon>
      </button>
    </div>
    <div v-if="number !== false"
         class="base">
      <span>{{number}}</span>
      <button @click="number = false"
              class="icon-close">
        <icon name="close"></icon>
      </button>
    </div>
    <div class="select-container"
         v-if="!prefix">
      <div class="select-prefix-that">
        <span>Select prefix, that match your state</span>
      </div>
      <div class="select-base">
        <icon name="caret-down"
              class="triangle-icon"></icon>
        <select v-model="current"
                name=""
                id="">
          <option v-for="code in state.area_code"
                  :key="code.idnex">{{code}}</option>
        </select>
      </div>
    </div>
    <div class="select-container"
         v-if="!number && prefix">
      <div class="select-prefix-that">
        <span>Select available number based on your state and prefix</span>
      </div>
      <div class="select-base">
        <icon name="caret-down"
              class="triangle-icon"></icon>
        <select v-model="current"
                name=""
                id="">
          <option>12578114821</option>
          <option>12578114822</option>
          <option>12578114823</option>
          <option>12578114824</option>
        </select>
      </div>
    </div>
    <button v-if="!number"
            class="select-base-button"
            @click="add">next</button>
    <button v-else
            class="select-base-button"
            @click="bought = true">buy</button>
  </div>
  <div class="find-your-state"
       v-else>
    <div class="your-number">
      <span>{{number}} is your number</span>
    </div>
    <div class="number-overview">
      <span>Lorem ipsum dolor set mit dor, lorem ipsum dolor set</span>
    </div>
    <button class="select-base-button"
            @click="finish">finish</button>
  </div>
</template>

<script>
export default {
  name: 'state',
  props: ['state'],
  data: () => ({
    current: false,
    bought: false,
    prefix: false,
    number: false
  }),
  methods: {
    add () {
      this.prefix ? this.number = this.current : this.prefix = this.current
    },
    finish () {
      this.$store.dispatch('postNumber', this.number)
    }
  },
}
</script>

<style scoped>
@media only screen and (max-width: 412px) {
  .find-your-state {
    display: flex;
    flex-direction: column;
    margin-top: 125px !important;
  }
  .find-your-state {
    width: 100% !important;
  }
  .base {
    /* display: flex !important; */
    width: 95% !important;
  }
  .base span {
    width: 90% !important;
  }
  .select-base {
    width: 95% !important;
  }
  .triangle-icon {
    left: 90% !important;
  }
  .select-container {
    width: 100% !important;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.find-your-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 224px;
}
.buying-dida-conferen {
  height: 19px;
  width: 244px;
  color: #3d3d3d;
  font-family: "Helvetica Neue";
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  margin-bottom: 38px;
}
.base {
  margin-bottom: 24px;
  display: flex;
  position: relative;
  align-items: center;
  border: none;
  height: 45px;
  width: 351px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 6px rgba(223, 223, 223, 0.34);
}
.base span {
  width: 314px;
  text-align: left;
  position: relative;
  left: 30px;
  color: #414141;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
}
.base .icon-close {
  z-index: 1;
  padding: 0;
  color: #a5a5a5;
  height: 16px;
  width: 16px;
  border-radius: 4px;
  left: 315px;
  background: transparent;
}
.select-prefix-that {
  margin: auto;
  height: 16px;
  color: #6f6f6f;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
  width: 80%;
}
.triangle-icon {
  position: absolute;
  color: #a5a5a5;
  height: 16px;
  width: 16px;
  border-radius: 4px;
  top: 50%;
  margin-top: -8px;
  left: 313px;
}
.select-base {
  position: relative;
  border: none;
  margin-top: 24px;
  margin-bottom: 24px;
  height: 45px;
  width: 351px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 6px rgba(223, 223, 223, 0.34);
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  background: none;
  border: none;
  border-radius: 2px;
  position: relative;
  height: 45px;
  width: 351px;
  padding-left: 30px;
  z-index: 1;
  color: #414141;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
}
select:focus {
  outline: none;
}
.select-base-button {
  height: 41px;
  width: 137px;
  margin-top: 34px;
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 10px;
  font-weight: bold;
  line-height: 12px;
  text-align: center;
  border-radius: 19.5px;
  background-color: #2e7eed;
  text-transform: uppercase;
}
button {
  border: none;
}
button:focus {
  outline: none;
}
.your-number {
  margin-top: 76px;
  margin-bottom: 16px;
  color: #3d3d3d;
  font-family: "Helvetica Neue";
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  text-align: center;
}
.number-overview {
  color: #6f6f6f;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  width: 80%;
}
</style>
