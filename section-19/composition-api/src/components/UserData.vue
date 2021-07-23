<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["firstName", "lastName", "age"],
  setup(props, context) {
    const userName = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });

    console.log('context', context);
    // context.emit('some-event', 'some-data'); // i.e. same syntax as options api just replacing this with context.
    return {
      userName,
    };
  },
};
</script>
