<template>
  <div class="col-full" v-if="threads" key="threads">
    <div class="thread-list">
      <h2 class="list-title">threads</h2>
      <div v-for="thread in threads" :key="thread.id" class="thread">
        <div>
          <p>
            <router-link
              :to="{ name: 'threadShow', params: { id: thread.id } }"
            >
              {{ thread.title }}</router-link
            >
          </p>
          <p class="text-faded text-xsmall">
            By <a href="">{{ userById(thread.userId)?.name }}</a
            >, <AppDate :time-stamp="thread.publishedAt" />
          </p>
        </div>
        <div class="activity">
          <p class="replies-count">{{ thread.posts.length }} replies</p>
          <img
            :src="userById(thread.userId)?.avatar"
            alt="user avatar"
            class="avatar-medium"
          />
          <div>
            <p class="text-xsmall">
              By <a href="#">{{ userById(thread.userId)?.name }}</a>
            </p>
            <div class="text-faded text-xsmall">
              <AppDate :time-stamp="thread.publishedAt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

const { state } = useStore();
defineProps({
  threads: {
    type: Array,
    required: true,
  },
});

const userById = computed(() => {
  return (userId) => {
    return state.users.items.find((user) => user.id === userId);
  };
});
</script>

<style lang="scss" scoped></style>
