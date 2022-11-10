<template>
  <ForumList
    v-for="category in categories"
    :key="category.id"
    :forums="getForumsCategory(category)"
    :title="category.name"
    :category-id="category.id"
  />
</template>

<script>
import ForumList from "../components/ForumList.vue";
import { mapState } from "vuex";
export default {
  components: {
    ForumList,
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState(["forums"]),
  },
  methods: {
    getForumsCategory(category) {
      return this.forums.filter((forum) => forum.categoryId === category.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
