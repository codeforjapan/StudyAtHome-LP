<template>
  <v-row class="NewsArticle-Container" justify="center" align="center">
    <v-col cols="12">
      <article v-if="article">
        <div class="NewsArticle-Details">
          <span class="NewsArticle-Details-DateTime">
            <time :datetime="article.createdAt">
              {{ formatDate(article.createdAt) }}
            </time>
          </span>
          <h1 class="NewsArticle-Details-Title">
            {{ article.title }}
          </h1>
        </div>
        <v-img
          class="mx-auto my-3"
          :src="`/news/${article.thumbnailFilename}`"
          alt=""
          :aspect-ratio="340 / 200"
          max-height="469"
          max-width="798"
          contain
        />

        <nuxt-content class="NewsArticle-Body" :document="article" />
      </article>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'
import { IContentDocument } from '@nuxt/content/types/content'

type Data = {
  article: IContentDocument | null
}

type Methods = {
  formatDate(date: Date): string
}

export default Vue.extend<Data, Methods, unknown, unknown>({
  async asyncData({ $content, params }) {
    const article = await $content('news', params.id).fetch()

    return {
      article,
    }
  },
  data() {
    return {
      article: null,
    }
  },
  methods: {
    formatDate(date: Date): string {
      return dayjs(date).format('YYYY.MM.DD')
    },
  },
})
</script>

<style lang="scss" scoped>
.NewsArticle {
  &-Container {
    max-width: 800px;
    margin: {
      left: auto;
      right: auto;
    }
  }

  &-Details {
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.05em;
    color: #424242;

    margin: {
      top: 17px;
      right: 0;
      bottom: 8px;
      left: 0;
    }

    &-DateTime {
      margin: 4px 0;
    }

    &-Title {
      font-weight: bold;
      font-size: 20px;
      margin: 6px 0;
      letter-spacing: 0.03em;
    }
  }

  &-Body {
    margin: 25px 0 8px 0;
    font-size: 16px;
    letter-spacing: 0.03em;
  }
}
</style>
