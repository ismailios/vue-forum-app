<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <div class="post-list">
      <div v-for="postId in thread.posts" :key="postId" class="post">
        <div class="user-info">
          <a href="#" class="user-name">{{
            userById(postbyId(postId).userId).name
          }}</a>
          <a href="#">
            <img
              :src="userById(postbyId(postId).userId).avatar"
              class="avatar-large"
              alt="user avatar"
            />
            <p class="desktop-only text-small">100 posts</p>
          </a>
        </div>
        <div class="post-content">
          <div>
            <p>
              {{ postbyId(postId).text }}
            </p>
          </div>
          <div class="post-date text-faded">
            {{ postbyId(postId).publishedAt }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dataSource from "../data.json";

export default {
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
      users: dataSource.users,
    };
  },
  computed: {
    thread() {
      //Using Props (must add props:true in route)
      return this.threads.find((thread) => thread.id === this.id);
      //Using $route.params.id
      //   return this.threads.find((thread) => thread.id === this.$route.params.id);
    },
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
