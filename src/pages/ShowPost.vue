<template>
    <div>
        <h2>Show Post</h2>
        <div v-for="post in posts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            posts: [],
            id: null
        }
    },
    watch:{
      $route(){
        console.log('watch gọi');
        this.getDetail();
      }
    },
    created() {
        this.getDetail();
    },
    methods:{
        getDetail(){
            this.id = this.$route.params.id;
         API.getDetail(id)
            .then(res => {
                 console.log(res.data);
                 this.posts.push(res.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
}
</script>
