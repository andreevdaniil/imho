<template>
  <div class="publications-article">
    <div class="publications-article__content">
      <Article />
      <Editor />
    </div>
  </div>
</template>
<script>
import Article from "@/components/moderator/Publications/Article.vue";
import Editor from "@/components/moderator/Publications/Editor.vue";
export default {
  components: {
    Article,
    Editor,
  },
};
</script>
<style lang="scss">
.publications-article {
  &__content {
    display: grid;
    grid-template-columns: 4fr 3fr;
    column-gap: 16px;
  }
}
</style>