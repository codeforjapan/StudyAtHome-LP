<template>
  <div class="Index">
    <v-row class="Logo">
      <circle-logo />
    </v-row>
    <v-row class="Title">
      <v-col cols="12" sm="12" md="6" lg="6">
        <h1 class="MainTitle">
          子どもの学びに<br />
          デジタルの活用を
        </h1>
        <p class="SubTitle">
          臨時休校期間と今後の学習に向けて<br class="Sp-Br" />
          簡単に楽しく学べる環境を<br />
          今だから、みんなでつくろう。
        </p>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="6">
        <start-button
          class="StartButton"
          :name="'はじめる'"
          url="https://app.studyathome.jp/"
        />
      </v-col>
    </v-row>
    <horizontal-photos class="HorizontalPhotos" />
    <issue-card
      :title="'こんな課題ありませんか?'"
      :items="[
        '急な休校で授業準備がやり直しに...',
        '分散登校の準備などで大変',
        '学校での授業と家庭学習をもっと連動した学びにしたい',
      ]"
    />
    <back-template
      :title="'おうちの時間割でできること'"
      :sub-title="'How it works?'"
      :desc="'家庭学習用の時間割が簡単に作れて、子どもたちも\nスマホで簡単に見ることができます'"
      :back-is-gray="false"
    >
      <template v-slot:contents>
        <v-row class="IconCards">
          <v-col cols="12" sm="12" md="4" lg="4">
            <icon-card
              :title="'学習計画表・時間割を\nかんたんに作成'"
              :icon-name="'mdi-calendar-text-outline'"
              :desc="'家庭学習中の子どもたちにむけて時間割を\n簡単に作成して共有できる'"
            />
          </v-col>
          <v-col cols="12" sm="12" md="4" lg="4">
            <icon-card
              :title="'学習教材や課題も合わせて\n生徒に届けられる'"
              :icon-name="'mdi-clipboard-text-multiple-outline'"
              :desc="'NHK for schoolの動画を\n時間割に紐付けて共有できるので\n生徒が勉強方法に困らない!'"
            />
          </v-col>
          <v-col cols="12" sm="12" md="4" lg="4">
            <icon-card
              :title="'家庭学習もスマホ・PCを\n使ってらくらく'"
              :icon-name="'mdi-cellphone-sound'"
              :desc="'生徒はスマホやPCを利用して\n時間割や課題を確認できるので\n家庭学習でも安心!'"
            />
          </v-col>
        </v-row>
        <v-row class="MessageEffect">
          <message-effect :title="'お気軽にお試しください!'" />
        </v-row>
        <v-row class="RoundButton">
          <RoundButton
            :name="'利用開始する'"
            url="https://app.studyathome.jp/"
          />
        </v-row>
      </template>
    </back-template>
    <back-template
      :title="'生徒の利用する画面例'"
      :sub-title="'Screenshots'"
      :back-is-gray="true"
    >
      <template v-slot:contents>
        <image-carousel />
      </template>
    </back-template>
    <back-template
      :title="'最新情報'"
      :sub-title="'News'"
      :back-is-gray="false"
    >
      <template v-slot:contents>
        <v-container>
          <v-row justify="center" align="center">
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
            <v-col cols="12">
              <v-btn
                class="ReadAllNewsButton"
                color="#0071c2"
                text
                large
                nuxt
                to="/news/"
              >
                <span>すべて見る</span>
                <v-icon class="pl-1">mdi-arrow-right</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </back-template>
    <back-template
      :title="'データ提供'"
      :desc="'時間割にコンテンツへのリンクを掲載できるよう、\nデータを共有いただける教材コンテンツ\n提供企業・団体の賛同をお待ちしています。'"
      :back-is-gray="false"
    >
      <template v-slot:contents>
        <v-row>
          <image-card
            img-path="/NfS_logo.png"
            url="https://www.nhk.or.jp/school/"
          />
        </v-row>
      </template>
    </back-template>
    <back-template :title="'おうちで時間割チーム'" :back-is-gray="true">
      <template v-slot:contents>
        <v-row>
          <image-card img-path="/CfJLogo.png" url="https://code4japan.org" />
        </v-row>
        <v-row class="Contributors" justify="center">
          <v-col cols="4" sm="4" md="3" lg="3">
            <contributor-card
              :name="'武貞 真未'"
              :role="'企画・広報'"
              icon-path="/takesada.png"
              webp-path="/takesada.webp"
            />
          </v-col>
          <v-col cols="4" sm="4" md="3" lg="3">
            <contributor-card
              :name="'林 敬子'"
              :role="'UIUXデザイナー'"
              icon-path="/hayashi.png"
              webp-path="/hayashi.webp"
            />
          </v-col>
          <v-col cols="4" sm="4" md="3" lg="3">
            <contributor-card
              :name="'吉沢 太祐'"
              :role="'エンジニア'"
              icon-path="/yoshizawa.png"
              webp-path="/yoshizawa.webp"
            />
          </v-col>
          <v-col cols="4" sm="4" md="3" lg="3">
            <contributor-card
              :name="'福田 せいじ'"
              :role="'エンジニア'"
              icon-path="/fukuda.png"
              webp-path="/fukuda.webp"
            />
          </v-col>
          <v-col cols="4" sm="4" md="3" lg="3">
            <contributor-card
              :name="'渡邊 響'"
              :role="'エンジニア'"
              icon-path="/watanabe.png"
              webp-path="/watanabe.webp"
            />
          </v-col>
          <v-col cols="4" sm="4" md="3" lg="3">
            <contributor-card
              :name="'芦田 裕飛'"
              :role="'エンジニア'"
              icon-path="/ashida.png"
              webp-path="/ashida.webp"
            />
          </v-col>
          <v-col cols="4" sm="4" md="3" lg="3">
            <contributor-card
              :name="'池田 達哉'"
              :role="'エンジニア'"
              icon-path="/ikeda.png"
              webp-path="/ikeda.webp"
            />
          </v-col>
          <v-col cols="4" sm="4" md="3" lg="3">
            <contributor-card
              :name="'大杉 洸輝'"
              :role="'デザイナー'"
              icon-path="/osugi.png"
              webp-path="/osugi.webp"
            />
          </v-col>
        </v-row>
        <v-row>
          <image-card img-path="/IL_logo.svg" url="https://info-lounge.jp/" />
        </v-row>
        <v-row class="Contributors" justify="center">
          <v-col cols="4" sm="4" md="3" lg="3">
            <contributor-card
              :name="'肥田野 正輝'"
              :role="'エンジニア'"
              icon-path="/IL_hidano.png"
              webp-path="/IL_hidano.webp"
            />
          </v-col>
          <v-col cols="4" sm="4" md="3" lg="3">
            <contributor-card
              :name="'伊藤 宗太'"
              :role="'エンジニア'"
              icon-path="/IL_itou.png"
              webp-path="/IL_itou.webp"
            />
          </v-col>
          <v-col cols="4" sm="4" md="3" lg="3">
            <contributor-card
              :name="'今村 かずき'"
              :role="'エンジニア'"
              icon-path="/IL_imamura.png"
              webp-path="/IL_imamura.webp"
            />
          </v-col>
        </v-row>
        <v-row class="MessageEffect">
          <message-effect
            :title="'おうちで時間割について質問等があれば\n気軽にお問い合わせください!'"
          />
        </v-row>
        <v-row class="RoundButton">
          <RoundButton
            :name="'お問い合わせはこちら'"
            url="https://forms.gle/G91PJ7T8ipTtYeGA6"
          />
        </v-row>
      </template>
    </back-template>
    <back-template
      :title="'私達と一緒におうちで時間割を\n作っていきませんか？'"
      :sub-title="'Join us'"
      :desc="'おうちで時間割は、学びのオープンデータ・\nオープンソース化を目指しています。\n開発元であるCode for Japanはさらなる機能充実の\nため、技術者を募集しております。\nまずは気軽にSlackチャンネルにご参加ください。'"
      :back-is-gray="false"
    >
      <template v-slot:contents>
        <v-btn
          outlined
          rounded
          large
          class="SlackButton"
          href="https://cfjslackin.herokuapp.com/"
          target="_blank"
          rel="noopener"
        >
          <picture>
            <source type="image/webp" srcset="/Slack_Mark_Web.webp" />
            <img src="/Slack_Mark_Web.png" alt="slack" />
          </picture>
          Slackに参加する
        </v-btn>
      </template>
    </back-template>
  </div>
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
    const articles = await $content('news')
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()
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
.Index {
  color: $base-blue;
  background-color: $white;
  text-align: center;

  font-style: normal;
  font-weight: bold;
  overflow: hidden;

  .Title {
    .MainTitle {
      margin-top: 14px;
      line-height: 130%;
      font-size: 28px;
      letter-spacing: 0.05em;

      @include largerThan($medium) {
        margin-left: 6vw;
        text-align: left;
        font-size: 54px;
        @include largerThan($large) {
          margin-left: 20vw;
        }
      }
    }

    .SubTitle {
      letter-spacing: 0.05em;
      margin-top: 16px;
      line-height: 180%;
      font-size: 13px;

      @include largerThan($medium) {
        margin-left: 6vw;
        text-align: left;
        font-size: 16px;
        @include largerThan($large) {
          margin-left: 20vw;
        }
      }
    }

    .StartButton {
      @include largerThan($medium) {
        margin-top: 170px;
        margin-right: 2vw;
        @include largerThan($large) {
          margin-right: 15vw;
        }
      }
    }
  }

  .HorizontalPhotos {
    margin-top: 27px;
  }

  .IconCards {
    margin: 0;

    @include largerThan($large) {
      margin: 0 13vw 0 13vw;
    }

    @include lessThan($medium) {
      margin: 0 17px 0 17px;
    }
  }

  .MessageEffect {
    margin-top: 40px;
  }

  .RoundButton {
    margin-top: 30px;
    margin-bottom: 60px;
  }

  .ReadAllNewsButton {
    font-size: 16px;
    font-weight: 600;
  }

  .Contributors {
    @include largerThan($medium) {
      margin-left: 20vw;
      margin-right: 20vw;
      @include largerThan($large) {
        margin-left: 30vw;
        margin-right: 30vw;
      }
    }
  }

  .SlackButton {
    color: $base-blue;
    font-weight: bold;
    transition: 0.3s;
    text-transform: none;
    img {
      height: 48px;
    }
  }

  .SlackButton:hover {
    opacity: 0.5;
  }

  .Sp-Br {
    display: block;
    @include largerThan($medium) {
      display: none;
    }
  }
}
</style>
