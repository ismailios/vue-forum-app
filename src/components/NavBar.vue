<template>
  <header class="header" id="header">
    <router-link :to="{ name: 'Home' }" class="logo">
      <img src="../assets/logo.png" alt="logo" />
    </router-link>

    <div class="btn-hamburger">
      <div class="top bar"></div>
      <div class="middle bar"></div>
      <div class="bottom bar"></div>
    </div>

    <nav class="navbar">
      <ul>
        <li v-if="authUser" class="navbar-user">
          <!-- <router-link :to="{ name: 'Profile' }"> -->
          <a @click.prevent="handleDropDown">
            <img
              class="avatar-small"
              :src="authUser.avatar"
              :alt="`${authUser.name} profile picture`"
            />
            <span>
              {{ authUser.name }}
              <img
                class="icon-profile"
                src="../assets/logo.png"
                alt="profile"
              />
            </span>
          </a>
          <!-- </router-link> -->

          <div id="user-dropdown" :class="{ 'active-drop': userDropdownOpen }">
            <div class="triangle-drop"></div>
            <ul class="dropdown-menu">
              <li class="dropdown-menu-item">
                <router-link :to="{ name: 'Profile' }"
                  >View profile</router-link
                >
              </li>
              <li class="dropdown-menu-item">
                <a @click.prevent="handleLogout"> Sign Out </a>
              </li>
            </ul>
          </div>
        </li>
        <li v-if="!authUser" class="navbar-item">
          <router-link :to="{ name: 'Login' }">Sign In</router-link>
        </li>
        <li v-if="!authUser" class="navbar-item">
          <router-link :to="{ name: 'Register' }">Register</router-link>
        </li>
        <li v-if="authUser" class="navbar-mobile-item">
          <router-link :to="{ name: 'Profile' }">View Profile</router-link>
        </li>
        <li v-if="authUser" class="navbar-mobile-item">
          <a
            @click.prevent="
              $store.dispatch('auth/signOut'), $router.push({ name: 'Home' })
            "
          >
            Sign Out</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const userDropdownOpen = ref(false);
const store = useStore();
const router = useRouter();

function handleDropDown() {
  userDropdownOpen.value = !userDropdownOpen.value;
}
function handleLogout() {
  store.dispatch("auth/signOut");
  router.push({ name: "Login" });
}
const authUser = computed(() => store.getters["auth/authUser"]);
// console.log("authUser", authUser);
</script>

<style scoped></style>
