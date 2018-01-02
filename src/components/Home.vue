<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <h1>Trade or View Your Portfolio</h1>
      <h6>You may Save &amp; Load your Data.</h6>
      <h6>Click on 'End Day' to begin a new day!</h6>
      <hr>
      <p>Your Funds: {{ funds }}</p>
    </div>
  </div>

</template>

<script>
export default {
  computed: {
    funds(){
      return '$' + this.$store.getters.funds;
    }
  }
}
</script>

<style>
</style>
