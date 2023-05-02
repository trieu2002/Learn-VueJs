<template>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    inject: ['user'], // ten phải trùng với tên giá trin trong mảng
    computed: {
    user() {
      return this.userObj
    }
  }
   
  };
  </script>
  