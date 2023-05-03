<template>
     <div>
         <button @click="emitGreet">Say Hello</button>
     </div>
  </template>
  
  <script>
  export default {
    methods:{
      emitGreet(){
        this.$emit('greet','Vues');
      }
    }
  }
   
  
  </script>
  