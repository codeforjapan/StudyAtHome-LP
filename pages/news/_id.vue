<template>
  <v-layout column>
    <article>
      <div class="newsDetails">
        <span class="createdAt">
          <time datetime="item.createdAt">
            {{ createdAt }}
          </time>
        </span>
        <h1 class="newsTitle">{{ item.title }}</h1>
      </div>
      <v-img :src="item.thumbnail.url" alt="" width="100%" />

      <div class="news-content" v-html="item.content" />
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
  createdAt: string
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
      item: data,
      createdAt: dayjs(data.createdAt).format('YYYY.MM.DD')
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
      },
      createdAt: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.newsDetails {
  margin: 17px 0 8px 0;
  font-family: Noto Sans JP, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 120%;
  text-align: left;
  width: 100%;
  align-items: center;
  letter-spacing: 0.05em;
  color: #212121;
}
.newsTitle {
  font-family: Noto Sans JP, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 140%;
  margin: 6px 0;
  letter-spacing: 0.03em;
}

.createdAt {
  margin: 4px 0;
}
.news-content {
  margin: 24px 0 8px 0;
  font-family: Noto Sans JP, sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 190%;
  align-items: center;
  letter-spacing: 0.03em;
}
</style>
