<template>
  <div class="moder-publications-calendar">
    <div class="moder-publications-calendar__content">
      <div
        class="moder-publications-calendar__top moder-publications-calendar__row"
      >
        <div
          class="moder-publications-calendar__column"
          v-for="day in week"
          :key="day"
        >
          <p>{{ day }}</p>
        </div>
      </div>
      <div
        class="moder-publications-calendar__body moder-publications-calendar__row"
      >
        <div
          class="moder-publications-calendar__column moder-publications-calendar__item main-content main-color"
          v-for="(item, index) in week"
          :key="item"
        >
          <div class="moder-publications-calendar__info">
            <p class="moder-publications-calendar__subtitle">26</p>
            <p class="moder-publications-calendar__subtitle_light">
              10 публикаций
            </p>
          </div>
          <ul class="moder-publications-calendar__list">
            <li
              class="moder-publications-calendar__li"
              v-for="article in filterPublications(index)"
              :key="article.id"
              @click="changeArticle(article)"
              :style="{
                position: currentArticle
                  ? currentArticle.id == article.id
                    ? 'relative'
                    : 'static'
                  : 'static',
                color: currentArticle
                  ? currentArticle.id == article.id
                    ? '#b90c0c'
                    : ''
                  : '',
              }"
            >
              <p class="moder-publications-calendar__article">
                {{ article.title }}
              </p>
              <p class="moder-publications-calendar__author">
                Александр Гопоненко
              </p>
              <div class="publications-modal">
                <div
                  class="publications-modal__content"
                  v-if="currentArticle && currentArticle.id == article.id"
                >
                  <div class="publications-modal__row">
                    <div class="publications-modal__parameter">
                      <p>Id</p>
                    </div>
                    <div class="publications-modal__value">
                      <p>{{ currentArticle.id }}</p>
                    </div>
                  </div>
                  <div class="publications-modal__row">
                    <div class="publications-modal__parameter">
                      <p>Заголовок</p>
                    </div>
                    <div class="publications-modal__value">
                      <p>{{ currentArticle.title }}</p>
                    </div>
                  </div>
                  <div class="publications-modal__row">
                    <div class="publications-modal__parameter">
                      <p>Автор</p>
                    </div>
                    <div class="publications-modal__value">
                      <div class="main-table-author">
                        <div class="main-table-author__image">
                          <img
                            :src="require('@/assets/images/users/avatar2.png')"
                            alt="user"
                          />
                        </div>
                        <div class="main-table-author__info">
                          <p class="main-table-author__name">
                            {{
                              getAuthor(currentArticle.authorId)
                                ? getAuthor(currentArticle.authorId).name
                                : ""
                            }}
                            {{
                              getAuthor(currentArticle.authorId)
                                ? getAuthor(currentArticle.authorId).surname
                                : ""
                            }}
                          </p>
                          <p class="main-table-author__tag">
                            {{
                              getAuthor(currentArticle.authorId)
                                ? getAuthor(currentArticle.authorId).tag
                                : ""
                            }}
                          </p>
                          <ul class="main-table-author__list">
                            <li
                              v-for="role in getAuthor(currentArticle.authorId)
                                ? getAuthor(currentArticle.authorId).roles
                                : []"
                              :key="role"
                              :style="[
                                role == 'Лидер мнений'
                                  ? { background: '#CEE9FF' }
                                  : { background: '#E2E2E2' },
                              ]"
                            >
                              <p>{{ role }}</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="publications-modal__row">
                    <div class="publications-modal__parameter">
                      <p>Создано</p>
                    </div>
                    <div class="publications-modal__value">
                      <p>{{ currentArticle.created }}</p>
                    </div>
                  </div>
                  <div class="publications-modal__row">
                    <div class="publications-modal__parameter">
                      <p>Страны</p>
                    </div>
                    <div class="publications-modal__value">
                      <ul class="main-table__list">
                        <li
                          v-for="country in currentArticle.availableCountries"
                          :key="country"
                        >
                          <div class="main-table__icon">
                            <img
                              :src="
                                require(`@/assets/images/icons/flags/${country.toLowerCase()}.svg`)
                              "
                              alt=""
                            />
                          </div>
                          <p class="main-table__text main-table__text_bold">
                            {{ country }}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="publications-modal__row">
                    <div class="publications-modal__parameter">
                      <p>Дата публикации</p>
                    </div>
                    <div class="publications-modal__value">
                      <p>
                        {{ currentArticle.publish[0] }}
                        {{ currentArticle.publish[1] }}
                      </p>
                    </div>
                  </div>
                  <div class="publications-modal__row">
                    <div class="publications-modal__parameter">
                      <p>Статус</p>
                    </div>
                    <div class="publications-modal__value">
                      <p
                        v-if="currentArticle.status == 'approved'"
                        class="publications-modal__status publications-modal__status_green"
                      >
                        Одобрено
                      </p>
                      <p
                        v-else-if="currentArticle.status == 'rejected'"
                        class="publications-modal__status publications-modal__status_red"
                      >
                        Не одобрено
                      </p>
                      <p
                        v-else-if="currentArticle.status == 'undefined'"
                        class="publications-modal__status publications-modal__status_purple"
                      >
                        Новый
                      </p>
                    </div>
                  </div>
                  <div class="publications-modal__row">
                    <div class="publications-modal__parameter">
                      <p>Причина</p>
                    </div>
                    <div class="publications-modal__value">
                      <p>{{ currentArticle.reason || "-" }}</p>
                    </div>
                  </div>
                  <div class="publications-modal__row">
                    <div class="publications-modal__parameter">
                      <p>Тип</p>
                    </div>
                    <div class="publications-modal__value">
                      <ul class="main-table__list">
                        <li v-for="elem in currentArticle.type" :key="elem">
                          <div
                            class="main-table__icon publications-approved-table__type"
                          >
                            <img
                              :src="
                                require(`@/assets/images/icons/${elem.toLowerCase()}.svg`)
                              "
                              alt=""
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="publications-modal__row"
                    v-if="UserById(currentArticle.moderId)"
                  >
                    <div class="publications-modal__parameter">
                      <p>Модератор</p>
                    </div>
                    <div class="publications-modal__value">
                      <div class="publications-modal__moderator">
                        <img src="@/assets/images/users/avatar1.png" alt="" />
                        <p>
                          {{ UserById(currentArticle.moderId).name }}
                          {{ UserById(currentArticle.moderId).surname }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    publications: {
      type: Array,
      require: true,
      default: () => [],
    },
    status: {
      type: String,
      require: false,
      default: () => "Все",
    },
  },
  data() {
    return {
      week: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
      currentArticle: null,
      right: false,
      changed: false,
    };
  },
  mounted() {
    document.addEventListener("click", (element) => {
      [].forEach.call(
        document.querySelectorAll(".publications-modal"),
        function (el) {
          el.classList.remove("publications-modal_left");
          el.classList.remove("publications-modal_right");
          el.classList.remove("publications-modal_top");
        }
      );
      if (
        element.target.closest(".moder-publications-calendar__article") == null
      ) {
        this.currentArticle = null;
      } else {
        let child = element.target.parentNode.querySelector(
          ".publications-modal"
        );
        let parent = this.Container;
        // Удаляем у всех модалок классы "_right" и "_left"
        if (this.Container.width >= 632) {
          // Проверяем, выходит ли модалка за пределы контейнера
          if (parent.right <= child.getBoundingClientRect().right) {
            child.classList.add("publications-modal_left");
          } else {
            child.classList.add("publications-modal_right");
          }
          if (parent.left > child.getBoundingClientRect().left) {
            child.classList.remove("publications-modal_left");
            child.classList.add("publications-modal_right");
          }
        } else {
          child.classList.add("publications-modal_top");
        }
      }
    });
  },
  computed: {
    ...mapGetters({
      getAuthor: "Main/getAuthorById",
      UserById: "Users/getUserById",
      Container: "Main/getSizeOfContainer",
    }),
  },
  methods: {
    changeArticle(article) {
      this.currentArticle = article;
    },
    filterPublications(id) {
      return this.publications.filter((e) => {
        return (
          new Date(e.publish[0]).getDay() == id &&
          (this.status == "Все"
            ? true
            : this.status == "editorial"
            ? e.type.includes("users")
            : this.status == "hot"
            ? e.type.includes("fire")
            : this.status == e.status)
        );
      });
    },
  },
};
</script>
<style lang="scss">
.moder-publications-calendar__row {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 8px;
  align-items: start;
}
.moder-publications-calendar__top {
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 700;
}
.moder-publications-calendar__item {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #c0c0c0;
}
.moder-publications-calendar__info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.moder-publications-calendar__subtitle {
  font-size: 12px;
  font-weight: 700;
}
.moder-publications-calendar__li {
  margin-bottom: 12px;
  cursor: pointer;
}
.moder-publications-calendar__li:hover {
  color: #b90c0c !important;
}
.moder-publications-calendar__subtitle_light {
  font-size: 11px;
  font-weight: 700;
  color: #c0c0c0;
}
.moder-publications-calendar__article {
  position: relative;
  font-size: 11px;
  line-height: 15px;
  text-indent: 6px;
  font-weight: 700;
}
.moder-publications-calendar__article::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #b90c0c;
  left: -1px;
  top: 6px;
}
.moder-publications-calendar__author {
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
}
.moder-publications-calendar {
  @media screen and (min-width: 320px) and (max-width: 1280px) {
    width: 1100px;
    min-height: 400px;
    &__subtitle,
    &__article {
      font-size: 10px;
    }
  }
}
.publications-modal {
  position: absolute;
  top: -50px;
  // left: 100%;
  padding: 8px;
  width: 400px;
  z-index: 999;
  background: #fff;
  border: 2px solid #b90c0c;
  border-radius: 8px;
  &_right {
    left: 100%;
    .publications-modal__content {
      &::after,
      &::before {
        right: 102.1%;
      }
      &::after {
        border-right-color: #fff;
      }
      &::before {
        border-right-color: #b90c0c;
      }
    }
  }
  &_left {
    right: 100%;
    .publications-modal__content {
      &::after,
      &::before {
        left: 102.1%;
      }
      &::after {
        border-left-color: #fff;
      }
      &::before {
        border-left-color: #b90c0c;
      }
    }
  }
  &_top {
    top: 100%;
    .publications-modal__content {
      &::after,
      &::before {
        top: -40px;
        left: 30px;
      }
      &::after {
        border-bottom-color: #fff;
        border-width: 31px;
        margin-top: -29px;
      }
      &::before {
        border-bottom-color: #b90c0c;
        border-width: 31px;
        margin-top: -31px;
      }
    }
  }
  &__content {
    position: relative;
    padding: 4px;
    width: 100%;
    &:after,
    &:before {
      top: 60px;
      border: solid transparent;
      content: "";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }

    &:after {
      border-color: rgba(136, 183, 213, 0);
      border-width: 30px;
      margin-top: -30px;
    }
    &:before {
      border-color: rgba(194, 225, 245, 0);
      border-width: 32px;
      margin-top: -32px;
    }
  }
  &__row {
    display: grid;
    grid-template-columns: 2fr 4fr;
  }
  &__parameter {
    font-weight: 700;
    text-transform: uppercase;
  }
  &__value {
    font-weight: 500;
  }
  &__parameter,
  &__value {
    color: #353132;
    display: flex;
    align-items: center;
    font-size: 10px;
    padding: 4px;
    border: 1px solid #c0c0c0;
  }
  &__status {
    text-transform: uppercase;
    font-weight: 700 !important;
    &_green {
      color: #009688;
    }
    &_red {
      color: #e11b1b;
    }
    &_purple {
      color: #7b61ff;
    }
  }
  &__moderator {
    display: flex;
    align-items: center;
    img {
      margin-right: 5px;
    }
  }
  @media screen and (min-device-width: 1280px) and (max-device-width: 1599px) {
    right: -320%;
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    width: 350px;
  }
}
.main-table-author {
  &__name {
    font-size: 11px;
  }
  &__tag {
    font-size: 9px;
  }
  &__image {
    width: 40px;
    height: 40px;
  }
}
</style>