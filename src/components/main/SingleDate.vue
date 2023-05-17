<template>
  <v-date-picker
    v-model="date"
    :select-attribute="attr"
    :update-on-input="false"
    is-required
    :highlight="{
      style: {
        position: 'relative',
      },
    }"
    v-slot="{ inputValue, inputEvents, modalDate }"
    :popover="{
      keepVisibleOnInput: true,
    }"
  >
    {{ modalDate }}

    <template>
      <input
        class="bg-white border px-2 py-1 rounded"
        :value="inputValue"
        v-on="inputEvents"
      />
    </template>
  </v-date-picker>
</template>
<script>
export default {
  data() {
    return {
      date: new Date(),
      attr: {
        highlight: {
          class: "",
        },
        popover: {
          label: "",
          visibility: "click",
        },
      },
    };
  },
};
</script>
<style lang="scss">
.publications-calendar {
  position: absolute;
  width: 100px;
  height: 100px;
  background: #000;
}
.vc-highlights {
  position: relative !important;
}
</style>