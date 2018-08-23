<template>
  <div @mouseover="tip = true"
       @mouseleave="tip = false"
       @click="showComponent"
       :style="{'background-color': activate || (tip && newComponent !== 'close') ? '#FFFFFF': (newComponent !== 'close'  ? 'rgba(255, 255, 255, 0.5)' : 'rgba(213, 71, 71, 1)')}"
       :class="newComponent === 'close' ? 'icon-body-close' : 'icon-body'">
    <menu-tip v-if="tip && info.header.length > 0"
              :info="info" />
    <icon :name="iconName" />

  </div>
</template>
<script>
export default {
  name: 'ConferenceCallButton',
  components: {
    MenuTip: () => import('../ConferenceCall/MenuTips.vue')
  },

  props: ['info', 'icon-name', 'current-component', 'new-component', 'modal'],
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
        this.activate === true ? this.$router.push({name: this.newComponent}) : this.$router.push({name: 'conference'})
      }
    }
  }
}
</script>
<style scoped>
</style>
