<template>
  <div class="landing">
    <Body />
  </div>
</template>

<script>
import Body from "../components/layout/Body";

export default {
  name: "Landing",
  components: {
    Body
  }
};
</script>

<style scoped>
.landing {
  width: fit-content;
  margin: 0 auto;
}
</style>
