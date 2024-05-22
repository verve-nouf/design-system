import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AvatarView from "@/views/AvatarView.vue";
import InputsView from "@/views/InputsView.vue";
import ButtonsView from "@/views/ButtonsView.vue";
import StartView from "@/views/StartView.vue";
import DesignView from "@/views/DesignView.vue";
import BreadCrumbsView from "@/views/breadCrumbsView.vue";
import iconsFrontOfficeView from "@/views/iconsFrontOfficeView.vue";
import iconsBackOfficeView from "@/views/iconsBackOfficeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/buttons',
            name: 'buttons',
            component: ButtonsView
        },
        {
            path: '/avatar',
            name: 'avatar',
            component: AvatarView
        },
        {
            path: '/inputs',
            name: 'inputs',
            component: InputsView
        },
        {
            path: '/started',
            name: 'started',
            component: StartView
        },
        {
            path: '/design',
            name: 'design',
            component: DesignView
        },
        {
            path: '/breadcrumbs',
            name: 'breadcrumbs',
            component: BreadCrumbsView
        },
        {
            path: '/frontoffice-icons',
            name: 'frontoffice-icons',
            component: iconsFrontOfficeView
        },
        {
            path: '/backoffice-icons',
            name: 'backoffice-icons',
            component: iconsBackOfficeView
        }
    ]
})


export default router
