<template>
  <div>
     <h2>Posts Data</h2>
     <single-posts v-for="post in posts" :key="post.title" :post="post"></single-posts>
  </div>
</template>
<script>
import SinglePost from './SinglePost.vue';
 export default{
   
    data(){
       return{
        posts:[
        {
          title:"Title 1",desc:"Mieu ta 1"

        },
        {
          title:"Title 2",desc:"Mieu ta 2"
        }
       ]      
       }
    },
    components:{
      SinglePost
    }

   
 };
</script>
<style>
</style>
