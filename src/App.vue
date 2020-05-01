<template>
	<div id="app">
		<Header />
		<Sidebar />
		<router-view />
	</div>
</template>

<script>
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar'

export default {
	name: 'App',
	components: {
		Header,
		Sidebar
	}
};
</script>

<style>
/* global css settings */
* {
	margin: 0;
	padding: 0;
	font-family: 'Roboto Mono', monospace;
}
#app {
	background: rgb(135, 206, 235);
	background: linear-gradient(
		180deg,
		rgba(135, 206, 235, 1) 0%,
		rgba(135, 206, 235, 1) 14%,
		rgba(255, 253, 208, 1) 20%,
		rgba(255, 253, 208, 1) 68%
	);
	height: 100vh;
}
</style>
