<template>
  <div>
    <ModerHeader />
    <PublicationsHeader />
    <router-view></router-view>
  </div>
</template>
<script>
import ModerHeader from "@/components/moder/HeaderTable.vue";
import PublicationsHeader from "@/components/moder/Publications/Header";
export default {
  components: {
    ModerHeader,
    PublicationsHeader,
  },
};
</script>