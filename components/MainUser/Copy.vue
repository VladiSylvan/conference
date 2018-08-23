<template>
  <div class="container">
    <div class="username-body">
      <div>
        <icon class="icon-display"
              name="tv" />
      </div>
      <span>didaconference/username</span>
    </div>
    <div class="number-body">
      <div>
        <icon class="icon-phone"
              name="phone" />
      </div>
      <span>781-448-4037</span>
    </div>
    <div class="pin-body">
      <div>
        <svg class="icon-pin"
             fill="currentColor"
             xmlns="http://www.w3.org/2000/svg"
             width="16"
             height="16"
             viewBox="1 1 24 24">
          <path d="M12 19c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </div>
      <span>PIN 07328</span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'main-user-copy'
}
</script>

<style scoped>
@media only screen and (min-width: 1130px) {
  .container {
    width: 583px !important;
    flex-direction: row !important;
    display: flex;
    height: 93px !important;
  }
  .username-body {
    margin-top: 0px !important;
    margin-left: 30px !important;
    width: 243px !important;
  }
  .number-body {
    display: flex;
    margin-top: 0px !important;
    width: 177px !important;
  }
  .pin-body {
    display: flex;
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: #ffffff;
}
.container span {
  color: #adadad;
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  text-align: center;
}
.username-body {
  display: flex;
  margin-top: 26px;
  /* margin-left: 30px; */
  /* width: 243px; */
}
.number-body {
  display: flex;
  margin-top: 26px;
  /* width: 177px; */
}
.pin-body {
  display: flex;
  margin-top: 26px;
  margin-bottom: 25px;
}
.icon-display,
.icon-phone,
.icon-pin {
  color: #2e7eed;
}
.icon-display {
  margin-right: 17px;
}
.icon-phone {
  margin-right: 10px;
}
.icon-pin {
  margin-right: 13px;
}
</style>
