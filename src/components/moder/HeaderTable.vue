<template>
  <div class="moder-page__top">
    <h2 class="moder-page__title">Модерация</h2>
    <div class="moder-page__search">
        <input type="text">
    </div>
    <div class="main-filter moder-page__filter">
      <button
        class="main-filter__button main-filter__button_active"
      >
        Таблица
      </button>
      <button class="main-filter__button"> Календарь </button>
    </div>
  </div>
</template>
  
  <style lang="scss">
.moder-page {
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
    color: #231F20;
  }
}
</style>