<template>
  <section :class="[backIsGray ? 'GrayBackGround' : 'WhiteBackGround']">
    <header>
      <span v-if="subTitle" class="SubTitle">{{ subTitle }}</span>
      <h2 class="MainTitle">{{ title }}</h2>
    </header>
    <p v-if="desc" class="Desc">{{ desc }}</p>
    <slot name="contents" />
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: false,
      default: '',
    },
    desc: {
      type: String,
      required: false,
      default: '',
    },
    backIsGray: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.GrayBackGround,
.WhiteBackGround {
  margin: 0;
  padding: 30px 0 40px 0;
  color: $base-gray;
  text-align: center;

  .MainTitle {
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 0.03em;
    padding: 10px 0 25px;
    @include largerThan($small) {
      font-size: 25px;
    }
  }

  .SubTitle {
    color: $base-blue;
    font-weight: bold;
    font-size: 15px;
    letter-spacing: 0.03em;
  }

  .Desc {
    font-weight: normal;
    font-size: 13px;
    letter-spacing: 0.03em;
    line-height: 150%;
    white-space: pre-wrap;
  }
}

.GrayBackGround {
  background-color: $light-gray;
  @include largerThan($small) {
    border: 1px solid $border-gray;
  }
}

.WhiteBackGround {
  background-color: $white;
}
</style>
