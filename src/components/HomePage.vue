<template>
  <div v-for="thread in threads" :key="thread.id" class="col-large push-top">
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
  data() {
    return {
      threads: dataSource.threads,
      posts: dataSource.posts,
      users: dataSource.users,
    };
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
