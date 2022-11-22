<template>
  <nav-bar />
  <div class="container">
    <router-view />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import NavBar from "./components/NavBar.vue";
const store = useStore();
store.dispatch("categories/fetchCategories");
store.dispatch("forums/fetchForums");
store.dispatch("threads/fetchThreads");
store.dispatch("users/fetchUsers");
store.dispatch("posts/fetchPosts");
</script>

<style>
@import url("./assets/style.css");
</style>
