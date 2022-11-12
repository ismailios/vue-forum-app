<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <UserProfileCard :user="user" />
        <user-profile-editor
          @closeProfileEditor="isEdit = !isEdit"
          :user="user"
          v-if="isEdit"
        />
        <p class="text-xsmall text-faded text-center">member since june ...</p>
        <div class="text-center">
          <hr />
          <button @click="isEdit = !isEdit" class="btn-green btn-small">
            Edit profile
          </button>
        </div>
        <div class="col-7 push-top">
          <div class="profile-header">
            <span class="text-lead">{{ user.name }} recent activity</span>
            <a href="#">See only threads?</a>
          </div>
          <hr />
          <post-list :posts="user.posts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PostList from "../components/PostList.vue";
import UserProfileCard from "@/components/UserProfileCard.vue";
import UserProfileEditor from "@/components/UserProfileEditor.vue";
import { ref } from "vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();
const isEdit = ref(false);

const user = computed(() => store.getters.authUser);
</script>

<style lang="scss" scoped></style>
