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
import { mapState } from "vuex";
import ThreadListView from "../components/ThreadListView.vue";

export default {
  components: { ThreadListView },
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  computed: {
    ...mapState(["forums", "threads"]),
    forum() {
      return this.forums.find((forum) => forum.id === this.id);
    },
    threads() {
      return this.$store.state.threads.filter(
        (thread) => thread.forumId == this.id
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
