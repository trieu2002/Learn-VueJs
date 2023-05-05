import { createApp } from 'vue'
import App from "./pages/App.vue";
import Home from './pages/Home.vue';
import Posts from './pages/Posts.vue';
import CreatePost from './pages/CreatePost.vue';
import ShowPost from './pages/ShowPost.vue';
import UpdatePost from './pages/UpdatePost.vue';
import { createRouter, createWebHistory } from 'vue-router';
/*
 thêm mặc địn router  và like headers


*/
const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/posts",
        component: Posts,

    },
    {
        path: "/posts/:id",
        component: ShowPost,
        props: true
    },
    {
        path: "/postUpdate/:id",
        component: UpdatePost,
        props: true
    },
    {
        path: "/createpost",
        component: CreatePost
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active"
})
const app = createApp(App);

app.use(router);


app.mount("#app");




