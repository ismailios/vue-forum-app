<template>
  <div class="col-large push-top" v-if="thread">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <post-editor @save="addPost" />
  </div>

  <div v-else class="col-full text-center">no thread found</div>
</template>

<script setup>
import PostList from "../components/PostList.vue";
import PostEditor from "@/components/PostEditor.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

const store = useStore();

const props = defineProps({
  id: {
    type: String,
  },
});

const thread = computed(() => {
  return store.state.threads.items.find((thread) => thread.id === props.id);
});
const threadPosts = computed(() => {
  return store.state.posts.items.filter((post) => post.threadId === props.id);
});

const addPost = ({ post }) => {
  post.threadId = props.id;
  store.dispatch("posts/createPost", post);
};
</script>

<style lang="scss" scoped></style>
