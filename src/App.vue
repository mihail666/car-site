<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'

export default {
  components: {
    EmptyLayout,
    MainLayout
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  async mounted () {
    await this.$store.dispatch('GET_arrcar')
  }
}
</script>
