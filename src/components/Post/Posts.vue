<template>
  <div>
     <h2>Posts Data</h2>
     <div>
      <select-component @change="onSelect"></select-component>
     </div>
     <single-post
     
     v-for="post in posts" 
     :key="post.title" 
     :post="post" 
     :isActive="1">
     class="hai"
     id="post-id"
     </single-post>
  </div>
</template>
<script>
import SinglePost from './SinglePost.vue';
import SelectComponent from './SelectComponent.vue';
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
      SinglePost,
      SelectComponent
    },
    methods:{
      onSelect(event){
         console.log(event.target.value);
      }
    }

   
 };
</script>

