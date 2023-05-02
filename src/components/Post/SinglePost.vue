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
            required:false,
            default:1,
            validator(value){
               return value===1 || value===2;
            }
        }
    }
 }
</script>
<style>
</style>