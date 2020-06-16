<template>
  <v-app class="app">
    <v-app-bar app flat color="#fff">
      <img src="/svgs/logo.svg" alt="おうちで時間割" class="header-logo" />
      <v-spacer />
      <v-btn
        outlined
        rounded
        class="header-button"
        url="https://app.studyathome.jp/"
      >
        はじめる
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid ma-0 pa-0>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer color="#fff">
      <v-row>
        <v-col cols="12" sm="7" md="8" lg="9" class="footer-over">
          <v-row>
            <v-col class="footer-over-left">
              <a href="#">
                サイトポリシー
              </a>
            </v-col>
            <v-col class="footer-over-center">
              <a href="#">
                お問い合わせ
              </a>
            </v-col>
            <v-col class="footer-over-right">
              <a href="#">
                運営団体
              </a>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="5" md="4" lg="3" class="footer-under">
          <v-row>
            <span>Code for Japan</span>
            <v-spacer />
            <img
              src="/svgs/footer_logo.svg"
              alt="おうちで時間割"
              class="footer-logo"
            />
          </v-row>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<style scoped lang="scss">
.app {
  max-width: 1920px;
  color: $base-gray;
  margin: 0 auto;
  background-color: inherit !important;
  font-family: 'Noto Sans JP', sans-serif;
}

.header-logo {
  margin-left: 0;
  @include largerThan($small) {
    margin-left: 10vw;
  }
}

.header-button {
  color: $base-blue;
  font-weight: bold;
  transition: 0.3s;
  @include largerThan($small) {
    margin-right: 10vw;
  }
}

.header-button:hover {
  opacity: 0.5;
}

.footer {
  &-over {
    font-weight: bold;
    font-size: 15px;
    letter-spacing: 0.05em;
    &-left,
    &-center,
    &-right {
      text-align: center;
      a {
        color: $base-gray;
        text-decoration: none;
      }
    }
    @include largerThan($small) {
      &-left {
        text-align: right;
      }
      &-center {
        text-align: center;
      }
      &-right {
        text-align: left;
      }
    }
  }
  &-under {
    margin-bottom: -10px;
    span {
      @include lessThan($small) {
        margin-top: 25px;
      }
    }
  }
  &-logo {
    margin-right: -4px;
    margin-bottom: -12px;
    @include largerThan($small) {
      margin-top: 10px;
    }
  }
}
</style>
