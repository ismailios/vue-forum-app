<template>
  <div class="col-full push-top">
    <h1>Create new thread</h1>
    <ThreadEditor @save="save" />
  </div>
</template>

<script setup>
import ThreadEditor from "@/components/ThreadEditor.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();

const props = defineProps({
  forumId: {
    type: String,
    required: true,
  },
});

async function save(thread) {
  const threadOutput = await store.dispatch("threads/createThread", {
    forumId: props.forumId,
    title: thread.title,
    content: thread.content,
  });
  router.push({ name: "threadShow", params: { id: threadOutput.id } });
}
</script>

<style scoped></style>
