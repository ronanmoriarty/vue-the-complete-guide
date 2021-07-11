<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title text-center">{{ question }}</h3>
    </div>
    <div class="panel-body">
      <div
        class="col-xs-12 col-sm-6 text-center"
        v-for="answer in answers"
        :key="answer.value"
      >
        <button class="btn btn-primary btn-lg" @click="$emit('answered', answer.isCorrect)">
          {{ answer.value }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const ADDITION = 1;
const SUBTRACTION = 2;
export default {
  data() {
    return {
      question: "some question",
      answers: [],
    };
  },
  methods: {
    generateQuestion() {
      const firstOperand = this.getRandomNumber(0, 100);
      const secondOperand = this.getRandomNumber(0, 100);
      const operator = this.getRandomOperator();
      const correctAnswer =
        operator === ADDITION
          ? firstOperand + secondOperand
          : firstOperand - secondOperand;
      this.question = `What is ${firstOperand} ${
        operator === ADDITION ? "+" : "-"
      } ${secondOperand}?`;
      this.answers = [];
      for (let index = 0; index < 4; index++) {
        const possibleAnswer = this.getRandomNumber(
          correctAnswer - 10,
          correctAnswer + 10,
          correctAnswer
        );
        this.answers.push({ value: possibleAnswer, isCorrect: false });
      }
      const correctIndex = this.getRandomNumber(0, 3);
      this.answers[correctIndex].value = correctAnswer;
      this.answers[correctIndex].isCorrect = true;
    },
    getRandomNumber(min, max, except) {
      const value = Math.round(Math.random() * (max - min) + min);
      if (value === except) {
        return this.getRandomNumber(min, max, except);
      }

      return value;
    },
    getRandomOperator() {
      return Math.random() < 0.5 ? ADDITION : SUBTRACTION;
    },
  },
  created() {
    this.generateQuestion();
  },
};
</script>

<style scoped>
.panel {
  margin: 20px;
}

.btn {
  margin: 10px;
}
</style>
