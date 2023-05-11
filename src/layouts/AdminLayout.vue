<template>
  <div>
    <div class="main-layout">
      <Header />
      <div class="main-background">
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import Header from "@/components/main/Header.vue";
import Footer from "@/components/main/Footer.vue";
export default {
  name: "Default",
  components: {
    Header,
    Footer,
  },
  computed: {
    layout() {
      const layoutName = this.$route.meta.layout || "Default";
      return () => import(`@/layouts/${layoutName}.vue`);
    },
  },
};
</script>

