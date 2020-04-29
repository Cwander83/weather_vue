<template>
  <div class="form">
    <p>Vue the current Weather here</p>
    <form @submit.prevent="getWeather">
      <input
        class="input"
        type="text"
        name="place"
        v-model="place"
        placeholder="City, State, Zipcode"
      />
      <button type="submit" class="btn">
        <i class=" fas fa-search"></i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      place: null,
    };
  },
  methods: {
    getWeather() {
      this.$emit("get-weather", this.place);
      this.place = null;
    },
  },
};
</script>

<style scoped>
.btn {
  padding: 3px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  color: black;
  cursor: pointer;
}

.form {
  width: fit-content;
  margin: 30px auto 0 auto;
}

.input {
  background-color: transparent;
  border: none;
  padding: 3px;
  border-bottom: 1px solid black;
  margin-right: 8px;

}
</style>
