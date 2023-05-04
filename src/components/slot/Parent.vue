<!-- Component cha -->
<template>
  <div>
    <h1>Component Cha</h1>
    <component-con>
      <template v-slot:default="{ message, handleClick }">
        <p>{{ message }}</p>
        <button @click="handleClick">Click me</button>
      </template>
    </component-con>
  </div>
</template>

<script>
import ComponentCon from './Child.vue';

export default {
  name: 'ComponentCha',
  components: {
    ComponentCon
  },
  methods: {
    handleClick() {
      alert('Button clicked');
    }
  }
};
</script>