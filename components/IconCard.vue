<template>
  <v-card class="IconCard" height="295px">
    <div class="Icon">
      <div class="Icon-In">
        <v-icon color="#fff" size="23" class="MDI">
          {{ iconName }}
        </v-icon>
      </div>
    </div>
    <p class="Title">{{ title }}</p>
    <p class="Desc">{{ desc }}</p>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.IconCard {
  text-align: center;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);

  .Icon {
    position: relative;
    width: 64px;
    padding-top: 36px;
    margin-left: auto;
    margin-right: auto;

    &-In {
      text-align: center;
      width: 100%;
      padding-top: 100%;
      border-radius: 50%;
      background-color: $base-blue;
      .MDI {
        position: absolute;
        margin-left: -10px;
        margin-top: -43px;
      }
    }
  }

  .Title {
    margin-top: 23px;
    font-weight: bold;
    font-size: 16px;
    line-height: 170%;
    letter-spacing: 0.05em;
    white-space: pre-wrap;
  }

  .Desc {
    margin-top: 15px;
    font-weight: normal;
    font-size: 13px;
    line-height: 150%;
    letter-spacing: 0.05em;
    white-space: pre-wrap;
  }
}
</style>
