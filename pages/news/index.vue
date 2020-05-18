<template>
  <v-layout column justify-center align-center>
    <h1 class="title text-center justify-center">
      <span class="title_eng">News</span>
      <span class="title_jp">最新情報</span>
    </h1>
    <v-row justify="center">
      <v-col v-for="(item, i) in items" :key="i" cols="12" sm="6">
        <article>
          <v-card elevation="0">
            <v-img
              :src="item.thumbnail.url"
              alt="サムネイル画像"
              width="100%"
            />
            <v-card-subtitle class="card_subtitle">
              <nuxt-link class="cardUrl" :to="'news/' + item.id">
                <time :datetime="item.createdAt">{{
                  formatDate(item.createdAt)
                }}</time>
              </nuxt-link>
            </v-card-subtitle>
            <v-card-title class="card_title">
              <nuxt-link class="cardUrl" :to="'news/' + item.id">
                <h2>{{ item.title }}</h2>
              </nuxt-link>
            </v-card-title>
          </v-card>
        </article>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import dayjs from 'dayjs'

type DataType = {
  items: NewsType[]
}

type NewsListType = {
  contents: NewsType[]
  totalCount: number
  offset: number
  limit: number
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
  name: 'Index',
  async asyncData() {
    const { data } = await axios.get<NewsListType>(
      'https://studyathome.microcms.io/api/v1/news',
      {
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )
    return {
      items: data.contents
    }
  },
  data(): DataType {
    return {
      items: [
        {
          id: '',
          createdAt: '',
          updatedAt: '',
          title: '',
          thumbnail: {
            url: ''
          },
          content: ''
        }
      ]
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
.title {
  margin: 17px auto;
  font-family: 'Noto Sans JP', sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 180%;

  align-items: center;
  text-align: center;
  letter-spacing: 0.03em;

  &_eng {
    color: #0071c2;
    display: block;
    font-size: 17px;
  }
  &_jp {
    font-size: 24px;
    display: block;
    color: #333333;
  }
}
.cardUrl {
  text-decoration: none;
  color: black;
}
.card_title {
  padding: 0 6px 4px 6px;
  letter-spacing: 0.03em;
  color: #212121;

  h2 {
    font-family: Noto Sans JP, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 180%;
  }
}
.card_subtitle {
  font-family: Noto Sans JP, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 180%;
  padding: 8px 6px 2px 6px;
  letter-spacing: 0.03em;
  color: #212121;
}
</style>
