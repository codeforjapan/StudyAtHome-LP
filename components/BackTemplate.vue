<template>
  <div :class="[backIsGray ? 'GrayBackGround' : 'WhiteBackGround']">
    <p v-if="subTitle" class="SubTitle">{{ subTitle }}</p>
    <p :class="[subTitle ? 'MainTitle' : 'MainTitle-NoSubTitle']">
      {{ title }}
    </p>
    <p v-if="desc" class="Desc">{{ desc }}</p>
    <slot name="contents" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: false,
      default: ''
    },
    desc: {
      type: String,
      required: false,
      default: ''
    },
    backIsGray: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.GrayBackGround,
.WhiteBackGround {
  margin: 0;
  padding: 30px 0 40px 0;
  color: $base-gray;
  text-align: center;

  .MainTitle,
  .MainTitle-NoSubTitle {
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 0.03em;
    white-space: pre-wrap;
    margin-top: -10px;
    margin-bottom: 0;
    @include largerThan($small) {
      font-size: 25px;
    }
  }

  .MainTitle-NoSubTitle {
    margin-top: 50px;
  }

  .SubTitle {
    color: $base-blue;
    font-weight: bold;
    font-size: 15px;
    letter-spacing: 0.03em;
    margin-bottom: -30px;
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
