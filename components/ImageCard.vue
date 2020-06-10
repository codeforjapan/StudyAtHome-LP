<template>
  <v-card class="ImageCard" :href="url">
    <div class="ImageContent">
      <v-img :src="imgpath"></v-img>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    imgpath: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
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
