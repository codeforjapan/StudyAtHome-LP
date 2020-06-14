<template>
  <div class="MessageEffect">
    <span class="Rotate RotateLeft" />
    <span class="Message">{{ name }}</span>
    <span class="Rotate RotateRight" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.MessageEffect {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  align-items: center;
  display: flex;
}
.Message {
  white-space: pre-wrap;
  line-height: 150%;
  font-weight: bold;
  font-size: 15px;
  display: inline-block;
  align-items: center;
  text-align: center;
  letter-spacing: 0.03em;
}
.Rotate {
  align-items: center;
  width: 41.59px;
  height: 0px;
  display: inline-block;
  border: 1px solid #333333;
}
.RotateLeft {
  transform: rotate(62.82deg);
}
.RotateRight {
  transform: rotate(-62.82deg);
}
</style>
