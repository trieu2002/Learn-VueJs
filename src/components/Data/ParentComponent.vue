<template>
    <div>
       <Child v-model:first-name="first"
  v-model:last-name="last" />
    </div>
</template>
<script>
  import Child from './ChildComponent.vue';
  export default{
    components:{
      Child
    },
    data() {
      return {
        first:"",
        last:""
      }
    },
  }
</script>