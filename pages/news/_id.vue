<template>
  <v-layout column>
    <article>
      <div class="newsDetails">
        <span class="createdAt">
          <time datetime="item.createdAt">
            {{ formatDate(item.createdAt) }}
          </time>
        </span>
        <h1 class="newsTitle">{{ item.title }}</h1>
      </div>
      <v-img :src="item.thumbnail.url" alt="" />

      <div class="newsContent" v-html="item.content" />
    </article>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import axios from 'axios'
import dayjs from 'dayjs'

type DataType = {
  item: NewsType
}

type NewsType = {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  thumbnail: ThumbnailType
  content: string
}

type ThumbnailType = {
  url: string
}

export default Vue.extend({
  name: 'Id',
  async asyncData({ params }: Context) {
    const { data } = await axios.get<NewsType>(
      'https://studyathome.microcms.io/api/v1/news/' + params.id,
      {
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )
    return {
      item: data
    }
  },
  data(): DataType {
    return {
      item: {
        id: '',
        createdAt: '',
        updatedAt: '',
        title: '',
        thumbnail: {
          url: ''
        },
        content: ''
      }
    }
  },
  methods: {
    formatDate(date: string): string {
      return dayjs(date).format('YYYY.MM.DD')
    }
  }
})
</script>

<style lang="scss" scoped>
.newsDetails {
  margin: 17px 0 8px 0;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 0.05em;
  color: #424242;
}
.newsTitle {
  font-weight: bold;
  font-size: 20px;
  margin: 6px 0;
  letter-spacing: 0.03em;
}

.createdAt {
  margin: 4px 0;
}
.newsContent {
  margin: 25px 0 8px 0;
  font-size: 14px;
  letter-spacing: 0.03em;
}
</style>
