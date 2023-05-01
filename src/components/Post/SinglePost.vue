<template>
    <div>
        <div>{{post.title}}</div>
        <div>{{post.desc}}</div>
        <div>{{isActive}}</div>
    </div>
</template>
<script>
 export default{
    data(){
        return {};
        
    },
    props:{
        post:{
            type:Object,
            required:true
        },
        isActive:{
            type:Number,
            required:true
        }
    }
 }
</script>
<style>
</style>