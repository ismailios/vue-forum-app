<template>
  <ForumList
    v-for="category in categories"
    :key="category.id"
    :forums="getForumsCategory(category)"
    :title="category.name"
    :category-id="category.id"
  />
</template>

<script setup lang="ts">
import { Category, Forum } from "@/types";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import ForumList from "../components/ForumList.vue";

const store = useStore();

defineProps<{ categories: Category[] }>();

const getForumsCategory = computed(() => {
  return (category: Category) =>
    store.state.forums.filter(
      (forum: Forum) => forum.categoryId === category.id
    );
});
</script>

<style lang="scss" scoped></style>
