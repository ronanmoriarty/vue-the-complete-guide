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

    .fade-enter-active {
        animation: fade-in 0.5s ease-out forwards;
    }

    .fade-leave-active {
        animation: fade-out 0.5s ease-out forwards;
    }

    @keyframes fade-out {
        from {
            transform: rotateY(0deg);
            opacity: 1;
        }

        to {
            transform: rotateY(90deg);
            opacity: 0;
        }
    }

    @keyframes fade-in {
        from {
            transform: rotateY(90deg);
            opacity: 0;
        }

        to {
            transform: rotateY(0deg);
            opacity: 1;
        }
    }
</style>
