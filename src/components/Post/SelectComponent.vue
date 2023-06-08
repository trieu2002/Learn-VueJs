<template>
    <div v-bind="$attrs">
        <select name="" id="" v-bind="$attrs">
            <option value="0">Select</option>
            <option value="1">1</option>
        </select>
    </div>
</template>
<script>
export default {
  inheritAttrs:false,
  mounted(){
    console.log(this.$attrs);
  },
  created(){
     console.log(this.$attrs);
  }
  

}
</script>