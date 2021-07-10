<template>
  <component
    :is="selectedComponent"
    @nextQuestion="selectedComponent = 'app-question'"
    @answeredCorrectly="selectedComponent = 'app-answer'"
  >
  </component>
</template>

<script>
import Question from "./components/Question.vue";
import Answer from "./components/Answer.vue";

export default {
  data() {
    return {
      selectedComponent: "app-answer",
    };
  },
  components: {
    appQuestion: Question,
    appAnswer: Answer,
  },
};
</script>
