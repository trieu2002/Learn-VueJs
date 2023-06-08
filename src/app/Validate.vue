<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="fullName">Full Name:</label>
        <input type="text" id="fullName" v-model="formData.fullName">
        <span v-if="errors.fullName" class="error">{{ errors.fullName }}</span>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email">
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input type="text" id="phone" v-model="formData.phone">
        <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
      </div>
      <div>
        <label for="address">Address:</label>
        <input type="text" id="address" v-model="formData.address">
        <span v-if="errors.address" class="error">{{ errors.address }}</span>
      </div>
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          fullName: '',
          email: '',
          phone: '',
          address: ''
        },
        errors: {}
      };
    },
    created(){
      if (Object.keys(this.errors).length === 0) {
          // Gửi dữ liệu thông qua API
          this.sendDataToAPI();
        }
    },
    methods: {
      submitForm() {
        // Xử lý validation
        this.errors = {};
  
        // Regex cho họ tên: chỉ chấp nhận chữ cái và khoảng trắng
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!this.formData.fullName) {
          this.errors.fullName = 'Please enter your full name.';
        } else if (!nameRegex.test(this.formData.fullName)) {
          this.errors.fullName = 'Please enter a valid full name.';
        }
  
        // Regex cho địa chỉ email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!this.formData.email) {
          this.errors.email = 'Please enter your email.';
        } else if (!emailRegex.test(this.formData.email)) {
          this.errors.email = 'Please enter a valid email address.';
        }
  
        // Regex cho số điện thoại: dạng 10 chữ số và bắt đầu bằng 0
        const phoneRegex = /^0\d{9}$/;
        if (!this.formData.phone) {
          this.errors.phone = 'Please enter your phone number.';
        } else if (!phoneRegex.test(this.formData.phone)) {
          this.errors.phone = 'Please enter a valid phone number.';
        }
  
        // Regex cho địa chỉ: chỉ chấp nhận chữ cái, số và khoảng trắng
        const addressRegex = /^[A-Za-z0-9\s]+$/;
        if (!this.formData.address) {
          this.errors.address = 'Please enter your address.';
        } else if (!addressRegex.test(this.formData.address)) {
          this.errors.address = 'Please enter a valid address.';
        }
  
        // Kiểm tra xem có lỗi không
       
      },
      sendDataToAPI() {
      // Gửi dữ liệu đăng ký thông qua API (giả sử sử dụng axios)
      axios
        .post('/api/register', this.formData)
        .then(response => {
          // Xử lý phản hồi thành công từ API
          console.log(response.data);
        })
        .catch(error => {
          // Xử lý lỗi từ API
          console.error(error);
        });
    }
  }
}
</script>
