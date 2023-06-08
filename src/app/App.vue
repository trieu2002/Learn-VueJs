<template>
    <div>
      <div>Checked names: {{ checkedNames }}</div>
  
      <input type="checkbox" id="all" v-model="selectAll" @change="toggleSelectAll" />
      <label for="all">All</label>
  
      <input type="checkbox" v-for="name in names" :key="name" :id="name" :value="name" v-model="checkedNames" @change="callApi(name)" />
      <label v-for="name in names" :for="name">{{ name }}</label>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        names: ['Jack', 'John', 'Mike'], // Danh sách tên
        checkedNames: [], // Mảng chứa các tên đã chọn
        selectAll: false // Trạng thái của checkbox "All" khai báo trạng thái
      };
    },
    watch: {
      selectAll(value) {
        // Nếu checkbox "All" được chọn, chọn tất cả các tên
        if (value) {
          this.checkedNames = [...this.names];
        } else {
          this.checkedNames = [];
        }
      },
      checkedNames(newNames) {
        // Kiểm tra nếu tất cả các tên đã được chọn, chọn checkbox "All" check if all select 
        if (newNames.length === this.names.length) {
          this.selectAll = true; 
        } else {
          this.selectAll = false;
        }
  
        // Gọi API cho các tên đã chọn call api when user click checkbox name
        newNames.forEach((name) => {
          this.callApi(name);
        });
      }
    },
    methods: {
      async callApi(name) {
        try {
          const response = await axios.get(`https://api.example.com/users?name=${name}`);
          console.log(`API response for ${name}:`, response.data);
        } catch (error) {
          console.error(`API error for ${name}:`, error);
        }
      },
      toggleSelectAll() {
        
        // event checkbox all when status change
        if (this.selectAll) {
          this.checkedNames = this.names.slice();
        } else {
          this.checkedNames = [];
        }
      }
    }/
  };
  </script>
  