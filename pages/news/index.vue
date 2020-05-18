<template>
  <v-layout column justify-center align-center>
    <div class="title text-center">
      <h2 class="title_eng">News</h2>
      <h1 class="title_jp">最新情報</h1>
    </div>
    <v-row justify="center">
      <v-col v-for="(item, i) in items" :key="i" cols="12" sm="6">
        <v-card elevation="0">
          <v-img :src="item.thumbnail.url" alt="サムネイル画像" width="100%" />
          <v-card-subtitle class="card_subtitle">
            <nuxt-link class="cardUrl" :to="'news/' + item.id">
              <time :datetime="item.createdAt">{{
                formatDate(item.createdAt)
              }}</time>
            </nuxt-link>
          </v-card-subtitle>
          <v-card-title class="card_title">
            <nuxt-link class="cardUrl" :to="'news/' + item.id">
              {{ item.title }}
            </nuxt-link>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import axios from 'axios'
import dayjs from 'dayjs'
export default {
  name: 'Index',
  async asyncData() {
    const { data } = await axios.get(
      'https://studyathome.microcms.io/api/v1/news',
      {
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )
    return {
      items: data.contents
    }
  },
  data() {
    return {
      items: []
    }
  },
  methods: {
    formatDate(date) {
      return dayjs(date).format('YYYY.MM.DD')
    }
  }
}
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
    font-size: 17px;
  }
  &_jp {
    font-size: 24px;
    color: #333333;
  }
}
.cardUrl {
  text-decoration: none;
  color: black;
}
.card_title {
  font-family: Noto Sans JP, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 180%;
  padding: 0 6px 4px 6px;
  letter-spacing: 0.03em;
  color: #212121;
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
