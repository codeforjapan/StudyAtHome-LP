<template>
  <v-row class="NewsList-Container" justify="center" align="center">
    <v-col cols="12">
      <h1 class="NewsList-Title-Wrapper text-center justify-center">
        <span class="NewsList-Title-English">News</span>
        <span class="NewsList-Title-Japanese">最新情報</span>
      </h1>
    </v-col>
    <v-col
      v-for="(item, i) in newsArticles"
      :key="i"
      cols="12"
      lg="4"
      sm="6"
      align-self="stretch"
    >
      <v-card tag="article" elevation="0" :ripple="false" nuxt :to="item.path">
        <v-img
          :src="`/news/${item.thumbnailFilename}`"
          alt=""
          :aspect-ratio="340 / 200"
          contain
        />
        <v-card-subtitle class="NewsList-Card-DateTime">
          <time :datetime="item.createdAt">{{
            formatDate(item.createdAt)
          }}</time>
        </v-card-subtitle>
        <v-card-title class="NewsList-Card-Title">
          <h2>{{ item.title }}</h2>
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'
import { IContentDocument } from '@nuxt/content/types/content'

type Data = {
  newsArticles: IContentDocument[]
}

type Methods = {
  formatDate(date: Date): string
}

export default Vue.extend<Data, Methods, unknown, unknown>({
  async asyncData({ $content }) {
    const articles = await $content('news').fetch()

    if (Array.isArray(articles)) {
      // なぜか .createdAt が string になってしまうのでDate型に変換
      const newsArticles = articles.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      return {
        newsArticles,
      }
    } else {
      return {
        newsArticles: [articles],
      }
    }
  },
  data() {
    return {
      newsArticles: [],
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
.NewsList {
  &-Container {
    max-width: 1000px;
    margin: {
      left: auto;
      right: auto;
    }
  }

  &-Title {
    &-Wrapper {
      margin: 17px auto;
      font-weight: bold;
      padding: 2px 0;
      letter-spacing: 0.03em;
    }
    &-English {
      color: #0071c2;
      display: block;
      font-size: 17px;
    }
    &-Japanese {
      font-size: 24px;
      display: block;
      color: #424242;
    }
  }

  &-Card {
    &-DateTime {
      font-weight: bold;
      font-size: 12px;
      letter-spacing: 0.03em;
      color: #424242;
      padding: {
        top: 8px;
        right: 6px;
        bottom: 2px;
        left: 6px;
      }
    }

    &-Title {
      letter-spacing: 0.03em;
      color: #424242;

      padding: {
        top: 0;
        right: 6px;
        bottom: 4px;
        left: 6px;
      }

      h2 {
        font-weight: bold;
        font-size: 17px;
        line-height: 180%;
      }
    }
  }
}
</style>
