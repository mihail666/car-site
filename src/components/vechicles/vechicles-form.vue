<template>
  <div class="vechicles__form">
    <div class="form__container flex">
      <div class="form-search flex">
        <input type="text" placeholder="Search VIN">
        <img src="@/assets/icons/zoom.png" alt="">
      </div>
      <div class="form-select flex">
        <div class="select-data flex">
          <p>Select vechiles per page:</p>
          <div class="select-input flex">
            <p>{{ state.quatityPage }}</p>
            <img class="select-icon" :class="{ select_down: state.visible }" src="@/assets/icons/chevron_down.png" alt="" @click="state.visible = !state.visible">
          </div>
          <div class="select-content" v-if="state.visible">
            <p v-for="q in quatityPage" :key="q.id" @click="selectQuatity(q)">{{ q }}</p>
          </div>
        </div>
      </div>
      <div class="flex end">
        <button class="big-btn flex end">
          <img src="@/assets/icons/plus.png" alt="">
          <p>add vechicles</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup () {
    const quatityPage = [9, 15, 20]
    const state = reactive({
      quatityPage: 9,
      visible: false
    })
    return { state, quatityPage }
  },
  methods: {
    selectQuatity (q) {
      this.$emit('selectQuatity', q)
      this.state.quatityPage = q
      this.state.visible = !this.state.visible
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.vechicles__form {
  padding: 30px 30px 0 56px;
}

.form__container {
  gap: 0 30px;
}

.form-search {
  position: relative;
  border-radius: 8px;
  border: 1px solid $border-color;
  padding: 9px 16px;
  width: 349px;

  input {
    border: none;
    width: 255px;
    height: 24px;
    justify-content: center;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  img {
    position: relative;
    margin-left: 40px;
    cursor: pointer;
  }
}

.form-select {
  position: relative;
  overflow: hidden;

  p {
    font-weight: 400;
    line-height: 22px;
    margin-right: 1rem;
  }

  .select-input {
    justify-content: center;
    width: 85px;
    height: 42px;
    border-radius: 8px;
    border: 1px solid $border-color;
    margin-right: 1rem;
    cursor: pointer;
    transition: .2s;

    p {
      margin-right: 1.5rem;
    }
    img {
      transform: rotate(-90deg);
    }
  }

  .select-content {
    display: flex;
    justify-content: center;
    background: #ffffff;
    position: relative;
    left: 0px;
    z-index: 1;
    transition: .3s;
    p {
      padding-top: 8px;
      text-align: center;
      width: 45px;
      height: 42px;
      border-radius: 8px;
      border: 1px solid $border-color;
      cursor: pointer;
    }
  }
}
.select-input:hover img{
  transform: translateX(0.15rem) rotate(-90deg);
  }
</style>
