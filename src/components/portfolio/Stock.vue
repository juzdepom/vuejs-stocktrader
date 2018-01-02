<template>
  <div class="col-sm-6">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity">
        </div>
        <div class="pull-right">
          <!-- quantity % 1 makes sure quantity isn't decimal -->
          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="quantity <= 0 || !(quantity % 1 === 0) || quantity > stock.quantity"
            >
            Sell
          </button>
        </div>


      </div>
    </div>
  </div>

</template>

<script>
export default {
  //comes from Portfolio.vue which gets stock from stockPortfolio in the vuex store
  props: ['stock'],
  data(){
    return {
      quantity: 0,
    }
  },
  methods: {
    sellStock(){
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.$store.dispatch('sellStock', order);
      this.quantity = 0;
    }
  }
}
</script>

<style>

</style>
