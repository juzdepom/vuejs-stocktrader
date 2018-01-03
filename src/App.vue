<template>
    <div class="container">
      <br>
      <app-header></app-header>

      <div class="row">
        <div class="col-xs-12">
          <transition name="slide" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>

    </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    components: {
      appHeader: Header,
    },
    created(){
      this.$store.dispatch('initStocks');
    }
  }
</script>

<style>
  .slide-enter {
    opacity: 0;

  }
  .slide-enter-active {
    animation: slide-in 0.3s ease-out forwards;
    transition: opacity 0.3s;
  }
  .slide-leave {
  }
  .slide-leave-active {
    animation: slide-out 0.3s ease-out forwards;
    transition: opacity 0.3s;
    opacity: 0;
  }
  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }

</style>
