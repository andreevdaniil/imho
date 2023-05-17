<template>
  <div class="moderator-top-header">
    <div class="moderator-top-header__content">
      <div class="moderator-top-header__column main-filter">
        <div class="main-filter__block">
          <Period />
        </div>
      </div>
      <div class="moderator-top-header__column main-filter">
        <div class="main-filter__block">
          <router-link
            :to="{ name: 'ModeratorUserKpi', query: { period: 'week' } }"
            :class="{
              'main-filter__button_active': $route.query.period == 'week',
            }"
            class="main-filter__button"
            >Неделя</router-link
          >
        </div>
        <div class="main-filter__block">
          <router-link
            :to="{ name: 'ModeratorUserKpi', query: { period: 'month' } }"
            :class="{
              'main-filter__button_active': $route.query.period == 'month',
            }"
            class="main-filter__button"
            >Месяц</router-link
          >
        </div>
        <div class="main-filter__block">
          <router-link
            :to="{ name: 'ModeratorUserKpi', query: { period: 'year' } }"
            :class="{
              'main-filter__button_active': $route.query.period == 'year',
            }"
            class="main-filter__button"
            >Год</router-link
          >
        </div>
        <div class="main-filter__block">
          <router-link
            :to="{ name: 'ModeratorUserKpi', query: { period: 'all' } }"
            :class="{
              'main-filter__button_active': $route.query.period == 'all',
            }"
            class="main-filter__button"
            >За всё время</router-link
          >
        </div>
      </div>
      <div class="moderator-top-header__column moderator-top-header__filter">
        <button><RefreshIcon /></button>
        <button><PenIcon /></button>
        <button><DotsIcon /></button>
      </div>
    </div>
  </div>
</template>
<script>
import Period from "@/components/main/Period";
import PenIcon from "@/assets/images/icons/pen.svg?inline";
import RefreshIcon from "@/assets/images/icons/refresh.svg?inline";
import DotsIcon from "@/assets/images/icons/dots.svg?inline";
export default {
  components: {
    Period,
    PenIcon,
    RefreshIcon,
    DotsIcon,
  },
};
</script>
<style lang="scss">
.moderator-top-header {
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__filter {
    display: flex;
    align-items: center;
    column-gap: 10px;
    button {
      display: flex;
      align-items: center;
    }
  }
}
</style>