<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id" class="post">
      <div class="user-info">
        <a href="#" class="user-name">{{ userById(post.userId).name }}</a>
        <a href="#">
          <img
            :src="userById(post.userId).avatar"
            class="avatar-large"
            alt="user avatar"
          />
          <p class="desktop-only text-small">100 posts</p>
        </a>
      </div>
      <div class="post-content">
        <div>
          <p>
            {{ post.text }}
          </p>
        </div>
        <AppDate :time-stamp="post.publishedAt" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Post, User } from "@/types";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
const store = useStore();

defineProps<{ posts: Post[] }>();

const userById = computed(() => {
  return (userId: string) => {
    return store.state.users.find((user: User) => user.id === userId);
  };
});
</script>

<style lang="scss" scoped></style>
