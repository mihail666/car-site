<template>
  <div class="vechicles__container container flex">
    <div class="vechicles__card" v-for="c of newArr" :key="c.id">
      <img class="vechicles__i" src="@/assets/icons/dot.png" alt="">
      <img class="vechicles__img" :src="c.placeholder" alt="">
      <h1 class="vechicles__title">{{ c.vehicleName }} </h1>
      <h3 class="vechicles__subtitle">WDB {{ c.vin }}</h3>
      <div class="line"></div>
      <div class="vechicles__data">
        <div class="badge-g">
          <img src="@/assets/icons/check.png" alt="">
          {{ 30 }}/{{ 30 }}
        </div>
        <div class="date">
          {{ 3 }} days left
        </div>
      </div>
    </div>
  </div>

  <div class="f"></div>
  <div class="vechicles-pag flex sb">
    <div>
      <p> Showing {{ modelValue }} out of {{ arrcar.length }}</p>
    </div>
    <div class="pages flex">
      <div class="back" @click.prevent="beforePage()" v-if="state.pageNumber != ' 1'">
        <img src="@/assets/icons/chevron_down.png" alt="">
      </div>
      <div class="first-page flex">{{ state.pageNumber }}</div>
      <p>of</p>
      <div class="end-page flex">{{ state.lastPage }}</div>
      <div class="next" @click="nextPage()" v-if="state.lastPage > state.pageNumber">
        <img src="@/assets/icons/chevron_down.png" alt="" >
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
export default {
  setup (props) {
    const state = reactive({
      pageNumber: 1,
      lastPage: 1,
      quantityCard: ''
    })
    state.quantityCard = computed(() => {
      if (props.modelValue === '') {
        return 9
      } else {
        return props.modelValue
      }
    })
    state.lastPage = computed(() => { return Math.ceil(props.arrcar.length / state.quantityCard) })
    const pages = computed(() => { return Math.ceil(props.arrcar.length / 2) })
    const newArr = computed(() => {
      const from = (state.pageNumber - 1) * state.quantityCard
      const to = from + state.quantityCard
      return props.arrcar.slice(from, to)
    })
    function nextPage () {
      state.pageNumber = state.pageNumber + 1
    }
    function beforePage () {
      state.pageNumber = state.pageNumber - 1
    }
    return { state, pages, newArr, nextPage, beforePage }
  },
  props: {
    arrcar: {
      type: Object,
      required: true
    },
    modelValue: {
      default: 9
    }
  }
}

</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';
.line {
  border-top: 1px solid #E4E4E4;
  margin-bottom: 18px;
}
.vechicles {
  &__container {
    padding: 30px 0px 30px 30px;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: auto;
  }

  &__card {
    position: relative;
    width: 349px;
    height: max-content;
    background-color: $card-color;
    border-radius: 1rem;
    padding: 16px 24px;
    overflow: hidden;
  }

  &__i{
    position: absolute;
    right: 20px;
    cursor: pointer;
  }

  &__title,
  &__subtitle,
  &__img {
    position: relative;
  }

  &__title {
    font-size: $h2-font-size;
    margin-bottom: 12px;
  }

  &__subtitle {
    font-size: $normal-font-size;
    color: $text-color;
    font-weight: 500;
    margin-bottom: 18px;
  }

  &__img {
    width: 260px;
    height: 135px;
    margin: 20px 23px 24px 23px;
    transition: .3s;
  }

  &__data {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    gap: .1rem 1.5rem;
    justify-content: space-between;
  }
}

.vechicles-pag {
  position: relative;
  padding: 7px 30px 50px 56px;
  float: bottom;
}

.pages {
  .back {
    transform: rotate(90deg);
    cursor: pointer;
  }

  .next {
    transform: rotate(-90deg);
    cursor: pointer;
  }

  .first-page,
  .end-page {
    width: 32px;
    height: 32px;
    border-radius: 6px;
    border: 1px solid $border-color;
    justify-content: center;
    margin: 12px;
  }
}
</style>
