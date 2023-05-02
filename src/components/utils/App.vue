<template>
    <div>
      <MyComponent title="Hello">
        <p>World!</p>
      </MyComponent>
    </div>
  </template>
  
  <script>
  import MyComponent from './MyComponent.vue';
  
  export default {
    components: {
      MyComponent
    }
  }
  </script>
  