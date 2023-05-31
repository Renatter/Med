import {
    createRouter,
    createWebHistory
} from 'vue-router';
import News from "./views/News.vue"
import Home from "./views/Home.vue"
import Reg from "./components/Reg.vue"
import Catlog from "./views/Catlog.vue"
import Basket from "./views/Basket.vue"
import AdminCard from "./views/AdminCard.vue"
import Login from "./components/Login.vue"
import ProductCard from "./components/ProductCard.vue"
import Offer from "./views/Offer.vue"
import Delivery from "./views/Delivery.vue"
import Contacts from "./views/Contacts.vue"
import Questions from "./views/Questions.vue"
import AddOtzv from "./components/AddOtzv.vue"
import AllNews from "./components/AllNews.vue"
import InfoNews from './components/InfoNews.vue'
const router = createRouter({

    history: createWebHistory(),
    routes: [{
            path: '/AddOtzv',
            name: 'AddOtzv',
            component: AddOtzv,

        },
        {
            path: '/News',
            name: 'News',
            component: News,

        },
        {
            path: '/Contacts',
            name: 'Contacts',
            component: Contacts,

        },
        {
            path: '/AllNews',
            name: 'AllNews',
            component: AllNews,

        },
        {
            path: '/',
            name: 'Home',
            component: Home,

        },
        {
            path: '/Reg',
            name: 'Reg',
            component: Reg,

        },
        {
            path: '/Questions',
            name: 'Questions',
            component: Questions,

        },
        {
            path: '/Catlog/:id',
            name: 'Catlog',
            component: Catlog,
            props: true

        },
        {
            path: '/InfoNews/:id',
            name: 'InfoNews',
            component: InfoNews,
            props: true

        },
        {
            path: '/Login',
            name: 'Login',
            component: Login,
        },

        {
            path: '/Offer',
            name: 'Offer',
            component: Offer,
        },
        {
            path: '/Basket',
            name: 'Basket',
            component: Basket,
        },
        {
            path: '/Delivery',
            name: 'Delivery',
            component: Delivery,
        },
        {
            path: '/AdminCard',
            name: 'AdminCard',
            component: AdminCard,
        },
        {
            path: '/ProductCard/:id/:id2',
            name: 'ProductCard',
            component: ProductCard,
            props: true

        },

    ]
})
export default router;