<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <router-link
        :to="{ name: 'ThreadCreate', params: { forumId: forum.id } }"
      >
        <a href="#" class="btn-green btn-small">Start a new Thread</a>
      </router-link>
    </div>
  </div>
  <div class="col-full push-top">
    <ThreadListView :threads="threads" />
  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import ThreadListView from "../components/ThreadListView.vue";

const store = useStore();
const props = defineProps({
  id: {
    type: String,
  },
});

const forum = computed(() => {
  return store.state.forums.items.find((forum) => forum.id === props.id);
});
const threads = computed(() => {
  return store.state.threads.items.filter(
    (thread) => thread.forumId == props.id
  );
});
</script>

<style lang="scss" scoped></style>
