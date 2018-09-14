<template>
  <div @mouseover="tip = true"
       @mouseleave="tip = false"
       @click="showComponent"
       class="icon-body">
    <menu-tip v-if="tip && info.header.length > 0"
              :info="info" />
    <img :src="icon" />
  </div>
</template>
<script>
export default {
  name: 'ConferenceCallButton',
  components: {
    MenuTip: () => import('../ConferenceCall/MenuTips.vue')
  },

  props: ['info', 'icon', 'current-component', 'new-component', 'modal'],
  data: () => ({
    tip: false,
    activate: false,
    showActionTip: false
  }),
  watch: {
    $route (val) {
      if (val.name === this.newComponent) {
        this.activate = true
      } else if (this.newComponent !== false && this.newComponent !== 'lock-conference') {
        this.activate = false
      }
    }
  },
  methods: {
    showComponent () {
      if (this.modal === true) {
        this.$emit('show-component', this.newComponent)
      } else if (this.newComponent === false) {
        this.activate = !this.activate
      } else if (this.newComponent === 'lock-conference') {
        this.activate = !this.activate
        this.$emit('show-action-tip')
      } else if (this.newComponent === 'close') {
        this.$router.push({name: 'user'})
      } else {
        this.activate = !this.activate
        this.activate ? this.$store.commit("confComponent", "videoConf") : this.$store.commit("confComponent", null)        
      }
    }
  }
}
</script>
<style scoped>
</style>
