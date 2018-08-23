<template>
  <div v-click-outside="outside"
       class="container">
    <div class="container-header">
      <span>
        <strong>Delete Participant?</strong>
      </span>
    </div>
    <div class="container-body">
      <span>Are you sure, that you want to delete Partisipant name from conference </span>
    </div>
    <div class="container-footer">
      <button @click="$emit('close-schedule')"
              class="cancel">cancel</button>
      <button @click="$emit('remove-speaker')"
              class="delete">delete</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    outside () {
      this.$emit('close-schedule')
      this.$emit('remove-user')
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 500px) {
  .container {
    width: 95% !important;
  }
  .container-body {
    width: 95% !important;
  }
}
@media only screen and (max-width: 360px) {
  .container-footer {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .container-footer button {
    width: 40% !important;
  }
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 261px auto;
  height: fit-content;
  max-width: 440px;
  min-width: 290px;
  width: 440px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);
}
.container-header {
  margin-top: 29px;
  margin-bottom: 32px;
  color: #262626;
  font-family: "Helvetica Neue";
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  text-align: center;
}
.container-body {
  margin-bottom: 34px;
  width: 346px;
  color: #7e7e7e;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
  text-align: center;
}
.container-footer {
  display: flex;
  margin-bottom: 42px;
}
.container-footer .cancel {
  margin-right: 21px;
  height: 36px;
  width: 152px;
  border-radius: 19.5px;
  background-color: #cecece;
  color: #ffffff;
  text-transform: uppercase;
  font-family: "Helvetica Neue";
  font-size: 10px;
  font-weight: bold;
  line-height: 12px;
  text-align: center;
}
.container-footer .delete {
  height: 36px;
  width: 152px;
  border-radius: 19.5px;
  background-color: #2e7eed;
  color: #ffffff;
  text-transform: uppercase;
  font-family: "Helvetica Neue";
  font-size: 10px;
  font-weight: bold;
  line-height: 12px;
  text-align: center;
}
</style>
