<template>
  <h1>
    {{ category.name }}
  </h1>
  <ForumList :title="category.name" :forums="getForumsCategory(category)" />
</template>

<script setup>
import ForumList from "@/components/ForumList.vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  id: {
    type: String,
  },
});

const category = computed(() => {
  return store.state.categories.items.find(
    (categorie) => categorie.id === props.id
  );
});

const getForumsCategory = computed(() => {
  return (category) =>
    store.state.forums.items.filter(
      (forum) => forum.categoryId === category.id
    );
});
</script>

<style lang="scss" scoped></style>
