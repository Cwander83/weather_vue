<template>
  <header>
    <div id="nav" v-if="showMenu">
      <i @click="toggleMenu" class="fas fa-times"></i>
      <h2>Menu</h2>
      <router-link to="/">
        <p @click="toggleMenu">Top 10 us cities</p>
      </router-link>

      <router-link to="/City">
        <p @click="toggleMenu">city weather</p>
      </router-link>
    </div>
    <div class="header-container" v-else>
      <button class="menu-button" @click="toggleMenu">
        menu
        <i class="fas fa-bars"></i>
      </button>

      <h1>
        <span>VUE</span>Weather
      </h1>
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
    Form
  },
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
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
  width: fit-content;
  padding: 2px 4px;
  margin: 3% 4% 0 auto;
  float: right;
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
#nav {
  text-align: center;
  background: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  margin: auto;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#nav i {
  color: #90a4ae;
  font-size: 26px;
  margin: 5px auto;
  cursor: pointer;
}

#nav h2 {
  text-transform: uppercase;
  font-size: 28px;
  margin: 0 auto 30px auto;
}

#nav a,
a:visited {
  text-transform: uppercase;
  text-decoration: none;
  color: #90a4ae;
  margin: 5px auto;
  font-size: 22px;
}

#nav a:hover,
a:active {
  text-decoration: none;
  color: grey;
}
</style>