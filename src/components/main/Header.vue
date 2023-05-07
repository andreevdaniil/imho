<template>
  <header class="header">
    <div class="header-top">
      <div class="container">
        <div class="header-top__content">
          <div class="header-top__user">
            <img
              :src="require('@/assets/images/users/avatar1.png')"
              alt="user"
              class="header-top__image"
            />
            <p class="header-top__name">{{ user.surname }} {{ user.name }}</p>
          </div>
          <div class="header-top__filter">
            <ul class="header-top__list">
              <li
                class="header-top__country"
                :class="{
                  'header-top__country_active':
                    availableCountries.includes(item),
                }"
                @click="chooseCountrie(item)"
                v-for="item in countries"
                :key="item"
              >
                {{ item }}
              </li>
            </ul>
            <button
              class="header-top__select button-red"
              @click="chooseCountrie()"
            >
              Выбрать все
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="header-body">
      <div class="container">
        <div class="header-body__content">
          <router-link
            :to="{ name: 'AdminAnalyticsPage' }"
            class="header-body__button"
          >
            Аналитика <arrowDownIcon />
          </router-link>
          <button class="header-body__button">Модерация</button>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
import arrowDownIcon from "@/assets/images/icons/arrowDown.svg?inline";
export default {
  data() {
    return {
      countries: [
        "RUS",
        "BLR",
        "LTU",
        "LAT",
        "KAZ",
        "EST",
        "UKR",
        "POL",
        "MDA",
      ],
    };
  },
  computed: {
    ...mapGetters({
      user: "Users/getCurrentUser", // Текущий пользователь
      availableCountries: "AdminFilters/getAvailableCountries", //Выбранные страны
    }),
  },
  methods: {
    chooseCountrie(item = this.countries) {
      this.$store.commit("AdminFilters/changeAvailableCountries", item);
    },
  },
  components: {
    arrowDownIcon,
  },
};
</script>
<style lang="scss">
.header {
  display: flex;
  flex-direction: column;
  &-top {
    &__content,
    &__user,
    &__list,
    &__filter {
      display: flex;
      align-items: center;
    }
    &__content {
      padding: 8px 0;
    }
    &__country {
      margin-right: 8px;
      font-size: 12px;
      font-weight: 700;
      padding: 6px 8px;
      border: 1px solid transparent;
      border-radius: 8px;

      cursor: pointer;
      &_active {
        border-color: #e11b1b;
      }
    }
    &__user {
      margin-right: 8px;
    }
    &__image {
      margin-right: 8px;
    }
    &__name {
      font-size: 16px;
      font-weight: 700;
      color: #231f20;
    }
  }
  &-body {
    background: #231f20;
    border-radius: 0 0 15px 15px;
    padding: 8px 0;
    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__button {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: #fff;
      display: flex;
      align-items: center;
      svg {
        margin-left: 7px;
      }
    }
  }
}
</style>