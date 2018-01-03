<template>
  <div>
    <!-- <div class="panel panel-default">
      <div class="panel-body"> -->
    <div v-show="isEmpty" class="panel panel-default" style="text-align: center">
      <h3 style="color: lightgray; margin: 20px"><i>Your Portfolio is Empty.</i></h3>
    </div>

    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Stock from './Stock.vue'

  export default {
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio'
      }),
      isEmpty(){
        return (this.stocks.length == 0)
      }
    },
    components: {
      appStock: Stock,
    }
  }
</script>

<style>
</style>
