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

<script setup lang="ts">
import { Forum, Thread } from "@/types";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import ThreadListView from "../components/ThreadListView.vue";

const store = useStore();
const props = defineProps<{ id: String }>();

const forum = computed(() => {
  return store.state.forums.find((forum: Forum) => forum.id === props.id);
});
const threads = computed(() => {
  return store.state.threads.filter(
    (thread: Thread) => thread.forumId == props.id
  );
});
</script>

<style lang="scss" scoped></style>
