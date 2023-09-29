<template>
  <div>
    <div class="main__layout">
        <sideBar
          @isOpenSide="isOpenSide"
          :open="this.open"/>
        <main
          class="app__content"
          :class="{full : !open}"
        >
          <headerBar :quantity="quantityCar"/>
          <div class="app__page">
            <router-view />
          </div>
        </main>
      </div>
    </div>
</template>

<script>
import sideBar from '@/components/app/sidebar'
import headerBar from '@/components/app/header'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const quantityCar = computed(() => { return store.getters.arrcar.data })
    return { quantityCar }
  },
  data: () => ({
    open: true
  }),
  components: {
    sideBar,
    headerBar
  },
  methods: {
    isOpenSide () {
      this.open = !this.open
    }
  }
}
</script>
