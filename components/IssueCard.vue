<template>
  <v-card outlined class="IssueCard">
    <h2 class="IssueCard-title">{{ title }}</h2>
    <div class="IssueCard-list">
      <ul>
        <li v-for="item in items" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.IssueCard {
  margin: 16px;
  color: $dark-gray;
  background-color: $light-gray;

  &-title {
    margin-top: 29px;
    margin-bottom: 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 180%;
    letter-spacing: 0.03em;
  }

  &-list {
    display: flex;
    justify-content: center;
    li {
      position: relative;
      text-align: left;
      overflow: hidden;
      list-style: none;
      font-style: normal;
      font-size: 15px;
      font-weight: 500;
      line-height: 180%;
      letter-spacing: 0.03em;
      padding-left: 30px;
      padding-right: 10px;
      margin-bottom: 21px;
      background: url('/svgs/check_mark.svg') no-repeat left 0 top 2px;
    }
  }
}
</style>
