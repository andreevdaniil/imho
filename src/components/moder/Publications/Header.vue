<template>
  <div class="moder-publications-top">
    <div class="moder-publications-top__content">
      <div class="moder-publications-top__block">
        <div class="main-filter">
          <select
            name="color"
            class="moder-publications-top__button"
            v-model="textForPeriod"
          >
            <option value="publish">Опубликовано</option>
            <option value="created">Создано</option>
          </select>

          <div class="main-filter__block"></div>
          <div class="main-filter__block">
            <Period />
          </div>
        </div>
        <div class="main-filter">
          <div class="main-filter__block">
            <router-link
              :to="{ name: 'ModerPublicationsNew' }"
              class="main-filter__button"
              :class="{
                'main-filter__button_active':
                  $route.name == 'ModerPublicationsNew',
              }"
            >
              Новый
            </router-link>
          </div>
          <div class="main-filter__block">
            <router-link
              :to="{ name: 'ModerPublicationsApproved' }"
              :class="{
                'main-filter__button_active':
                  $route.name == 'ModerPublicationsApproved',
              }"
              class="main-filter__button"
              >Одобрен</router-link
            >
          </div>
          <div class="main-filter__block">
            <button class="main-filter__button">Не одобрен</button>
          </div>
          <div class="main-filter__block">
            <button class="main-filter__button">Архив</button>
          </div>
          <div class="main-filter__block">
            <button class="main-filter__button">Выбор редакции</button>
          </div>
          <div class="main-filter__block">
            <button class="main-filter__button">Горячие новости</button>
          </div>
          <div class="main-filter__block">
            <button class="main-filter__button">Все</button>
          </div>
        </div>
      </div>
      <div class="moder-publications-top__block">
        <div class="moder-publications-top__filter">
          <button><RefreshIcon /></button>
          <button><PenIcon /></button>
          <button><DotsIcon /></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Period from "@/components/main/Period.vue";
// import ArrowDownIcon from "@/assets/images/icons/arrowDown.svg?inline";
import PenIcon from "@/assets/images/icons/pen.svg?inline";
import RefreshIcon from "@/assets/images/icons/refresh.svg?inline";
import DotsIcon from "@/assets/images/icons/dots.svg?inline";
export default {
  data() {
    return {
      textForPeriod: "publish",
    };
  },
  components: {
    Period,
    // ArrowDownIcon,
    PenIcon,
    RefreshIcon,
    DotsIcon,
  },
  watch: {
    textForPeriod(newValue) {
      this.$store.commit("Main/changeTextForPeriod", newValue);
    },
  },
};
</script>
<style lang="scss">
.moder-publications-top {
  margin-bottom: 20px;
  &__content {
    display: flex;
    justify-content: space-between;
  }
  &__block {
    display: flex;
    align-items: center;
    .main-filter {
      margin-right: 40px;
      &:first-child .main-filter__block {
        margin-right: 4px;
      }
    }
  }
  &__button {
    display: flex;
    align-items: center;
    padding: 2px 8px;
    border: 1px solid #c0c0c0;
    border-radius: 8px;
    cursor: pointer;
  }
  &__icon {
    path {
      fill: #231f20;
    }
    margin-left: 5px;
  }
  &__filter {
    display: flex;
    align-items: center;
    button {
      display: flex;
      align-items: center;
    }
    button:not(:last-child) {
      margin-right: 14px;
    }
  }
}
</style>