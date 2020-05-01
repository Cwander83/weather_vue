import Vue from 'vue';
import VueRouter from 'vue-router';
import Current from '../views/Current.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Current',
		component: Current,
	},
	{
		path: '/map',
		name: 'Map',
		// route level code-splitting
		// this generates a separate chunk (Map.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "Map" */ '../views/Map.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;
