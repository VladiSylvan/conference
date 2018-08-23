<template>
  <div class="update-profile">
    <div class="header">
      <span>Update Your Profile</span>
    </div>
    <div class="body">
      <update-profile-component class="component-one"
                                :header="local.header"
                                :performan="local.performan"
                                :annualy="local.annualy"
                                :description="local.description" />
      <update-profile-component class="component-two"
                                :header="tollFree.header"
                                :performan="tollFree.performan"
                                :annualy="tollFree.annualy"
                                :description="tollFree.description" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpdateProfile',
  components: {
    updateProfileComponent: () => import('../components/UpdateProfile/UpdateProfileComponent.vue')
  },
  data: () => ({
    local: {
      'header': 'Local Number',
      'performan': 10,
      'annualy': 8,
      'description': 'Payment is either monthly at 10 usd performan or 8 usd paid annually,for local number.'},
    tollFree: {
      'header': 'Toll Free Number',
      'performan': 20,
      'annualy': 15,
      'description': 'Payment is either monthly at 10 usd performan or 8 usd paid annually,for local number.'}
  })

}
</script>

<style scoped>
@media only screen and (min-width: 748px) and (max-width: 960px) {
  .update-profile .body {
    justify-content: space-around;
  }
  .update-profile .component-one {
    margin-right: 10px !important;
  }
}
@media only screen and (max-width: 747px) {
  .update-profile {
    width: 100%;
  }
  .update-profile .body {
    flex-direction: column;
    align-self: center;
  }
  .update-profile .component-one {
    margin-right: 0 !important;
    margin-bottom: 20px;
  }
}
.update-profile {
  display: flex;
  flex-direction: column;
}
.update-profile .header {
  margin-top: 32px;
  margin-bottom: 32px;
  color: #3d3d3d;
  font-family: "Helvetica Neue";
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  text-align: center;
}
.update-profile .body {
  display: flex;
  justify-content: center;
}
.update-profile .component-one {
  margin-right: 70px;
}
</style>
