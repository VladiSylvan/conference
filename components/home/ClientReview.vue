<template>
  <div class="container">
    <p class="header">What Our Clients Say</p>
    <div class="card-container">
      <div class="card"
           v-for="card in cards"
           :key="card.index">
        <img src="../../assets/ben-unsplash.jpg"
             class="avatar"
             alt="">
        <p class="description">In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget </p>
        <p class="name">Name Surname</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [1,2,3]
  })
}
</script>

<style scoped>
@media only screen and (max-width: 766px) {
  .container {
    padding-bottom: 0px !important;
  }
  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .header {
    margin-bottom: 55px !important;
  }
  .card {
    margin-bottom: 48px !important;
  }
}
.container {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 95px;
  height: fit-content;
  display: flex;
  flex-direction: column;
}
.header {
  margin-top: 46px;
  margin-bottom: 72px;
  color: #444444;
  font-family: "Helvetica Neue";
  font-size: 22px;
  font-weight: 300;
  line-height: 40px;
  text-align: center;
}
.card-container {
  display: flex;
  justify-content: space-around;
}
.card {
  height: 185px;
  width: 210px;
  display: flex;
  flex-direction: column;
}
.avatar {
  align-self: center;
  margin-bottom: 20px;
  height: 89px;
  width: 89px;
  border-radius: 50%;
  vertical-align: middle;
  object-fit: cover;
}

.description {
  height: 52px;
  width: 210px;
  color: #aaa8a8;
  font-family: "Helvetica Neue";
  font-size: 13px;
  font-weight: 300;
  line-height: 16px;
  margin-bottom: 8px;
}
.name {
  color: #424242;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
}
</style>
