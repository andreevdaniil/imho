<template>
  <div class="admin-page">
    <div class="admin-page__content">
      <ExecutivesTable :users="paginatedUsers" />
      <MainPaginator
        @changePaginatedItems="changeData"
        :items="filteredUsers"
      />
    </div>
  </div>
</template>
<script>
import ExecutivesTable from "@/components/admin/Employees/EmployeesTable.vue";
import MainPaginator from "@/components/main/Paginator.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      paginatedUsers: [],
    };
  },
  components: {
    ExecutivesTable,
    MainPaginator,
  },
  computed: {
    ...mapGetters({
      users: "Users/getListOfUsers",
      currentUser: "Users/getCurrentUser",
      availableCountries: "AdminFilters/getAvailableCountries",
    }),
    filteredUsers() {
      return this.users.filter((item) => {
        return (
          item.availableCountries.some((element) =>
            this.availableCountries.includes(element)
          ) && item.id != this.currentUser.id
        );
      });
    },
  },
  methods: {
    changeData(data) {
      this.paginatedUsers = data;
    },
  },
};
</script>
<style lang="scss">
.admin-page {
  &__content {
    padding-bottom: 16px;
  }
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title {
    font-size: 32px;
    font-weight: 700;
    color: #353132;
  }
}
</style>