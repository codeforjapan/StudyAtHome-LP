<template>
  <v-card outlined :href="url" class="ImageCard">
    <div class="ImageContent">
      <v-img :src="imgPath" />
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    imgPath: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.ImageCard {
  width: 340px;
  height: 80px;
  margin: 0 auto;
  text-align: center;
}
.ImageCard .ImageContent {
  width: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
}
</style>
