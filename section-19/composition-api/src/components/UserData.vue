<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

export default {
  props: ["firstName", "lastName"],
  setup(props, context) {
    const userName = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });

    const age = inject("userAge");

    console.log("context", context);
    // context.emit('some-event', 'some-data'); // i.e. same syntax as options api just replacing this with context.
    onBeforeMount(() => {
        console.log('Before mount');
    });
    onMounted(() => {
        console.log('onMounted');
    });
    onBeforeUpdate(() => {
        console.log('onBeforeUpdate');
    });
    onUpdated(() => {
        console.log('onUpdated');
    });
    onBeforeUnmount(() => {
        console.log('onBeforeUnmount');
    });
    onUnmounted(() => {
        console.log('onUnmounted');
    });

    return {
      userName,
      age,
    };
  },
};
</script>
