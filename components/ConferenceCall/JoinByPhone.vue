<template>
  <div v-click-outside="outside"
       class="container">
    <div class="container-header">
      <span>
        <strong>Join By Phone</strong>
      </span>
    </div>
    <div class="conference-info">
      <div class="info-header">
        <span>Conference info</span>
      </div>
      <div class="info-body">
        <div class="number">
          <icon class="phone-icon"
                name="phone"
                scale="1.25" />
          <span>
            781-448-4037
          </span>
        </div>
        <div class="pin">
          <div class="pin-icon">
            <svg class="icon-pin"
                 fill="#2e7eed"
                 xmlns="http://www.w3.org/2000/svg"
                 width="16"
                 height="16"
                 viewBox="1 1 24 24">
              <path d="M12 19c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </div>
          <span>
            PIN 07328
          </span>
        </div>
      </div>
    </div>
    <div class="conference-upgrade">
      <div class="upgrade-header">
        <span>UPGRADE</span>
      </div>
      <div class="upgrade-body">
        <span>if you would like us to call you (US and Canada numbers only)</span>
      </div>
    </div>
    <div class="line"></div>
    <div class="numbers-header">
      <span>Call your country number listed below. When prompted, dial 781-448-4965, then press # key</span>
    </div>
    <div class="numbers-body">
      <div v-for="number in numbers"
           :key="number.id"
           class="item-number">
        <div class="country">
          <div>
            <flag class="country-icon"
                  :iso="number.flag" />
          </div>
          <span>{{number.country}}</span>
        </div>
        <div class="number">
          <span>32-235781</span>
        </div>
      </div>
    </div>
    <button @click="outside"
            class="join">join</button>
  </div>
</template>

<script>
export default {
  methods: {
    outside () {
      this.$emit('close-schedule')
    }
  },
  data: () => ({
    numbers: [
      {'country': 'Argentina', 'flag': 'AR'},
      {'country': 'Australia', 'flag': 'AU'},
      {'country': 'Austria', 'flag': 'AT'},
      {'country': 'Argentina', 'flag': 'AR'},
      {'country': 'Australia', 'flag': 'AU'},
      {'country': 'Austria', 'flag': 'AT'},
      {'country': 'Argentina', 'flag': 'AR'},
      {'country': 'Australia', 'flag': 'AU'},
      {'country': 'Austria', 'flag': 'AT'},
      {'country': 'Argentina', 'flag': 'AR'},
      {'country': 'Australia', 'flag': 'AU'},
      {'country': 'Austria', 'flag': 'AT'},
      {'country': 'Argentina', 'flag': 'AR'},
      {'country': 'Australia', 'flag': 'AU'},
      {'country': 'Austria', 'flag': 'AT'},
      {'country': 'Argentina', 'flag': 'AR'},
      {'country': 'Australia', 'flag': 'AU'},
      {'country': 'Austria', 'flag': 'AT'},
      {'country': 'Argentina', 'flag': 'AR'},
      {'country': 'Australia', 'flag': 'AU'},
      {'country': 'Austria', 'flag': 'AT'},
      {'country': 'Argentina', 'flag': 'AR'},
      {'country': 'Australia', 'flag': 'AU'},
      {'country': 'Austria', 'flag': 'AT'},
      {'country': 'Argentina', 'flag': 'AR'},
      {'country': 'Australia', 'flag': 'AU'},
      {'country': 'Austria', 'flag': 'AT'}
    ]
  })
}
</script>

<style scoped>
@media only screen and (max-width: 500px) {
  .container {
    width: 95% !important;
    max-height: 95% !important;
    height: fit-content !important;
  }
  .conference-info {
    width: 95% !important;
  }
  .conference-upgrade {
    width: 95% !important;
  }
  .line {
    width: 95% !important;
  }
  .numbers-header {
    width: 95% !important;
  }
  .numbers-body {
    width: 95% !important;
  }
}
@media only screen and (max-width: 360px) {
  .country {
    margin-left: 0 !important;
  }
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 112px auto;
  max-width: 440px;
  height: fit-content;
  width: 440px;
  min-width: 290px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);
}
.container-header {
  margin-top: 29px;
  margin-bottom: 28px;
  color: #262626;
  font-family: "Helvetica Neue";
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  text-align: center;
}
.conference-info {
  height: 79px;
  max-width: 319px;
  width: 319px;
  border: 1px solid #d3d3d3;
  display: flex;
  flex-direction: column;
  margin-bottom: 23px;
}
.conference-info .info-header {
  color: #262626;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
  margin-top: 11px;
  margin-left: 19px;
  margin-bottom: 18px;
}
.conference-info .info-body {
  display: flex;
  align-items: center;
}
.conference-info .info-body .number {
  display: flex;
  align-items: center;
  width: 174px;
  margin-left: 19px;
}
.conference-info .info-body .number .phone-icon {
  margin-top: -1px;
  margin-right: 10px;
  color: #2e7eed;
}
.conference-info .info-body span {
  color: #adadad;
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
}
.conference-info .info-body .pin {
  display: flex;
  align-items: center;
}
.conference-info .info-body .pin-icon {
  margin-top: 3px;
  margin-right: 10px;
  color: #2e7eed;
}
.conference-upgrade {
  width: 319px;
  max-width: 319px;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}
.conference-upgrade .upgrade-header {
  cursor: pointer;
  margin-right: 14px;
  display: flex;
  align-items: center;
  height: 19px;
  width: 80px;
  justify-content: center;
  border-radius: 1px;
  background-color: #2e7eed;
}
.conference-upgrade .upgrade-header span {
  margin-top: 2px;
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 9px;
  font-weight: bold;
  line-height: 11px;
}
.conference-upgrade .upgrade-body {
  color: #616060;
  font-family: "Helvetica Neue";
  font-size: 12px;
  line-height: 14px;
}
.line {
  box-sizing: border-box;
  width: 319px;
  max-width: 319px;
  border: 1px solid #cdcdcd;
  margin-bottom: 25px;
}
.numbers-header {
  width: 319px;
  max-width: 319px;
  color: #616060;
  font-family: "Helvetica Neue";
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 24px;
}
.numbers-body {
  width: 360px;
  max-width: 360px;
  height: 180px;
  overflow: auto;
  white-space: nowrap;
  margin-bottom: 20px;
}
.numbers-body .item-number {
  display: flex;
  align-items: center;
  height: 20px;
  margin-top: 12.5px;
  margin-bottom: 25px;
}
.country {
  width: 250px;
  margin-left: 20px;
  display: flex;
}
.country span {
  color: #252525;
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
}
.country .country-icon {
  font-size: 21px;
  margin-right: 17px;
}
.numbers-body .number {
  color: #616060;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
}
/* Let's get this party started */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  cursor: pointer;
  height: 42px;

  border-radius: 5.5px;
  background-color: #cecece;
}
::-webkit-scrollbar-thumb:window-inactive {
  background-color: #cecece;
  cursor: pointer;
}
.join {
  height: 36px;
  width: 152px;
  border-radius: 19.5px;
  background-color: #2e7eed;
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 10px;
  font-weight: bold;
  line-height: 12px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 2px;
  margin-bottom: 36px;
}
</style>
