<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    };
  },
  created() {
    // Thực hiện yêu cầu API để lấy dữ liệu
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        this.message = data.message;
      })
      .catch(error => {
        console.error(error);
      });
  },
  beforeDestroy() {
    // Hủy đăng ký sự kiện DOM trước khi component bị hủy
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Xử lý sự kiện scroll
      // ...
    }
  },
  mounted() {
    // Đăng ký sự kiện scroll sau khi component được mount vào DOM
    window.addEventListener('scroll', this.handleScroll);
  }
};
</script>
