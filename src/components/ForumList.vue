<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <router-link
          v-if="categoryId"
          :to="{ name: 'Category', params: { id: categoryId } }"
          >{{ title }}</router-link
        >
        <span v-else>{{ title }}</span>
      </h2>

      <div class="forum-listing" v-for="forum in forums" :key="forum.id">
        <div class="forum-details">
          <router-link :to="{ name: 'Forum', params: { id: forum.id } }">{{
            forum.name
          }}</router-link>
          <p>{{ forum.description }}</p>
        </div>
        <div class="threads-count">
          <p>
            <span class="count">
              {{ forum.threads?.length }}
              {{ forumThreads(forum) }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Forum } from "@/types";
import { computed } from "@vue/runtime-core";

defineProps<{
  forums: Forum[];
  title: string;
  categoryId?: string;
}>();

const forumThreads = computed(() => {
  return (forum: Forum) => {
    if (forum.threads?.length) {
      return forum.threads.length > 1 ? "threads" : "thread";
    } else {
      return "no threads";
    }
  };
});
</script>

<style lang="scss" scoped></style>
