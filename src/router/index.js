import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '../views/Landing.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Landing',
		component: Landing,
	},
	{
		path: '/city',
		name: 'City',
		// route level code-splitting
		// this generates a separate chunk (City.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "City" */ '../views/City.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;
