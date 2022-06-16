<template>
  <Header />
  <button>
    <router-link to="/register"> Register</router-link>
  </button>
  <button>
    <router-link to="/login">Login</router-link>
  </button>
  <router-view />
</template>

<script>
import Header from "../components/Header/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>
