<template>
  <div>
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        class="form-control"
        :value="firstName"
        @input="nameChanged($event, true)"
      />
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        class="form-control"
        :value="lastName"
        @input="nameChanged($event, false)"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
      nameChanged(event, changedFirstName) {
        let fullName = '';
        if(changedFirstName) {
          fullName = `${event.target.value} ${this.lastName}`;
        } else {
          fullName = `${this.firstName} ${event.target.value}`;
        }

        this.$emit('input', fullName);
      }
  },
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    firstName() {
      const words = this.value.split(' ');
      if(words.length > 0) {
        return words[0];
      }
    },
    lastName() {
      const words = this.value.split(' ');
      if(words.length > 1) {
        return words[1];
      }
    },
  }
};
</script>
