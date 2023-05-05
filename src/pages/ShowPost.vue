<template>
    <div>
        <h2>Show Post</h2>
        <div v-for="(post) in posts" :key="post.id">
            <h3>{{ post.name }}</h3>
            <p>{{ post.price }}</p>
            <img :src="post.image" alt="" width="200" height="100">  <br>
            <div>
                <button @click="increQty()">+</button>
                <div>{{ qty }}</div>
                <button @click="decreQty()">-</button>
            </div>
            <button>
               <router-link to="/cart" @click.prevent="addToCart(post.id)">Add to Cart</router-link>
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
            id: null,
            qty:1,
            cart:JSON.parse(localStorage.getItem('cart')) || []
        }
    },
    watch:{
      $route(){
        console.log('watch gọi');
        this.getDetail();
      },
     
      
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
        },
        increQty(){
            this.qty++;
            
        },
        decreQty(){
            this.qty--;
            if(this.qty<1) this.qty=1;
        },
        addToCart(id) {
      const findItem = this.cart.find(item => item.id === id);
      
     if (findItem) { // neu co roi
       findItem.qty++;
    } else { // neu chua co
        const item=this.posts.find(item=> item.id==id);
        console.log(item);
        this.cart.push({...item,qty:this.qty});
       
   
      
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
}

    }
}
</script>
