<template>
  <!-- <ThreadListView :threads="threads" /> -->
  <ForumList :forums="forums" />
</template>

<script>
import dataSource from "../data.json";
// import ThreadListView from "../components/ThreadListView.vue";
import ForumList from "../components/ForumList.vue";

export default {
  components: { ForumList },
  data() {
    return {
      threads: dataSource.threads,
      forums: dataSource.forums,
    };
  },
};
</script>

<style lang="scss" scoped></style>
