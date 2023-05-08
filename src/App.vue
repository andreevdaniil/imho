<template>
  <div id="app">
    <component v-if="Publications.length > 1" :is="layout"> </component>
    <h1 v-else>Загрузка</h1>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions("Users", ["GET_USERS_FROM_API"]),
    ...mapActions("AdminFilters", [
      "GET_PUBLICATIONS_FROM_API",
      "GET_AUTHORS_FROM_API",
      "GET_THEMES_FROM_API",
    ]),
  },
  mounted() {
    if (localStorage.user) {
      this.$store.commit("Users/changeUserByLocalStorage");
    }
    if (this.CurrentUser == null && this.$route.name != "Login") {
      this.$router.push({ name: "Login" });
    }
    this.GET_PUBLICATIONS_FROM_API();
    this.GET_THEMES_FROM_API();
    this.GET_USERS_FROM_API();
    this.GET_AUTHORS_FROM_API();

    // }
  },
  computed: {
    ...mapGetters({
      Authors: "Users/getListOfUsers",
      Publications: "AdminFilters/getPublications",
      CurrentUser: "Users/getCurrentUser",
    }),
    layout() {
      const layoutName = this.$route.meta.layout || "Default";
      return () => import(`@/layouts/${layoutName}.vue`);
    },
  },
};
</script>
<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
