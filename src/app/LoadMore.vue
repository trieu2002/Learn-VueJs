<template>
    <div>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
      <button @click="loadMore" v-if="hasMoreItems && !isLoading">Load More</button>
      <div v-if="isLoading">Loading...</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        items: [], // Danh sách các mục
        page: 1, // Trang hiện tại
        perPage: 10, // Số mục trên mỗi trang
        hasMoreItems: true, // Có còn mục để tải
        isLoading: false // Đang tải dữ liệu
      };
    },
    methods: {
      async loadMore() {
        try {
          this.isLoading = true;
  
          // Gọi API để lấy dữ liệu mới
          const response = await axios.get(`https://api.example.com/items?page=${this.page}&perPage=${this.perPage}`);
          const newItems = response.data;
  
          // Kiểm tra xem còn mục để tải hay không
          this.hasMoreItems = newItems.length === this.perPage;
  
          // Cập nhật danh sách các mục
          this.items = [...this.items, ...newItems];
  
          // Tăng số trang
          this.page++;
        } catch (error) {
          console.error('API error:', error);
        } finally {
          this.isLoading = false;
        }
      }
    }
  };
  </script>
  