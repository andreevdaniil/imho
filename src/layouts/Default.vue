<template>
  <div class="main-layout">
    <Header />
    <div class="main-background">
      <div class="container">
        <AdminHeader v-if="$route.name == 'AdminEmployeesTable' || $route.name == 'AdminEmployeesView' || $route.name == 'AdminEmployeesCreateEmployeer'"/>

        <router-view></router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/main/Header.vue";
import AdminHeader from "@/components/admin/Employees/Header";
import Footer from "@/components/main/Footer.vue";
export default {
  name: "Default",
  components: {
    Header,
    Footer,
    AdminHeader,
  },
};
</script>

