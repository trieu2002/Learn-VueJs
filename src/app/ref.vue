<template>
    <div>
      <h2>Accessing DOM Nodes with $refs</h2>
      <div>
        <button @click="focusInput">Focus Input</button>
        <button @click="logElement">Log Element</button>
      </div>
      <input type="text" ref="myInput">
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      focusInput() {

        // Truy cập và tập trung vào phần tử input sử dụng $refs
        this.$refs.myInput.focus();
      },
      logElement() {
        // Truy cập và ghi log thông tin phần tử input sử dụng $refs
        console.log(this.$refs.myInput.value);
      }
    }
  };
  </script>
  