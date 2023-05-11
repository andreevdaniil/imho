<template>
  <div>
    <AdminHeader />
    <router-view></router-view>
  </div>
</template>
<script>
import AdminHeader from "@/components/admin/Employees/Header.vue"
export default {
    components: {
        AdminHeader
    }
}
</script>