<template>
    <div>
      <div>
        <label for="">Tên :</label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label for="">Tuổi :</label>
        <input type="text" v-model="age" />
      </div>
      <div>
        <label for="">Số điện thoại :</label>
        <input type="text" v-model="phone" />
      </div>
      <div>
        <label for="">Địa chỉ :</label>
        <input type="text" v-model="address" />
      </div>
      <div>
        <button @click="onClickAdd()">Thêm sinh viên</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "",
        age: "",
        phone: "",
        address: "",
      };
    },
    props: ["list"],
    methods: {
      onClickAdd() {
        const newStudent = {
          id: this.list.length + 1,
          name: this.name,
          age: this.age,
          phone: this.phone,
          address: this.address,
        }
        this.list.push(newStudent);
        // reset input fields
        this.name = "";
        this.age = "";
        this.phone = "";
        this.address = "";
        
      },
      
    },
  };
  </script>
  