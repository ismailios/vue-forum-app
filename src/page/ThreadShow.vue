<template>
  <div class="col-large push-top" v-if="thread">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <div class="col-full">
      <form @submit.prevent="addPost">
        <div class="form-group">
          <textarea
            v-model="newPost"
            name=""
            id=""
            rows="10"
            class="form-input"
          ></textarea>
        </div>
        <div class="form-actions">
          <button class="btn-blue">Submit Post</button>
        </div>
      </form>
    </div>
  </div>

  <div v-else class="col-full text-center">no thread found</div>
</template>

<script>
import dataSource from "../data.json";
import PostList from "../components/PostList.vue";

export default {
  components: {
    PostList,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      threads: dataSource.threads,
      posts: dataSource.posts,
      newPost: "",
    };
  },
  computed: {
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
    addPost() {
      const postId = "dhdhd" + Math.random();
      const post = {
        id: postId,
        publishedAt: Math.floor(Date.now() / 1000),
        text: this.newPost,
        threadId: this.id,
        userId: "ALXhxjwgY9PinwNGHpfai6OWyDu2",
      };

      this.posts.push(post);
      this.thread.posts.push(postId);
      this.newPost = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
