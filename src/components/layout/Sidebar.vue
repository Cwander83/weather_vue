<template>
  <div class="sidebar">
    <h3>sidebar</h3>
    <Form />
  </div>
</template>

<script>
import Form from "../Form";

export default {
  name: "Sidebar",
  components: {
    Form
  },

  methods: {
   
  }
};
</script>

<style scoped>
.sidebar {
  width: fit-content;
  height: 400px;
  border: 1px solid black;
  float: left;
}
</style>