<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <a href="#" class="btn-green btn-small">Start a new Thread</a>
    </div>
  </div>
  <div class="col-full push-top">
    <ThreadListView :threads="threads" />
  </div>
</template>

<script>
import ThreadListView from "../components/ThreadListView.vue";
import dataSource from "../data.json";

export default {
  components: { ThreadListView },
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  computed: {
    forum() {
      return dataSource.forums.find((forum) => forum.id === this.id);
    },
    threads() {
      return dataSource.threads.filter((thread) => thread.forumId == this.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
