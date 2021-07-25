<template>
  <div>
    <goals-list :goals="filteredGoals"></goals-list>
    <add-goal @add-goal="addGoal"></add-goal>
  </div>
</template>

<script>
import GoalsList from "./GoalsList.vue";
import AddGoal from "./AddGoal.vue";
import { ref, computed } from 'vue';

export default {
  components: {
    GoalsList,
    AddGoal,
  },
  setup() {
    const goals = ref([]);
    const filteredGoals = computed(() => {
      return goals.value.filter(goal => !goal.text.includes("Angular") && !goal.text.includes("React"));
    });
    function addGoal(text) {
      const newGoal = {
        id: new Date().toISOString(),
        text: text,
      };
      goals.value.push(newGoal);
    }

    return {
      filteredGoals,
      addGoal
    }
  }
};
</script>