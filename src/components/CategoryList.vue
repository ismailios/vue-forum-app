<template>
  <ForumList
    v-for="category in categories"
    :key="category.id"
    :forums="getForumsCategory(category)"
    :title="category.name"
    :category-id="category.id"
  />
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import ForumList from "../components/ForumList.vue";

const store = useStore();

defineProps({
  categories: [],
});

const getForumsCategory = computed(() => {
  return (category) =>
    store.state.forums.items.filter(
      (forum) => forum.categoryId === category.id
    );
});
</script>

<style lang="scss" scoped></style>
