<template>
    <div class="panel">
        <div class="panel-header">
            <h2>Answer is Correct!</h2>
        </div>
        <div class="panel-body">
            <button class="btn btn-primary" @click="$emit('nextQuestion')">Next Question</button>
        </div>
    </div>
</template>