<template>
  <div class="circle">
    <div class="circle-in">
      <img src="/svgs/logo_main.svg" alt="おうちで時間割" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.circle {
  width: 100%;
  overflow: hidden;

  &-in {
    position: relative;
    padding-top: 90%;
    width: 100%;
    margin-top: -89%;
    @include lessThan($small) {
      padding-top: 200%;
      width: 200%;
      margin-top: -196%;
      margin-left: -50%;
    }
    border-radius: 50%;
    background: $base-blue;
    text-align: center;

    > img {
      margin-bottom: 4%;
      @include largerThan($small) {
        width: 10vw;
      }
    }
  }
}
</style>
