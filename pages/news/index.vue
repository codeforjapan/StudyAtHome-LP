<template>
  <v-row class="NewsList-Container" justify="center" align="center">
    <v-col cols="12">
      <h1 class="NewsList-Title-Wrapper text-center justify-center">
        <span class="NewsList-Title-English">News</span>
        <span class="NewsList-Title-Japanese">最新情報</span>
      </h1>
    </v-col>
    <v-col
      v-for="(article, i) in newsArticles"
      :key="i"
      cols="12"
      lg="4"
      sm="6"
      align-self="stretch"
    >
      <NewsArticleCard :article="article" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import NewsArticleCard from '@/components/NewsArticleCard.vue'
import { IContentDocument } from '@nuxt/content/types/content'

type Data = {
  newsArticles: IContentDocument[]
}

export default Vue.extend<Data, unknown, unknown, unknown>({
  components: { NewsArticleCard },
  async asyncData({ $content }) {
    const articles = await $content('news').sortBy('createdAt', 'desc').fetch()
    return {
      newsArticles: Array.isArray(articles) ? articles : [articles],
    }
  },
  data() {
    return {
      newsArticles: [],
    }
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
}
</style>
