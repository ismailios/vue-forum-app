<template>
  <div class="container">
    <div class="flex-grid" v-if="user">
      <div class="push-top">
        <UserProfileCard v-if="!edit" :user="user" />
        <user-profile-editor :user="user" v-else />
        <p class="text-xsmall text-faded text-center">member since june ...</p>
        <div class="text-center">
          <hr />
          <router-link
            :to="{ name: 'ProfileEdit' }"
            class="btn-green btn-small"
          >
            Edit Profile
          </router-link>
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

<script setup>
import PostList from "../components/PostList.vue";
import UserProfileCard from "@/components/UserProfileCard.vue";
import UserProfileEditor from "@/components/UserProfileEditor.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

const store = useStore();
defineProps({
  edit: { type: Boolean, default: false },
});

const user = computed(() => store.getters["auth/authUser"]);
</script>

<style lang="scss" scoped></style>
