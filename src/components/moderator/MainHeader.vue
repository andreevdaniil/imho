<template>
  <div
    class="moderator-page__top"
    :class="{
      'main-line': $route.name == 'ModeratorPublicationsArticle',
    }"
  >
    <h2 class="moderator-page__title">Модерация</h2>
    <ModeratorSearch v-if="$route.name != 'ModeratorPublicationsArticle'" />
    <div
      class="main-filter moderator-page__filter"
      v-if="$route.name != 'ModeratorPublicationsArticle'"
    >
      <router-link
        :to="{ name: 'ModeratorPublicationsTableNew' }"
        class="main-filter__button"
        :class="{
          'main-filter__button_active': ~$route.name.indexOf(
            'ModeratorPublicationsTable'
          ),
        }"
      >
        Таблица
      </router-link>
      <router-link
        :to="{ name: 'ModeratorPublicationsCalendarNew' }"
        class="main-filter__button"
        :class="{
          'main-filter__button_active': ~$route.name.indexOf(
            'ModeratorPublicationsCalendar'
          ),
        }"
      >
        Календарь
      </router-link>
    </div>
    <div
      class="main-submit"
      v-if="$route.name == 'ModeratorPublicationsArticle'"
    >
      <button>Сохранить</button>
    </div>
  </div>
</template>
<script>
import ModeratorSearch from "@/components/moderator/Search.vue";
export default {
  components: {
    ModeratorSearch,
  },
};
</script>
  <style lang="scss">
.moderator-page {
  &__content {
    padding-bottom: 16px;
  }
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  &__title {
    font-size: 32px;
    font-weight: 700;
    color: #231f20;
  }
}
</style>