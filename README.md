# StudyAtHome-LP

> Study At Home Landing Page

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 最新情報（News）を更新するときは

1. `content/news/20200000-example.md.template` をコピーし、 `YYYYMMDD-<article-slug>.md` に名前を変える
2. ファイル冒頭にタイトル・投稿日時（ISO 8601）・サムネイルのファイル名を設定
    ```
    ---
    title: 記事のタイトルを入力
    createdAt: 2020-01-01T00:00:00.000Z
    thumbnailFilename: 202000000-thumbnail.png
    ---
    ```
3. `static/news/` 以下にサムネイルファイルを配置（ファイル名は上記で指定したものと合わせる）
4. 記事をMarkdown形式で執筆する。見出しはレベル2（ `## 見出し2` ）より下位のものを使う。
