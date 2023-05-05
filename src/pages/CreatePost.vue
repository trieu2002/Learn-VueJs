<template>
    <div>
        Create Post
        <form action="" @submit.prevent="onAdd()">
            <div class="form-group" >
                 <label for="">Title</label>
                 <input type="text" class="form-control" v-model="title">
            </div>
            <div class="form-group">
                <label for="">Body</label>
                <input type="text" class="form-control" v-model="body">
           </div>
           <div>
              <button type="submit" class="btn btn-primary">Craete Post</button>
           </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
export default {
    data(){
        return {
            title:"",
            body:""
        }
    },
    methods:{
        onAdd() {
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, {
        title: this.title,
        body: this.body,
        userId: uuidv4()
      })
      .then(res => {
        console.log(res);
        this.$router.push({path:"/posts"});
      })
      .catch(error => {
        console.log(error);
      });
  }

    }
};
</script>