<template>
    <div>
        <Nav></Nav>
    </div>
    <div>
       <router-view></router-view>
    </div>
</template>
<script>
import Nav from './Nav.vue';
export default {
    name:"App",
    components:{
        Nav
    }
}
</script>