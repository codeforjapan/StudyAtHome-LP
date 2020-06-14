<template>
  <div :class="[backIsGray ? 'GrayBackGround' : 'WhiteBackGround']">
    <p v-if="subTitle" class="SubTitle">{{ subTitle }}</p>
    <p :class="[subTitle ? 'MainTitle' : 'MainTitle-NoSubTitle']">
      {{ title }}
    </p>
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
  }
}

.GrayBackGround {
  background-color: $light-gray;
}

.WhiteBackGround {
  background-color: $white;
}
</style>
