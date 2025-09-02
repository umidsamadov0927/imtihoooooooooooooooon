import Home from '../pages/Home.vue'
import {createRouter, createWebHistory} from "vue-router";
import Contact from "../pages/Contact.vue";
import Faq from "../pages/Faq.vue";

let routers = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/faq',
        component: Faq
    }
]
let router = createRouter({
    history: createWebHistory(),
    routes: routers
})
export default router