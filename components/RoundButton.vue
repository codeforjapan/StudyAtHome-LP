<template>
  <a :href="url">
    <button class="RoundButton">{{ name }}</button>
  </a>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
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
.RoundButton {
  background: $base-blue;
  color: $white;
  border-radius: 24px;
  width: 200px;
  height: 48px;
  transition: 0.3s;
  font-family: Noto Sans CJK JP;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 180%;
  align-items: center;
  text-align: center;
  letter-spacing: 0.03em;
}
.RoundButton:hover {
  opacity: 0.5;
  transition: 0.3s;
}
.RoundButton:focus {
  outline: none;
}
</style>
