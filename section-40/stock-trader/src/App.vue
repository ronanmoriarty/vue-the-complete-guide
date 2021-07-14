<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-md-12">
        <transition mode="out-in" name="fade">
            <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    appHeader: Header,
  },
  created() {
      this.$store.dispatch('initialiseStocks');
  }
};
</script>

<style>
    body {
        padding: 30px;
    }

    .fade-enter {

    }

    .fade-enter-active {
        animation: fade-in 0.25s ease-out forwards;
    }

    .fade-leave {
    }

    .fade-leave-active {
        animation: fade-out 0.25s ease-out forwards;
    }

    @keyframes fade-out {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
</style>
