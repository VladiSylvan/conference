<template>
  <div class="input-block">
    <input type="text"
           placeholder="Enter Your Email Address">
    <span></span>
    <button>BUTTON</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media only screen and (max-width: 766px) {
  input {
    width: 70%;
  }
  button {
    width: 30%;
  }
}
.input-block {
  display: flex;
  justify-content: space-between;
  max-width: 420px;
}

input {
  height: 41px;
  width: 320px;
  max-width: 320px;
  padding-left: 16px;
  color: #989898;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
}
button {
  width: 100px;
  max-width: 100px;
  border-radius: 0 2px 2px 0;
  background-color: #2e7eed;
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 10px;
  font-weight: bold;
  line-height: 12px;
  text-align: center;
}
input[type="text"]:focus {
  background: #ffffff;
  outline: none;
  /* box-shadow: 0 0 5px rgba(81, 203, 238, 1); */
  /* padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px; */
  color: #343434 !important;
  margin: -1px;
  border: 1px solid #2e7eed !important;
}
</style>
