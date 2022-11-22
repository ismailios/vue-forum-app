<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <input
          placeholder="Thread Title"
          v-model="threadForm.title"
          name="title"
          class="form-input"
        />
      </div>
      <div class="form-group">
        <textarea
          placeholder="Thread Content "
          v-model="threadForm.content"
          name="text"
          rows="10"
          class="form-input"
        ></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit Thread</button>
      </div>
    </form>
  </div>
</template>

<script setup>
const { reactive } = require("@vue/reactivity");

const emit = defineEmits(["save"]);

const threadForm = reactive({
  title: "",
  content: "",
});
function save() {
  emit("save", threadForm);
}
</script>

<style scoped></style>
