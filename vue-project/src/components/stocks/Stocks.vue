<template>
  <div>
      <stock
       v-for="stock in stocks"
        :key="stock.id"
        :stock="stock"
        ></stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'
export default {
    data() {
        return {
        }
    },
    components: {
        Stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks
        }
    }
}
</script>

<style>

</style>