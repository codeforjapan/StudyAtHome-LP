<template>
  <v-btn rounded x-large :href="url" target="_blank" rel="noopener">{{
    name
  }}</v-btn>
</template>

<script>
export default {
  props: {
    name: {
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
.v-btn {
  margin-left: auto;
  margin-right: auto;
  background-color: $base-blue !important;
  color: $white;
  width: 200px;
  transition: 0.3s;
  font-weight: bold;
  font-size: 15px;
}
.RoundButton:hover {
  opacity: 0.5;
  transition: 0.3s;
}
.RoundButton:focus {
  outline: none;
}
</style>
