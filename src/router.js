import VueRouter from 'vue-router'
import MainContent from './components/MainContent.vue'
import LandingHome from './components/LandingHome.vue'

const router = new VueRouter({
    routes: [
        {
        path: '/',  
        component : LandingHome
        },
        {
        path: '/auth', 
        component: LandingHome
        },
        {
        path: '/success', 
        component : MainContent
        }
        
    ]
})

export default router;