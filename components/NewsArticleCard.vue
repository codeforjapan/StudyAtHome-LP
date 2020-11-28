<template>
  <v-card tag="article" elevation="0" :ripple="false" nuxt :to="article.path">
    <v-img
      :src="`/news/${article.thumbnailFilename}`"
      alt=""
      :aspect-ratio="340 / 200"
      contain
    />
    <v-card-subtitle class="NewsList-Card-DateTime">
      <time :datetime="article.createdAt">
        {{ formatDate(article.createdAt) }}
      </time>
    </v-card-subtitle>
    <v-card-title class="NewsList-Card-Title">
      <h2>{{ article.title }}</h2>
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import dayjs from 'dayjs'
import { IContentDocument } from '@nuxt/content/types/content'

type Methods = {
  formatDate(date: Date): string
}

type Props = {
  article: IContentDocument
}

export default Vue.extend<unknown, Methods, unknown, Props>({
  props: {
    article: {
      type: Object as PropType<IContentDocument>,
      required: true,
    },
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
