<template>
  <div class="search-container">
    <input type="text"
           placeholder="Search">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media only screen and (min-width: 705px) and (max-width: 1150px) {
  .search-container {
    width: 100% !important;
  }
  .search-container input {
    width: 60% !important;
  }
}
@media only screen and (max-width: 704px) {
  .search-container {
    width: 100% !important;
  }
  .search-container input {
    width: 60% !important;
  }
}
.search-container {
  height: 70px;
  width: 827px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
}
.search-container input {
  padding-left: 9px;
  margin-left: 36px;
  height: 41px;
  color: #bfbfbf;
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  border-bottom: 1px solid #f0f0f0;
  width: 331px;
}
</style>
