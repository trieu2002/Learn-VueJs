<template>
    <div>
        <h2>Show Post</h2>
        <div v-for="post in posts" :key="post.id">
            <h3>{{ post.name }}</h3>
            <p>{{ post.price }}</p>
            <img :src="post.image" alt="" width="200" height="100">  <br>
            <button>
               <router-link to="/cart">Add to Cart</router-link>
             </button>
        </div>
    </div>
</template>

<script>
import * as API from '../api/product/product';
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
         API.getProductSingle(this.id)
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
