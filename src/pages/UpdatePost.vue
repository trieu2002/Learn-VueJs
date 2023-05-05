<template>
    <div>
      Create Post
      <form action="" @submit.prevent="updatePost()">
        <div class="form-group">
          <label for="">Name</label>
          <input type="text" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label for="">Price</label>
          <input type="text" class="form-control" v-model="price">
        </div>
        <div class="form-group">
          <label for="">Desc</label>
          <input type="text" class="form-control" v-model="desc">
        </div>
        <div class="form-group">
          <label for="">Image</label>
          <input type="file" class="form-control" @change="onChangeFile"  >
        </div>
        <div>
          <button type="submit" class="btn btn-primary">Update Post</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import * as API from "../api/product/product";
  
  export default {
    data() {
      return {
        id: "",
        name: "",
        file: "",
        price: "",
        desc: "",
      };
    },
    created() {
     this.id = this.$route.params?.id || "";
      if (this.id) {
      this.getProduct();
  }
   },
    methods: {
     async onChangeFile(){
            
     },
      async getProduct() {
        try {
          const { data } = await API.getProductSingle(this.id);
          this.name = data.name;
          this.image = data.image;
          this.price = data.price;
          this.desc = data.description;
        } catch (error) {
          console.log(error);
        }
      },
      async updatePost() {
        try {
          const { data } = await API.updateProduct({
            id:this.id,
            name: this.name,
            image: this.image,
            description: this.desc,
            price: this.price,
          });
          if (data) {
            alert("Update thành công");
            this.$router.push("/posts");
          }
        } catch (error) {
            console.log(error);
        }
      },
    
    },
  };
  </script>
  