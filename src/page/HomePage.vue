<template>
  <h1 class="push-top">Welcome to the forum</h1>
  <CategoryList :categories="categories" />
</template>

<script>
import CategoryList from "../components/CategoryList.vue";
import { mapState } from "vuex";

export default {
  components: { CategoryList },

  computed: {
    ...mapState(["categories"]),
  },
};
</script>

<style lang="scss" scoped></style>
