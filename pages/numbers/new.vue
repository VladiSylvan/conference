<template>
  <component :is='component'
             @select="component = $event"
             @state="state = $event"
             :state="state" />
</template>

<script>
export default {
  name: 'state',
  components: {
    FindYourState: () => import('../../components/BuyingForm/FindYourState.vue'),
    SelectPrefix: () => import('../../components/BuyingForm/SelectPrefix.vue')
  },
  data: () => ({
    name: 'find-your-state',
    component: 'FindYourState',
    state: ''
  })
}
</script>
