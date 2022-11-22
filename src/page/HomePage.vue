<template>
  <div>
    <h1 class="push-top">Welcome to the forum</h1>
  </div>
  <CategoryList :categories="categories" />
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import CategoryList from "../components/CategoryList.vue";
const store = useStore();

const categories = computed(() => store.state.categories.items);
</script>

<style lang="scss" scoped></style>
