<template>
    <div>
        <form  @submit.prevent="onAddPost">
            <div class="my-2">
              <label for="">Title</label>
              <input type="text" class="form-control" v-model="post.title" />
            </div>
            <div class="my-2">
              <label for="">Body</label>
              <textarea type="text" class="form-control" v-model="post.body"/>
            </div>
            <div class="my-2">
               <button class="btn btn-primary">Add Posts</button>
            </div>
          </form>
       
    </div>
</template>
<script>
  import axios from 'axios';
   export default{
      data(){
        return {
            post:{
                title:"",
                body:""
            }
        }
      },
      methods:{
        onAddPost(){
        console.log('1');
           axios.post(`https://basic-vuejs-658e9-default-rtdb.firebaseio.com/posts.json`,this.post)
           .then((res)=> {
               console.log(res);
           }).catch(err=>{
               console.log('err',err);
           })
        }
      }
   }
</script>