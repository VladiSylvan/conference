<template>
  <div v-click-outside="outside"
       class="modal-container">
    <div class="modal-header">
      <v-date-picker v-model='myDate'
                     tint-color="rgba(46,126,237,1)"
                     is-inline
                     is-expanded
                     mode="single"
                     :formats='formats'
                     :theme-styles='themeStyles'>
      </v-date-picker>
    </div>
    <div class="modal-body">
      <div class="modal-body-name">
        <div class="conference-name">
          <span>Name Of Conference</span>
        </div>
        <input class="conference-input"
               type="text">
      </div>
      <div class="modal-body-date">
        <div class="conference-date">
          <div class="conference-name">
            <span>Date</span>
          </div>
          <div class="conference-input-date conference-input">
            <span>{{formatDate}}</span>
          </div>
        </div>
        <div class="conference-time">
          <div class="conference-name">
            <span>Time</span>
          </div>
          <div class="conference-input-time">
            <select type="text">
              <option value="">1:00AM</option>
            </select>
          </div>
          <div>
            <icon name="angle-down"
                  class="angle-down-icon"></icon>
          </div>
        </div>
        <div class="conference-duration">
          <div class="conference-name">
            <span>Duration</span>
          </div>
          <div class="conference-input-duration">
            <select type="text">
              <option value="">1h</option>
            </select>
          </div>
          <div>
            <icon name="angle-down"
                  class="angle-down-icon"></icon>
          </div>
        </div>
      </div>
      <div class="time-zone">
        <div class="conference-name">
          <span>Time Zone</span>
        </div>
        <div class="time-zone-body">
          <select class="conference-input"
                  type="text">
            <option value="">Pasific Time</option>
          </select>
          <div>
            <icon name="angle-down"
                  class="angle-down-icon"></icon>
          </div>
        </div>
      </div>
      <div class="actions-button">
        <button @click="$emit('add-participant')">next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showModal: false,
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    myDate: null,
    formats: {
      title: 'MMMM YYYY',
      weekdays: 'WWW',
      navMonths: 'MMM',
      input: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'], // Only for `v-date-picker`
      dayPopover: 'L', // Only for `v-date-picker`
      data: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'] // For attribute dates
    },
    themeStyles: {
      wrapper: {
        color: 'rgba(68,76,99,1)'
      },
      headerArrows: {
        display: 'block'
      },
      weekdays: {
        color: 'rgba(188,188,188,1)', // New color
        fontWeight: '600' // And bolder font weight
      },
      dayContent: {
        fontSize: '12px'
      }
    }
  }),
  methods: {
    outside () {
      this.$emit('close-schedule')
    }
  },
  computed: {
    formatDate () {
      if (this.myDate !== null) {
        return this.myDate.getDate() + ' ' + this.monthNames[this.myDate.getMonth()] + ', ' + this.myDate.getFullYear()
      } else { return ' ' }
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 500px) {
  .modal-container {
    margin: 5% auto !important;
    width: 95% !important;
  }
  .modal-body {
    width: 95%;
    max-width: 95% !important;
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .modal-body-name {
    max-width: 321px !important;
    width: 95% !important;
    display: flex;
    flex-direction: column;
  }
  .modal-body-name input {
    width: 95% !important;
  }
  .modal-body-date {
    max-width: 321px !important;
    width: 95% !important;
    display: flex;
    justify-content: center;
  }
  .time-zone {
    width: 95% !important;
    max-width: 321px !important;
  }
}
@media only screen and (max-width: 321px) {
  .modal-body {
    margin-top: 12px !important;
  }
}
.modal-container {
  height: fit-content;
  max-width: 440px;
  min-width: 290px;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  margin: 137px auto;
  border-radius: 2px;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);
}

.modal-header {
  margin-top: 32px;
  height: 256px;
  max-width: 345px;
  width: 95%;
}

.modal-body {
  margin-top: 36px;
  display: flex;
  flex-direction: column;
}
.conference-name {
  margin-bottom: 10px;
  color: rgba(68, 76, 99, 1);
  font-family: "Helvetica Neue";
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
}
.modal-body-name input {
  padding-left: 10px;
  width: 321px;
}
.conference-input {
  color: rgba(164, 164, 164, 1);
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  padding: 0;
  margin-right: 7px;
  margin-bottom: 15px;
  height: 33px;
  border: 1px solid rgba(208, 208, 208, 1);
  border-radius: 1px;
  width: 100%;
}
.modal-body-date {
  display: flex;
}
.conference-date {
  width: 116px;
  margin-right: 17px;
}
.conference-time {
  width: 95px;
  margin-right: 10px;
  position: relative;
}
.conference-time .angle-down-icon {
  top: 35px;
  left: 74%;
  position: absolute;
  color: rgba(164, 164, 164, 1);
  width: 16px;
  height: 16px;
}
.conference-duration {
  width: 95px;
  position: relative;
}
.conference-input-date {
  display: flex;
  align-items: center;
  padding-left: 10px;
}
select {
  padding-left: 10px;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: none;
  border: none;
  border-radius: 2px;
  position: relative;
  height: 35px;
  border: 1px solid rgba(208, 208, 208, 1);
  border-radius: 1px;
  z-index: 1;
  color: rgba(164, 164, 164, 1);
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
}
.conference-duration .angle-down-icon {
  top: 35px;
  left: 74%;
  position: absolute;
  color: rgba(164, 164, 164, 1);
  width: 16px;
  height: 16px;
}
.time-zone {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 11px;
}
.time-zone select {
  cursor: pointer;
  padding-top: 3px;
  border: none;
  height: 17px;
  width: 104px;
  color: rgba(164, 164, 164, 1);
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
}
.time-zone span {
  margin-right: 17px;
}
.time-zone .angle-down-icon {
  top: 3px;
  left: 162px;
  position: absolute;
  color: rgba(164, 164, 164, 1);
  width: 16px;
  height: 16px;
}
.actions-button {
  margin-bottom: 18px;
  align-self: center;
}
.actions-button button {
  padding-top: 5px;
  height: 36px;
  width: 123px;
  border-radius: 19.5px;
  background-color: #2e7eed;
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 10px;
  font-weight: bold;
  line-height: 12px;
  text-align: center;
  text-transform: uppercase;
}
</style>
