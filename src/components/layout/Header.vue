<template>
  <header>
    <div class="header-container">
      <router-link v-show="!homePage" class="menu-button" to="/">
        Go Back
      </router-link>
      <h1><span>VUE</span>Weather</h1>
      <h2 class="sub-title">A Weather App built in Vue.js</h2>
      <Form />
    </div>
  </header>
</template>



<script>
import Form from "../Form";

export default {
  name: "Header",
  components: {
    Form,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
  computed: {
    homePage() {
      if (this.$route.path === "/") return true;
      else return false;
    },
  },
};
</script>



<style scoped>
header {
  background-image: url("../../assets/images/header.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 40%;

  z-index: 1;
}

.header-container {
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.75);
}

.header-container .menu-button {
  position: absolute;
  top: 60px;
  right: 60px;
  color: antiquewhite;
  background: transparent;
  outline: none;
  border: none;
  text-transform: uppercase;
  font-size: 20px;
  cursor: pointer;
}
.header-container h1 {
  font-size: 50px;
  width: 100%;
  margin: 4% auto 0 auto;

  text-align: center;
  text-transform: uppercase;
  letter-spacing: -1px;
  font-weight: 300;
}
.sub-title {
  margin: 0 auto;
  width: fit-content;
  padding: 10px 0 0 0;
  color: #90a4ae;
}

.header-container h1 span {
  font-weight: 300;
  font-size: 50px;
  color: #90a4ae;
}
</style>