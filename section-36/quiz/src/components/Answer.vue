<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h2 class="panel-title">Answer is Correct!</h2>
    </div>
    <div class="panel-body">
      <div class="col-xs-12 text-center">
        <button class="btn btn-primary" @click="$emit('confirmed')">
          Next Question
        </button>
      </div>
    </div>
  </div>
</template>
