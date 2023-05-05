<template>
    <div>
        Create Post
        <form action="" @submit.prevent="onAdd()">
            <div class="form-group" >
                 <label for="">Name</label>
                 <input type="text" class="form-control" v-model="name">
            </div>
            <div class="form-group">
                <label for="">Image</label>
                <input type="text" class="form-control" v-model="image">
           </div>
           <div class="form-group">
            <label for="">Price</label>
            <input type="text" class="form-control" v-model="price">
       </div>
       <div class="form-group">
        <label for="">Desc</label>
        <input type="text" class="form-control" v-model="desc">
       </div>
           <div>
              <button type="submit" class="btn btn-primary">Craete Post</button>
           </div>
        </form>
    </div>
</template>
<script>
import * as API from '../api/product/product';
import { v4 as uuidv4 } from 'uuid';
export default {
    data(){
        return {
            name:"",
            image:"",
            price:"",
            desc:""
        }
    },
    methods:{
      async onAdd() {
          try {
            const {data}=await API.addProduct({
             id:uuidv4(),
             name:this.name,
             image:this.image,
             price:this.price,
             description:this.desc
          })
          
          if(data){
             alert("Add Product by successfully");
             this.$router.push("/posts")
          }
          } catch (error) {
              console.log(error);
          }
     }
 
    }
};
</script>