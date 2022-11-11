<template>
  <header class="header" id="header">
    <router-link class="logo" :to="{ name: 'Home' }">
      <img src="../assets/logo.png" alt="logo" />
    </router-link>
    <div class="btn-hamburger">
      <div class="top bar"></div>
      <div class="middle bar"></div>
      <div class="bottom bar"></div>
    </div>
    <nav class="navbar">
      <ul>
        <li class="navbar-user">
          <router-link :to="{ name: 'Profile' }">
            <img src="../assets/logo.png" alt="avatar" class="avatar-small" />
            <span
              >{{ authUser.name }}
              <img src="../assets/logo.png" alt="arrow" class="icon-profile"
            /></span>
          </router-link>
          <div id="user-dropdown">
            <div class="triangle-drop">
              <ul class="dropdown-menu">
                <li class="dropdown-menu-item"><a href="#">View profile</a></li>
                <li class="dropdown-menu-item"><a href="#">Log out </a></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["authUser"]),
  },
};
</script>

<style lang="scss" scoped></style>
