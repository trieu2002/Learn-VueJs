<template>
    <div>
        <h1>Todo</h1>
        <Task/>
    </div>
</template>
<script>
import Task from './Task.vue';
export default{
    name:'app',
    components:{
        Task
    }
}
</script>