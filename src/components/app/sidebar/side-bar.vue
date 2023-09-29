<template>
  <aside :class="{ open }">
    <div class="logo">
      <h2>Demo test</h2>
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click.prevent="$emit('isOpenSide')">
        <img src="@/assets/icons/forward.png" alt="" class="icons">
      </button>
    </div>

    <div class="menu">
      <router-link to="/" class="button">
        <img src="@/assets/icons/user.png" alt="" class="icons">
        <span class="text">Profile</span>
      </router-link>
      <router-link to="/Vechicles" class="button">
        <img src="@/assets/icons/rim.png" alt="" class="icons">
        <span class="text">Vechicles</span>
      </router-link>
      <router-link to="/Setting" class="button">
        <img src="@/assets/icons/settings.png" alt="" class="icons">
        <span class="text">Setting</span>
      </router-link>
    </div>
    <img class="aside-img" src="@/assets/png/Vector.png" alt="">
  </aside>
</template>

<script>

import './side-bar.scss'
export default {
  data () {
    return {}
  },
  props: {
    open: {
      type: Boolean
    },
    methods: {}
  }
}
</script>
