<template>
    <div>
      <MyComponent title="Hello">
        <p>World!</p> // slots render
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
  