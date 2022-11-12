<template>
  <div class="col-large">
    <h1 class="push-top">Welcome to the forum</h1>
  </div>
  <CategoryList :categories="categories" />
</template>

<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import CategoryList from "../components/CategoryList.vue";
const store = useStore();

const categories = computed(() => store.state.categories);
</script>

<style lang="scss" scoped></style>
