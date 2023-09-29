<template>
  <div class="header">
    <div class="header__container">

      <div v-if="routeName === 'Vechicles'" class="flex sb">
        <div class="header__left flex">
          <h1>{{ routeName }}</h1>
          <div class="badge"> {{ quantity.length }} </div>
        </div>
        <headerBarRidth />
      </div>

      <div v-if="routeName === 'Profile'" class="flex sb">
        <div class="header__left flex">
          <h1>{{ routeName }}</h1>
        </div>
        <headerBarRidth />
      </div>

      <div v-if="routeName === 'Setting'" class="flex sb">
        <div class="header__left flex">
          <h1>{{ routeName }}</h1>
        </div>
        <headerBarRidth />
      </div>
    </div>
  </div>
</template>

<script>
import './header.scss'
import headerBarRidth from './header-bar-ridth.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
export default {
  setup () {
    const routeName = computed(() => {
      return useRoute().name
    })
    return { routeName }
  },
  components: {
    headerBarRidth
  },
  props: {
    quantity: {
      default: 0
    }
  }
}
</script>
