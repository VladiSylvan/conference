<template>
  <div class="find-your-state">
    <div class="buying-dida-conferen">
      <span>Buing Dida Confedence Number</span>
    </div>
    <div class="enter-your-state-to">
      <span>Enter your state to find available number</span>
    </div>
    <div v-click-outside="outside"
         class="find-your-state-input">
      <icon name="search"
            class="search-icon"></icon>
      <icon v-if="state.full_state.length > 1 && selectedStates.length > 1"
            name="caret-up"
            class="triangle-icon"></icon>
      <icon v-else
            name="caret-down"
            class="triangle-icon"></icon>
      <input placeholder="Find your state"
             @input="changeName($event.target.value)"
             :value="state.full_state">
      <div v-if="state.full_state.length > 1 && selectedStates.length >= 1 && selectedStates[0].name !== state.name"
           class="select-body">
        <div v-for="stateAuto in selectedStates"
             @click="chooseState(stateAuto)"
             :key="stateAuto.id"
             class="select-item">
          <span>{{stateAuto.name}}, {{stateAuto.iso}}</span>
        </div>
      </div>
    </div>

    <button :disabled="state.name.length < 3 || selectedStates.length < 1"
            @click="next">next</button>
  </div>
</template>

<script>
export default {
  name: 'state',
  data: () => ({
    state: {name: '', iso: '', 'full_state': '', area_code: ''}
  }),
  methods: {
    changeName (el) {
      this.state.name = el
      this.state.full_state = el
    },
    next () {
      console.log(this.state)
      this.$emit('select', 'SelectPrefix')
      this.$emit('state', this.state)

    },
    outside () {
      if (this.selectedStates.length > 1) this.state.full_state = ''
    },
    chooseState (state) {
      this.state.area_code = state.area.code
      this.state.name = state.name
      this.state.iso = state.iso
      this.state.full_state = state.name + ', ' + state.iso
    }
  },
  created () {
    this.$store.dispatch('getStates')
  },
  computed: {
    states () {
      return this.$store.state.numbers.states
    },
    selectedStates () {
      if (this.states !== null) {
        return this.states.filter((el) => {
          return el.name.toLowerCase().indexOf(this.state.name.toLowerCase()) > -1
        })
      } else {
        return []
      }
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 500px) {
  .find-your-state {
    width: 100% !important;
    margin-top: 125px !important;
  }
  .find-your-state-input {
    display: flex !important;
    width: 95% !important;
  }
  .triangle-icon {
    left: 90% !important;
  }
  .select-body {
    width: 100% !important;
  }
}
.select-body {
  left: 0;
  top: 45px;
  background-color: white;
  z-index: 1;
  position: absolute;
  padding-bottom: 28px;
  border: none;
  margin-bottom: 14px;
  width: 477px;
  box-shadow: 4px 4px 6px rgba(223, 223, 223, 0.34);
}
.select-item {
  cursor: pointer;
  margin-left: 17px;
  padding-top: 15px;
  color: #7e7e7e;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
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
  text-align: center;
}
.enter-your-state-to {
  margin-top: 16px;
  margin-bottom: 25px;
  height: 16px;
  width: 257px;
  color: #6f6f6f;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
  text-align: center;
}
.find-your-state-input {
  position: relative;
}
input {
  border: none;
  height: 45px;
  width: 477px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 6px rgba(223, 223, 223, 0.34);
  padding-left: 60px;
  padding-right: 38px;
  box-sizing: border-box;
  color: #a5a5a5;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
}
input:focus {
  outline: none;
}
.search-icon {
  color: #a5a5a5;
  position: absolute;
  height: 16px;
  width: 16px;
  border-radius: 4px;
  top: 50%;
  margin-top: -8px;
  left: 25px;
}
.triangle-icon {
  position: absolute;
  color: #a5a5a5;
  height: 16px;
  width: 16px;
  border-radius: 4px;
  top: 50%;
  margin-top: -8px;
  left: 439px;
}
button {
  height: 41px;
  width: 137px;
  margin-top: 39px;
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
</style>
