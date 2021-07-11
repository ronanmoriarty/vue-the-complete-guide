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
          <component
            :is="selectedComponent"
            @nextQuestion="selectedComponent = 'app-question'"
            @answeredCorrectly="selectedComponent = 'app-answer'"
          >
          </component>
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
  components: {
    appQuestion: Question,
    appAnswer: Answer,
  },
};
</script>
