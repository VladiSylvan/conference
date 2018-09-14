<template>
  <div class="container">
    <div class="description">
      <div class="header">
        <div class="icon">
          <img src="../../assets/conference page/phone-receiver.svg"
               alt="">
        </div>
        <p>Lorem Ipsum Dolor Set Mit</p>
      </div>
      <p class="description-body">Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum vestibulum felis ac molestie. Praesent </p>
      <button>START NOW</button>
    </div>
    <img src="../../assets/homepage/img/macbook-picture.svg"
         class="image" />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media only screen and (min-width: 767px) and (max-width: 1210px) {
  .container {
    height: fit-content !important;
    width: 95% !important;
    margin-left: 5% !important;
  }
  .description {
    width: 47% !important;
    height: fit-content !important;
  }
  .description-body {
    color: #818181;
    font-family: "Helvetica Neue";
    font-size: 14px !important;
    font-weight: 300 !important;
    line-height: 24px !important;
  }
  .image {
    width: 44.29% !important;
    height: 263.6px !important;
  }
}
@media only screen and (max-width: 766px) {
  .container {
    height: fit-content !important;
    width: 90% !important;
    margin-left: 5% !important;
    flex-direction: column;
    align-items: center;
  }
  .description {
    align-items: center;
    order: 2;
    width: 100% !important;
    height: fit-content !important;
    display: flex !important;
    flex-direction: column !important;
  }
  .description-body {
    color: #818181;
    font-family: "Helvetica Neue";
    font-size: 14px !important;
    font-weight: 300 !important;
    line-height: 24px !important;
  }
  .image {
    width: 100% !important;
    height: 263.6px !important;
    margin-bottom: 70px !important;
  }
  .header {
    font-size: 20px !important;
  }
  .description-body {
    font-size: 12px !important;
    font-weight: 300 !important;
    line-height: 20px !important;
  }
  button {
    align-self: center !important;
  }
}
.container {
  width: 90%;
  height: 374px;
  margin-left: 10%;
  display: flex;
  justify-content: space-between;
}
.image {
  max-width: 556.47px;
  height: 100%;
}
.header {
  display: flex;
  align-items: center;
  color: #767676;
  font-family: "Helvetica Neue";
  font-size: 22px;
  font-weight: 500;
  line-height: 40px;
  margin-bottom: 26px;
}
.icon {
  height: 39px;
  width: 39px;
  border-radius: 50%;
  background-color: #2e7eed;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-right: 18px;
}
.description-body {
  margin-bottom: 32px;
  max-width: 442px;
  color: #818181;
  font-family: "Helvetica Neue";
  font-size: 16px;
  font-weight: 300;
  line-height: 30px;
}
button {
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
}
</style>
