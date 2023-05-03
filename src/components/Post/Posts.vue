<template>
    <div>Post Data</div>
     <div v-if="!posts.length">Loading Data</div>
    <table class="table" v-if="posts.length>0">
        <thead>
            <tr>
               <th>Id</th>
               <th>Title</th>
               <th>Body</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in posts" :key="post.id">
                <td>{{post.id}}</td>
                <td>{{ post.title }}</td>
                <td>{{post.body}}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
  import axios from 'axios';
  export default{
    data(){
        return{
            posts:[]
        }
    },
    mounted(){
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res)=> {
          this.posts=res.data;
      })

    }
  }
</script>
