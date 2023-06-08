<template>
    <div>
        <div>
            <label for="">Tìm kiếm</label>
            <input type="text" v-model="search">
        </div>
        <h3>Quản lý post</h3>
        <table class="table">
            <thead>
                 <tr>
                    <th width="20">Id</th>
                    <th>Name</th>
                    <th >Ảnh</th>
                    <th>Price</th>
                    <th width="500">Desciption</th>
                    <th>Actions</th>
                 </tr>
            </thead>
            <tbody>
                <tr v-for="item in post" :key="item.id">
                         <td>{{ item.id }}</td>
                         <td>{{ item.name }}</td>
                         <td>
                            <img :src="item.image" alt="" width="100" height="100">
                         </td>
                         <td>{{ item.price }}</td>
                         <td>{{ item.description }}</td>
                         <td>
                            <router-link :to="`/posts/${item.id}`" class="btn btn-danger">Show Detail</router-link>
                            <button @click.prevent="onDeletPost(item.id)" class="btn btn-warning">Delete</button>
                            <router-link :to="`/postUpdate/${item.id}`" :key="item.id" class="btn btn-primary">Update</router-link>
                         </td>
                         
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import * as API from '../api/product/product';
export default {
  name: "Post",
  data() {
    return {
      post: [],
      search:"",
      filteredPost: [] // danh sách sau khi tìm kiếm
    };
  },
  watch:{
      search(newValue){
         if(newValue.trim()==""){
            this.filteredPost=[...this.post];
         }else{
           this.filteredPost=this.post.filter(item=>item.name.includes(newValue))
         }
      },
     
  },
  created() {
    this.getProduct();
  },
  methods: {
    async getProduct() {
      try {
        const { data } = await API.getAllProduct();
        console.log(data);
        this.formatPost(data);
      } catch (error) {
        console.log(error);
      }
    },
    formatPost(data) {
        this.post=[...data];
        this.filteredPost=[...data];
        
      
     
    },
    async onDeletPost(id) {
      
      try {
        if (window.confirm("Bạn có chắc chắn muốn xóa ?")) {
          await API.removeProduct(id);
          this.getProduct();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
