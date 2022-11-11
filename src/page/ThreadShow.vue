<template>
  <div class="col-large push-top" v-if="thread">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <post-editor @save="addPost" />
  </div>

  <div v-else class="col-full text-center">no thread found</div>
</template>

<script>
// import dataSource from "../data.json";
import PostList from "../components/PostList.vue";
import PostEditor from "@/components/PostEditor.vue";
import { mapState } from "vuex";

export default {
  components: {
    PostList,
    PostEditor,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      // threads: dataSource.threads,
      // posts: dataSource.posts,
      newPost: "",
    };
  },
  computed: {
    ...mapState(["threads", "posts"]),
    thread() {
      //Using Props (must add props:true in route)
      return this.threads.find((thread) => thread.id === this.id);
      //Using $route.params.id
      //   return this.threads.find((thread) => thread.id === this.$route.params.id);
    },
    threadPosts() {
      return this.posts.filter((p) => p.threadId === this.id);
    },
  },
  methods: {
    addPost({ post }) {
      post.threadId = this.id;
      // this.posts.push(post);
      // this.thread.posts.push(post.id);
      this.$store.dispatch("createPost", post);
    },
  },
};
</script>

<style lang="scss" scoped></style>
