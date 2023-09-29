<template>
  <vechilesForm @selectQuatity="selectQuatity"/>
  <vechilesCard :arrcar="state.newArr"
  v-model="quatityCard"/>
</template>

<script>
import vechilesCard from '@/components/vechicles/vechicles-cards.vue'
import vechilesForm from '@/components/vechicles/vechicles-form.vue'
import { reactive, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const state = reactive({
      newArr: []
    })
    const store = useStore()
    const arrcar = computed(() => { return store.getters.arrcar.data }).value

    onMounted(async () => {
      await store.dispatch('GET_arrcar')
      state.newArr = arrcar.map(arrcar => ({
        ...arrcar,
        placeholder: 'https://api.caiman-app.de/img/car_placeholder.jpg',
        vehicleName: 'Mercedes-Benz C-Class',
        vin: '1400321A333419'
      }))
    })

    return { arrcar, state }
  },
  data: () => ({
    quatityCard: ''
  }),

  components: {
    vechilesCard,
    vechilesForm
  },
  methods: {
    selectQuatity (q) {
      this.quatityCard = q
    }
  }
}
</script>
