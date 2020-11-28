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
    <v-col cols="12">
      <div>
        <v-breadcrumbs class="Breadcrumb" divider=">" :items="breadcrumbItems">
          <template #item="{ item }">
            <v-breadcrumbs-item
              :exact="item.exact"
              :to="item.to"
              :disabled="item.disabled"
            >
              <template v-if="item.to === '/'">
                <v-icon class="Breadcrumb-HomeIcon" color="#0071c2" size="24px"
                  >mdi-home</v-icon
                ><span class="Breadcrumb-Label pl-1">{{ item.text }}</span>
              </template>
              <template v-else>
                <span class="Breadcrumb-Label">{{ item.text }}</span>
              </template>
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'
import { IContentDocument } from '@nuxt/content/types/content'

type BreadcrumbItem = {
  disabled: boolean
  exact: boolean
  link: boolean
  text: string | number
  to: string | object
}

type Data = {
  article: IContentDocument | null
  breadcrumbItems: BreadcrumbItem[]
}

type Methods = {
  formatDate(date: Date): string
}

export default Vue.extend<Data, Methods, unknown, unknown>({
  async asyncData({ $content, params }) {
    const article = (await $content(
      'news',
      params.id
    ).fetch()) as IContentDocument

    return {
      article,
      breadcrumbItems: [
        {
          exact: true,
          text: 'TOP',
          to: '/',
        },
        {
          exact: true,
          text: '最新情報',
          to: '/news/',
        },
        {
          exact: true,
          text: article.title,
          to: article.path,
        },
      ],
    }
  },
  data() {
    return {
      article: null,
      breadcrumbItems: [],
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

.Breadcrumb {
  display: inline-flex;
  padding: {
    top: 0;
    bottom: 0;
  }

  span {
    font-size: 15px;
    font-weight: 600;
    vertical-align: bottom;
  }

  &-HomeIcon {
    padding-bottom: 2px !important;
  }
}
</style>
