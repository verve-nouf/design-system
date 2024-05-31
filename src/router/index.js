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
import cardsView from "@/views/CardsView.vue";
import GuidelinesView from "@/views/GuidelinesView.vue";
import CubesView from "@/views/CubesView.vue";
import DropdownsView from "@/views/DropdownsView.vue";
import Footer from "@/components/Footer.vue";
import FooterView from "@/views/FooterView.vue";
import FormView from "@/views/FormView.vue";
import GridView from "@/views/GridView.vue";
import NotificationsView from "@/views/NotificationsView.vue";
import OptionsView from "@/views/OptionsView.vue";
import PillsView from "@/views/PillsView.vue";
import BrandTypographyView from "@/views/brandTypographyView.vue";
import AppTypographyView from "@/views/appTypographyView.vue";

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
        },
        {
            path: '/cards',
            name: 'cards',
            component: cardsView
        },
        {
            path: '/guidelines',
            name: 'guidelines',
            component: GuidelinesView
        },
        {
            path: '/cubes',
            name: 'cubes',
            component: CubesView
        },
        {
            path: '/dropdowns',
            name: 'dropdowns',
            component: DropdownsView
        },
        {
            path: '/footer',
            name: 'footer',
            component: FooterView
        },
        {
            path: '/form',
            name: 'form',
            component: FormView
        },
        {
            path: '/grid',
            name: 'grid',
            component: GridView
        },
        {
            path: '/notifications',
            name: 'notifications',
            component: NotificationsView
        },
        {
            path: '/options',
            name: 'options',
            component: OptionsView
        },
        {
            path: '/pills',
            name: 'pills',
            component: PillsView
        },
        {
            path: '/brandtypo',
            name: 'brandtypo',
            component: BrandTypographyView
        },
        {
            path: '/apptypo',
            name: 'apptypo',
            component: AppTypographyView
        },


    ]
})


export default router
