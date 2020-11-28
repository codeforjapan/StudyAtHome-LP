<template>
  <v-card flat class="ContriCard" color="#ffffff00">
    <v-avatar size="100px">
      <picture>
        <source type="image/webp" :srcset="webpPath" />
        <img :src="iconPath" />
      </picture>
    </v-avatar>
    <span class="ContriText ContriName">{{ name }}</span>
    <span class="ContriText ContriRole">{{ role }}</span>
  </v-card>
</template>

<script>
export default {
  props: {
    iconPath: {
      type: String,
      required: true,
    },
    webpPath: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.ContriCard {
  display: inline-block;
  width: 100px;
  height: 145px;
  picture {
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid $border-gray;
    box-sizing: border-box;
  }
}
.ContriText {
  width: 100%;
  display: flex;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 180%;
}
.ContriName {
  margin-top: 4px;
  font-weight: bold;
  font-size: 15px;
}
.ContriRole {
  font-weight: normal;
  font-size: 11px;
}
</style>
