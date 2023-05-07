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
    ...mapActions("AdminFilters", ["GET_PUBLICATIONS_FROM_API", "GET_AUTHORS_FROM_API", "GET_THEMES_FROM_API"]),
  },
  mounted() {
    this.GET_PUBLICATIONS_FROM_API();
    this.GET_THEMES_FROM_API()
    this.GET_USERS_FROM_API();
    this.GET_AUTHORS_FROM_API()

    if (localStorage.user) {
      this.$store.commit("Users/changeUserByLocalStorage");
    }
  },
  computed: {
    ...mapGetters({
      Authors: "Users/getListOfUsers",
      Publications: "AdminFilters/getPublications"
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
