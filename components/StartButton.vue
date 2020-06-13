<template>
  <v-btn rounded :href="url">{{ name }}</v-btn>
</template>

<script>
export default {
  props: {
    name: {
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
.v-btn {
  background-color: #ffdb6c !important;
  color: #424242;
  width: 268px;
  height: 60px !important;
  transition: 0.3s;
  font-family: Noto Sans CJK JP;
  font-weight: bold;
  letter-spacing: 0.03em;
  font-size: 20px;
  line-height: 180%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
