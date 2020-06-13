<template>
  <div class="HorizontalPhotos">
    <ul class="HorizontalPhotos-List">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="HorizontalPhotos-Item"
      >
        <img :src="item.filePath" alt="" class="HorizontalPhotos-Img" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { filePath: '/image01.jpg' },
        { filePath: '/image02.jpg' },
        { filePath: '/image03.jpg' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.HorizontalPhotos {
  position: relative;
  max-width: 600px;
  height: 110px;
  overflow: hidden;
  margin: 0 auto;
}
.HorizontalPhotos-List {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  list-style: none;
  padding: 0;
  width: 600px;
  height: 100%;

  @include lessThan($tiny) {
    width: 450px;
  }
}
.HorizontalPhotos-Item {
  position: relative;
  width: 33%;
  margin: 0 8px;

  &::before {
    content: '';
    display: block;
    padding-top: 60%;
  }
}
.HorizontalPhotos-Img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  object-fit: cover;
  max-width: 100%;
  height: auto;
}
</style>
