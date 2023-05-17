<template>
  <div class="moderator-user-kpi">
    <div class="moderator-user__title">
      <h4>ЛК модератора</h4>
    </div>
    <Header />
    <div class="moderator-user-kpi__content main-content">
      <div class="moderator-user-kpi__row">
        <h5 class="moderator-user-kpi__title">
          KPI {{ currentUser.surname }} {{ currentUser.name }}
        </h5>
        <div class="main-filter" v-if="$route.query.period == 'month'">
          <div class="main-filter__block">
            <button class="main-filter__button">Январь</button>
          </div>
          <div class="main-filter__block">
            <button class="main-filter__button">Февраль</button>
          </div>
          <div class="main-filter__block">
            <button class="main-filter__button">Март</button>
          </div>
          <div class="main-filter__block">
            <button class="main-filter__button">Апрель</button>
          </div>
          <div class="main-filter__block">
            <button class="main-filter__button">Май</button>
          </div>
          <div class="main-filter__block">
            <button class="main-filter__button">Июнь</button>
          </div>
          <div class="main-filter__block">
            <button class="main-filter__button">Июль</button>
          </div>
          <div class="main-filter__block">
            <button class="main-filter__button">Август</button>
          </div>
          <div class="main-filter__block">
            <button class="main-filter__button">Сентябрь</button>
          </div>
          <div class="main-filter__block">
            <button class="main-filter__button">Октябрь</button>
          </div>
          <div class="main-filter__block">
            <button class="main-filter__button">Ноябрь</button>
          </div>
          <div class="main-filter__block">
            <button class="main-filter__button">Декабрь</button>
          </div>
        </div>
      </div>
      <div class="moderator-user-kpi__row">
        <div class="moderator-user-kpi__column">
          <div class="moderator-user-kpi__parameter">
            <p>Обработано</p>
          </div>
          <div class="moderator-user-kpi__value">
            <p>14 300</p>
          </div>
        </div>
        <div class="moderator-user-kpi__column">
          <div class="moderator-user-kpi__parameter">
            <p>Жалобы</p>
          </div>
          <div class="moderator-user-kpi__value">
            <p>{{ "14 300".toLocaleString() }}</p>
          </div>
        </div>
      </div>
      <div class="moderator-user-kpi__row">
        <div
          class="moderator-user-kpi__column moderator-user-kpi__column_direction"
        >
          <div class="moderator-user-kpi__subtitle">
            <h5>Продуктивность за неделю</h5>
          </div>
          <ul class="moderator-user-kpi__list">
            <li class="moderator-user-kpi__li">
              <p>Одобрено</p>
            </li>
            <li class="moderator-user-kpi__li">
              <p>Отклонено</p>
            </li>
          </ul>
          <div class="moderator-user-kpi__graph">
            <line-chart
              :styles="{ height: '300px' }"
            ></line-chart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/moderator/Kpi/Header";
import LineChart from "@/components/moderator/Kpi/Graph.vue";

import { mapGetters } from "vuex";
export default {
  components: {
    Header,
    LineChart,
  },
  computed: {
    ...mapGetters({
      currentUser: "Users/getCurrentUser",
    }),
  },
};
</script>
<style lang="scss">
.moderator-user-kpi {
  p {
    color: #353132;
  }
  &__content {
    margin-top: 16px;
    padding: 16px;
  }
  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 16px;
    margin-bottom: 16px;
  }
  &__column {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    border: 1px solid #c0c0c0;
    padding: 8px;
    &_direction {
      flex-direction: column;
      align-items: start;
    }
  }
  &__title {
    font-size: 24px;
    font-weight: 700;
    color: #353132;
  }
  &__subtitle {
    margin-bottom: 16px;
    h5 {
      font-size: 16px;
      font-weight: 700;
    }
  }
  &__parameter {
    font-weight: 700;
  }
  &__value {
    font-size: 24px;
    font-weight: 700;
  }
  &__graph {
    width: 100%;
  }
  &__list {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    li {
      margin-left: 18px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #69c4e9;
        left: -20px;
        top: 50%;
        transform: translateY(-50%);
      }
      &:first-child {
        margin-right: 16px;
      }
      &:last-child::before {
        background: #b5e2f5;
      }
    }
  }
}
.moderator-user__title {
  font-size: 32px;
  font-weight: 700;
  color: #353132;
  margin-bottom: 16px;
}
</style>