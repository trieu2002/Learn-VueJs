<template>
  <div>
    <ChildComponent @submit="handleSubmit" />
    <div v-if="errors.length">
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
    <div v-else>
      <p>Email submitted: {{ email }}</p>
    </div>
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      email: "",
      errors: []
    };
  },
  methods: {
    handleSubmit(email) {
      this.email = email;
    }
  }
};
</script>
