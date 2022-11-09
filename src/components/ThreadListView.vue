<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">threads</h2>
      <div v-for="thread in threads" :key="thread.id" class="thread">
        <div>
          <p>
            <a :href="`/thread/${thread.id}`"> {{ thread.title }}</a>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="">{{ userById(thread.userId).name }}</a
            >, {{ thread.publishedAt }}
          </p>
        </div>
        <div class="activity">
          <p class="replies-count">{{ thread.posts.length }} replies</p>
          <img
            :src="userById(thread.userId).avatar"
            alt="user avatar"
            class="avatar-medium"
          />
          <div>
            <p class="text-xsmall">
              By <a href="#">{{ userById(thread.userId).name }}</a>
            </p>
            <div class="text-faded text-xsmall">{{ thread.publishedAt }}</div>
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
    threads: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      //   threads: dataSource.threads,
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
