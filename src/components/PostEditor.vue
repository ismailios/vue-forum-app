<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea
          v-model="text"
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
</template>

<script setup lang="ts">
import { Post } from "@/types";
import { ref } from "vue";

const emit = defineEmits<{
  (e: "save", { post }: { post: Post }): void;
}>();

const text = ref("");
function save() {
  const postId = "dhdhdd" + Math.random();
  const post = {
    id: postId,
    publishedAt: Math.floor(Date.now() / 1000),
    text: text.value,
    userId: "ALXhxjwgY9PinwNGHpfai6OWyDu2",
  };
  text.value = "";
  emit("save", { post });
}
</script>

<style lang="scss" scoped></style>
