<template>
  <div class="container">
    <icon name="phone"
          class="icon" />
    <p class="header">Free Conference Calls</p>
    <p class="description">Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media only screen and (max-width: 766px) {
  .container {
    height: fit-content !important;
    max-width: 157px !important;
  }
  .header {
    font-size: 12px !important;
    line-height: 14px !important;
  }
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 109px;
  max-width: 203px;
  margin: 0;
}
.icon {
  color: #2e7eed;
  width: 26px;
  height: 26px;
  margin-bottom: 17px;
}
.header {
  margin-bottom: 15px;
  color: #39393a;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 18px;
}
.description {
  color: #727272;
  font-family: "Helvetica Neue";
  font-size: 11px;
  line-height: 12px;
  text-align: center;
}
</style>
