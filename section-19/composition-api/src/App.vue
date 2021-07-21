<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <p>{{ user }}</p>
  </section>
</template>

<script>
import { reactive, ref, isReactive, isRef } from 'vue';

export default {
  setup() {
    const userAge = ref(21);
    const user = reactive({
      name: 'Ronan',
      age: 21
    });

    console.log(isRef(userAge));
    console.log(isReactive(user), user.age);

    setTimeout(() => {
      user.name = 'Fiona';
      user.age = 22;
    }, 2000);

    return { user };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>