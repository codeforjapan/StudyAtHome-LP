<template>
  <div class="HorizontalPhotos">
    <ul class="HorizontalPhotos-List">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="HorizontalPhotos-Item"
      >
        <picture>
          <source
            type="image/webp"
            :srcset="item.webpPath"
            class="HorizontalPhotos-Img"
          />
          <img :src="item.filePath" alt="" class="HorizontalPhotos-Img" />
        </picture>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { filePath: '/image01.jpg', webpPath: '/image01.webp' },
        { filePath: '/image02.jpg', webpPath: '/image02.webp' },
        { filePath: '/image03.jpg', webpPath: '/image03.webp' },
      ],
    }
  },
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
}
</style>
