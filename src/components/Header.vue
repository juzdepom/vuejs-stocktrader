<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link class="navbar-brand" to="/">Stock Trader</router-link>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/portfolio">Portfolio</router-link>
            </li>
            <li>
              <router-link to="/stocks">Stocks</router-link>
            </li>
          </ul>
          <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
          <ul class="nav navbar-nav navbar-right">
            <!-- END DAY -->
            <li><a style="cursor: pointer" @click="endDay">End Day</a></li>
            <!-- SAVE & LOAD -->
            <li class="dropdown" :class="{open: isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">
              <a href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">
                Save &amp; Load <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a href="#" @click="saveData">Save Data</a></li>
                <li><a href="#" @click="loadData">Load Data</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  data(){
    return {
      isDropdownOpen: false,
    }
  },
  methods: {
    // ...mapActions([
    //   'randomizeStocks',
    // ]),
    endDay(){
      this.$store.dispatch('randomizeStocks')
    },
    saveData(){
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks,
      };
      //data.json is the node we want to create.
      this.$http.put('data.json', data)
    },
    loadData(){

    },
  },
  computed: {
    funds(){
      return this.$store.getters.funds;
    }
  }
}
</script>

<style>
</style>
