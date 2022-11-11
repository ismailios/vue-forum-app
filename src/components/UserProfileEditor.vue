<template>
  <div class="profile-card">
    <form @submit.prevent="save">
      <p class="text-center">
        <img
          :src="user.avatar"
          :alt="`${user.name} profile picture`"
          class="avatar-xlarge img-update"
        />
      </p>
      <div class="form-group">
        <input
          type="text"
          v-model="activeUser.username"
          placeholder="userName"
          class="form-input text-lead text-bold"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="activeUser.name"
          placeholder="full name"
          class="form-input text-lead"
        />
      </div>
      <div class="form-group">
        <label for="user_bio" class="form-label">Bio</label>
        <textarea
          v-model="activeUser.bio"
          placeholder="write a few words about yourself."
          id="user_bio"
          cols="30"
          rows="10"
          class="form-input"
        ></textarea>
      </div>
      <div class="stats">
        <span>{{ activeUser.postsCount }} posts</span>
        <span>{{ activeUser.threadsCount }} threads</span>
      </div>
      <hr />
      <div class="form-group">
        <label for="website" class="form-label">Website</label>
        <input
          type="text"
          id="website"
          autocomplete="off"
          v-model="activeUser.website"
          class="form-input"
        />
      </div>
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input
          type="text"
          id="email"
          autocomplete="off"
          v-model="activeUser.email"
          class="form-input"
        />
      </div>
      <div class="form-group">
        <label for="twitter" class="form-label">twitter</label>
        <input
          type="text"
          id="twitter"
          autocomplete="off"
          v-model="activeUser.twitter"
          class="form-input"
        />
      </div>
      <div class="btn-group space-between">
        <button class="btn-ghost">Cancel</button>
        <button type="submit" class="btn-blue">Save</button>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { User } from "@/types";
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const props = defineProps<{ user: User }>();
const emit = defineEmits<{ (e: "closeProfileEditor"): void }>();

const activeUser = ref(props.user);

const save = () => {
  store.dispatch("updateUser", {
    user: activeUser.value,
    userId: activeUser.value.id,
  });
  emit("closeProfileEditor");
};
</script>
<style></style>
