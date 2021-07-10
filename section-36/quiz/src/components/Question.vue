<template>
  <div class="panel">
    <div class="panel-header">
      <h2>{{ question }}</h2>
    </div>
    <div class="panel-body">
      <button
        class="btn btn-primary"
        v-for="answer in answers"
        :key="answer.value"
        @click="answered(answer.isCorrect)"
      >
        {{ answer.value }}
      </button>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                question: 'some question',
                answers: [
                    { value: 1, isCorrect: true },
                    { value: 2, isCorrect: false },
                    { value: 3, isCorrect: false },
                    { value: 4, isCorrect: false },
                ]
            };
        },
        methods: {
            answered(isCorrect) {
                if(isCorrect) {
                    this.$emit('answeredCorrectly');
                } else {
                    alert('Sorry! Wrong answer! Try again.');
                }
            }
        }
    }
</script>

<style scoped>
    .panel {
        margin: 20px;
    }

.btn {
        margin: 10px;
    }
</style>