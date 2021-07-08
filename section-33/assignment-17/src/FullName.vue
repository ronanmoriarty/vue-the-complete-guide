<template>
  <div>
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        class="form-control"
        v-model="firstName"
        @input="nameChanged"
      />
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        class="form-control"
        v-model="lastName"
        @input="nameChanged"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          firstName: '',
          lastName: ''
      }
  },
  methods: {
      nameChanged() {
          const fullName = `${this.firstName} ${this.lastName}`;
          this.$emit('input', fullName);
      }
  },
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  mounted() {
      const words = this.value.split(' ');
      if(words.length > 0) {
          this.firstName = words[0];
      }
      if(words.length > 1) {
          this.lastName = words[1];
      }
  }
};
</script>
