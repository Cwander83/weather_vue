<template>
  <div class="form">
    <form autocomplete="off" @submit.prevent="onSubmit">
      <input
        class="input"
        type="text"
        name="place"
        v-model="place"
        placeholder="City, State, Zipcode"
      />
      <button type="submit" class="btn" v-bind:disabled="place === ''">
        <i class="fas fa-search"></i>
      </button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Form",
  components: {},
  data() {
    return {
      place: "",
    };
  },

  methods: {
    ...mapMutations(["setPlace"]),

    onSubmit() {
      this.setPlace(this.place);
      this.place = "";
      // clear place after form
    },
  },
};
</script>

<style scoped>
.btn {
  padding: 5px 10px;
  background-color: black;
  border: none;
  font-size: 20px;
  color: white;
  cursor: pointer;
}

.form {
  width: 400px;
  margin: 3% auto;
  background-color: #90a4ae;
  color: black;
}

.form form {
  display: flex;
  flex-direction: row;
}
.input:active,
.input:focus {
  border: none;
  outline: none;
}
.input {
  background-color: transparent;
  width: 100%;
  border: none;
  padding: 0 0 0 15px;
}
input:focus::placeholder {
  color: transparent;
}
.input::placeholder {
  padding-left: 20px;
  color: black;
}
</style>
