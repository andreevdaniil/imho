<template>
  <div class="admin-analytics__header">
    <div class="main-filter main-filter_above">
      <div
        class="main-filter__block"
        :class="{
          'main-filter__block_active':
            getNamePage == 'AdminAnalyticsAuthorsPage',
        }"
      >
        <router-link
          :to="{
            name: 'AdminAnalyticsAuthorsPage',
            query: { filter: 'authors' },
          }"
          class="main-filter__button"
          :class="{ 'main-filter__button_active': getQuery == 'authors' }"
          >Автор</router-link
        >
        <router-link
          v-if="getNamePage == 'AdminAnalyticsAuthorsPage'"
          :to="{
            query: { filter: 'geography' },
          }"
          class="main-filter__button"
          :class="{
            'main-filter__button_active': getQuery == 'geography',
          }"
          >География и Демография</router-link
        >
      </div>
      <div
        class="main-filter__block"
        :class="{
          'main-filter__block_active':
            getNamePage == 'AdminAnalyticsPublicationsPage',
        }"
      >
        <router-link
          :to="{
            name: 'AdminAnalyticsPublicationsPage',
            query: { filter: 'publications' },
          }"
          class="main-filter__button"
          :class="{ 'main-filter__button_active': getQuery == 'publications' }"
          >Публикации</router-link
        >
        <router-link
          v-if="getNamePage == 'AdminAnalyticsPublicationsPage'"
          :to="{
            query: { filter: 'themes' },
          }"
          class="main-filter__button"
          :class="{
            'main-filter__button_active': getQuery == 'themes',
          }"
          >Тема и теги</router-link
        >
      </div>
      <div
        class="main-filter__block"
        :class="{
          'main-filter__block_active': getNamePage == 'AdminAnalyticsUsersPage',
        }"
      >
        <router-link
          :to="{
            name: 'AdminAnalyticsUsersPage',
            query: { filter: 'users' },
          }"
          class="main-filter__button"
          :class="{ 'main-filter__button_active': getQuery == 'users' }"
          >Пользователи</router-link
        >
        <router-link
          v-if="getNamePage == 'AdminAnalyticsUsersPage'"
          :to="{
            query: { filter: 'geography' },
          }"
          class="main-filter__button"
          :class="{
            'main-filter__button_active': getQuery == 'geography',
          }"
          >География и Демография</router-link
        >
        <router-link
          v-if="getNamePage == 'AdminAnalyticsUsersPage'"
          :to="{
            query: { filter: 'activity' },
          }"
          class="main-filter__button"
          :class="{
            'main-filter__button_active': getQuery == 'activity',
          }"
          >Активность</router-link
        >
      </div>
    </div>
    <div class="admin-analytics__filter">
      <div class="main-filter">
        <div class="main-filter__block">
          <button class="main-filter__button">Неделя</button>
        </div>
        <div class="main-filter__block">
          <button class="main-filter__button">Месяц</button>
        </div>
        <div class="main-filter__block">
          <button class="main-filter__button">Год</button>
        </div>
        <div class="main-filter__block">
          <button class="main-filter__button main-filter__button_active">
            Все
          </button>
        </div>
      </div>
      <div class="main-filter main-filter_margin">
        <Period />
      </div>
      <div class="admin-analytics__events">
        <div class="admin-analytics__icon">
          <RefreshIcon />
        </div>
        <div class="admin-analytics__icon">
          <DotsIcon />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RefreshIcon from "@/assets/images/icons/refresh.svg?inline";
import DotsIcon from "@/assets/images/icons/dots.svg?inline";
import Period from "@/components/main/Period.vue";
export default {
  props: {
    current: {
      type: String,
      default: () => {
        return "";
      },
    },
  },
  data() {
    return {};
  },
  components: {
    RefreshIcon,
    DotsIcon,
    Period,
  },
  computed: {
    getQuery() {
      return this.$route.query.filter || "";
    },
    getNamePage() {
      return this.$route.name;
    },
  },
};
</script>
<style lang="scss">
.admin-analytics {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  &__filter {
    display: flex;
    align-items: center;
  }
  &__events {
    display: flex;
    align-items: center;
  }
  &__icon {
    height: 24px;
    &:not(:last-child) {
      margin-right: 5px;
    }
  }
}
</style>