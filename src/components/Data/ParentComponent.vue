<template>
    <div>
      
      <ChildComponent></ChildComponent>
    </div>
  </template>
  
  <script>
  import ChildComponent from './ChildComponent.vue';
  
  export default {
    data() {
    return {
      user: {
        name: 'John',
        age: 30
      }
    }
  },
  provide() {
    return {
      user: this.$data
    }
  },
  computed: {
    userObj() {
      return this.$data.user
    }
  }
    
     
  };
  </script>
  