<template>
  <h1>
    {{ category.name }}
  </h1>
  <ForumList :title="category.name" :forums="getForumsCategory(category)" />
</template>

<script setup lang="ts">
import ForumList from "@/components/ForumList.vue";
import { Category, Forum } from "@/types";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps<{ id: string }>();

const category = computed(() => {
  return store.state.categories.find(
    (categorie: Category) => categorie.id === props.id
  );
});

const getForumsCategory = computed(() => {
  return (category: Category) =>
    store.state.forums.filter(
      (forum: Forum) => forum.categoryId === category.id
    );
});
</script>

<style lang="scss" scoped></style>
