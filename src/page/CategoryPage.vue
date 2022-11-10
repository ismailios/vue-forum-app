<template>
  <h1>
    {{ category.name }}
  </h1>
  <ForumList :title="category.name" :forums="getForumsCategory(category)" />
</template>

<script>
import { mapState } from "vuex";
import ForumList from "../components/ForumList.vue";
import dataSource from "../data.json";
export default {
  components: {
    ForumList,
  },
  props: {
    id: {
      required: true,
      type: String,
    },
  },

  computed: {
    ...mapState(["categories"]),
    category() {
      return this.categories.find((categorie) => categorie.id === this.id);
    },
  },
  methods: {
    getForumsCategory(category) {
      return dataSource.forums.filter(
        (forum) => forum.categoryId === category.id
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
