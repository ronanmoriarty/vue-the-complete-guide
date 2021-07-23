<template>
  <section class="container">
    <user-data
      :first-name="firstName"
      :last-name="lastName"
      class="value for implicit prop available in context.attrs"
    ></user-data>
    <button @click="changeAge">Change age</button>
    <div>
      <input type="text" placeholder="First name" v-model="firstName" />
      <input type="text" placeholder="Last name" ref="lastNameInput" />
      <button @click="setLastName">Set Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from "vue";
import UserData from "./components/UserData.vue";

export default {
  components: {
    UserData,
  },
  setup() {
    const age = ref(21);
    const firstName = ref("");
    const lastName = ref("");
    const lastNameInput = ref(null);
    const changeAge = () => {
      age.value += 10;
    };

    provide('userAge', age);

    const username = computed(function() {
      return `${firstName.value} ${lastName.value}`;
    });

    const setLastName = function() {
      lastName.value = lastNameInput.value.value;
    };

    watch([username, age], function(newValues, oldValues) {
      console.log("Old name: " + oldValues[0]);
      console.log("New name: " + newValues[0]);
      console.log("Old age: " + oldValues[1]);
      console.log("New age: " + newValues[1]);
    });

    return {
      username,
      age,
      firstName,
      lastName,
      lastNameInput,
      setLastName,
      changeAge,
    };
  }
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
