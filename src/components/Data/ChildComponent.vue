<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="email" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      errors: []
    };
  },
  methods: {
    handleSubmit() {
      this.errors = [];
      if (!this.email) {
        this.errors.push("Email is required.");
        return;
      }
      if (!this.validateEmail(this.email)) {
        this.errors.push("Invalid email format.");
        return;
      }
      this.$emit("submit", this.email);
    },
    validateEmail(email) {
      // Perform email validation here
      return true;
    }
  }
};
</script>
