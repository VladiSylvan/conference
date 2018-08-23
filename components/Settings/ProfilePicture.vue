<template>
  <div class="container">
    <img v-if="image === null"
         class="avatar"
         src="../../assets/ben-unsplash.jpg"
         alt="">
    <img v-else
         class="avatar"
         :src="image"
         alt="">
    <p class="header">Your Profile Picture</p>
    <p class="body">Lorem Ipsum Dolor set mit dor lorem ipsum Lorem Ipsum Dolor set mit dor</p>
    <button @click="$emit('upload-image')">upload</button>
  </div>
</template>

<script>
export default {
  props: ['image'],
  name: 'profile-picture'
}
</script>

<style scoped>
@media only screen and (max-width: 749px) {
  .container {
    width: 100% !important;
    margin-bottom: 20px;
  }
}
.container {
  height: fit-content;
  width: 299px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar {
  margin-top: 17px;
  margin-bottom: 15px;
  height: 63px;
  width: 63px;
  border-radius: 50%;
  vertical-align: middle;
  object-fit: cover;
}
.header {
  margin-bottom: 9px;
  color: #484848;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: bold;
  letter-spacing: -0.23px;
  line-height: 15px;
  text-align: center;
}
.body {
  margin-bottom: 9px;
  width: 190px;
  color: #ababab;
  font-family: "Helvetica Neue";
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  text-align: center;
}
button {
  margin-bottom: 17px;
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
