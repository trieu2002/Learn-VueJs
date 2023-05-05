<template>
    <div>
        Home Pape
        <div>
            <button @click.prevent="onPostClick">Click to Post Page</button>
        </div>
    </div>
</template>
<script>
export default {
   methods:{
    onPostClick(){
        this.$router.push({path:"/posts"});
    }
   }
}
</script>