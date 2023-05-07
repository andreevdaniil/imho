<template>
  <div class="main-layout">
    <Header />
    <div class="main-background">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <Footer />
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
};
</script>

