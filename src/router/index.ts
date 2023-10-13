import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import NewGameView from '../views/NewGameView.vue';
import LeagueView from '@/views/LeagueView.vue';
import PlayerView from '@/views/PlayerView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/newGame',
            name: 'newGame',
            component: NewGameView
        },
        {
            path: '/leagues/:id',
            name: 'league',
            component: LeagueView
        },
        {
            path: '/players/:id',
            name: 'player',
            component: PlayerView
        }
    ]
});

export default router;
