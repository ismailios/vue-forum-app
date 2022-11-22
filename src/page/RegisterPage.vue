<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'Login' }"
          >Login</router-link
        >
      </p>
      <h2>Create Your FireBlog Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Name" v-model="form.name" />
        </div>
        <div class="input">
          <input type="text" placeholder="Username" v-model="form.username" />
        </div>
        <div class="input">
          <input type="text" placeholder="Email" v-model="form.email" />
        </div>
        <div class="input">
          <input
            type="password"
            placeholder="Password"
            v-model="form.password"
          />
        </div>
        <div class="form-group">
          <label for="avatar">
            Avatar
            <div v-if="form.avatarPreview">
              <img
                :src="form.avatarPreview"
                alt="avatarPreview"
                class="avatar-xlarge"
              />
            </div>
          </label>
          <input
            name="avatar"
            v-show="!avatarPreview"
            id="avatar"
            type="file"
            class="form-input"
            @change="handleImageUpload"
            accept="image/*"
          />
        </div>
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
      </div>
      <button @click.prevent="register" class="btn-blue">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const form = reactive({
  avatarPreview: null,
  name: "",
  username: "",
  email: "",
  password: "",
  avatar: "",
});

async function register() {
  await store.dispatch("auth/registerUserWithEmailAndPassword", form);
  router.push("/");
}

function handleImageUpload(e) {
  form.avatar = e.target.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    form.avatarPreview = event.target.result;
  };
  reader.readAsDataURL(form.avatar);
}
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>
