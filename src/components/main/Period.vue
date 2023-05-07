<template>
  <v-date-picker
    :select-attribute="attr"
    :drag-attribute="attr"
    v-model="range"
    :masks="masks"
    is-range
  >
    <template v-slot="{ inputValue, inputEvents }">
      <div class="period">
        <div class="period__text">
          <p>с</p>
        </div>

        <div class="period__item">
          <input
            class="period__input"
            :value="inputValue.start"
            v-on="inputEvents.start"
            readonly
          />
        </div>
        <div class="period__text">
          <p>по</p>
        </div>
        <div class="period__item">
          <input
            class="period__input"
            :value="inputValue.end"
            v-on="inputEvents.end"
            readonly
          />
        </div>
      </div>
    </template>
  </v-date-picker>
</template>
<script>
export default {
  data() {
    return {
      range: {
        start: new Date(2023, 4, 2),
        end: new Date(2023, 4, 12),
      },
      masks: {
        input: "DD.MM.YYYY",
      },
      attr: {
        highlight: "red"
      },
    };
  },
};
</script>
<style lang="scss">
.period {
  display: flex;
  align-items: center;
  &__item {
    max-width: 80px;
    padding: 2px 8px;
    border: 1px solid #e2e2e2;
    border-radius: 8px;
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 4px;
    }
  }
  &__input {
    max-width: 100%;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
  }
  &__text {
    margin-right: 4px;
    font-size: 14px;
    font-weight: 400;
  }
}
</style>