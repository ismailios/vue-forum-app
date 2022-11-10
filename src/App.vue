<template>
  <nav-bar />
  <div class="contain">
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style>
@import url("./assets/style.css");
</style>
