<template>
  <ThreadListView :threads="threads" />
</template>

<script>
import dataSource from "../data.json";
import ThreadListView from "../components/ThreadListView.vue";

export default {
  components: { ThreadListView },
  data() {
    return {
      threads: dataSource.threads,
      posts: dataSource.posts,
      users: dataSource.users,
    };
  },

  methods: {
    postbyId(postId) {
      return this.posts.find((p) => p.id === postId);
    },
    userById(userId) {
      return this.users.find((u) => u.id === userId);
    },
  },
};
</script>

<style lang="scss" scoped></style>
