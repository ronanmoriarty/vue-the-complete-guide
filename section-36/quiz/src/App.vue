<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">The Quiz</h1>
        <hr />
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <transition name="flip" mode="out-in">
            <component
              :is="selectedComponent"
              @confirmed="selectedComponent = 'app-question'"
              @answered="onAnswer($event)"
            >
            </component>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Question from "./components/Question.vue";
import Answer from "./components/Answer.vue";

export default {
  data() {
    return {
      selectedComponent: "app-question",
    };
  },
  methods: {
    onAnswer(isCorrect) {
      if (isCorrect) {
        this.selectedComponent = "app-answer";
      } else {
        alert("Sorry! Wrong answer! Try again.");
      }
    },
  },
  components: {
    appQuestion: Question,
    appAnswer: Answer,
  },
};
</script>

<style scoped>
    .flip-enter {
    }

    .flip-enter-active {
        animation: flip-in 0.5s ease-out forwards;
    }

    .flip-leave {
    }

    .flip-leave-active {
        animation: flip-out 0.5s ease-out forwards;
    }

    @keyframes flip-out {
        from {
            transform: rotateY(0deg);
        }

        to {
            transform: rotateY(90deg);
        }
    }

    @keyframes flip-in {
        from {
            transform: rotateY(90deg);
        }

        to {
            transform: rotateY(0deg);
        }
    }
</style>