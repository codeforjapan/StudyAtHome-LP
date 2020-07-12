<template>
  <client-only>
    <div ref="carouselOuter" class="ImageCarousel-Outer">
      <div
        ref="carousel"
        class="ImageCarousel"
        :style="`width: calc(100% + ${carouselSlideWidth / 2}px)`"
      >
        <carousel
          :scroll-per-page="false"
          :navigation-enabled="true"
          :navigation-next-label="'next →'"
          :navigation-prev-label="'← prev'"
          :pagination-enabled="false"
          :per-page-custom="[
            [600, 3],
            [768, 5]
          ]"
        >
          <slide
            v-for="(item, index) in items"
            :key="index"
            class="ImageCarousel-Slide"
          >
            <picture ref="carouselImg">
              <source type="image/webp" :srcset="item.webpPath" />
              <img :src="item.filePath" alt="" />
            </picture>
          </slide>
          <slide class="ImageCarousel-Slide">
            <div
              :style="
                `width: ${carouselSlideWidth}px; height: ${carouselSlideHeight}px;`
              "
            />
          </slide>
        </carousel>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { filePath: '/start_page.png', webpPath: '/start_page.webp' },
        { filePath: '/owner-page-0.png', webpPath: '/owner-page-0.webp' },
        { filePath: '/screenshot3.png', webpPath: '/screenshot3.webp' }
      ],
      carouselSlideWidth: null,
      carouselSlideHeight: null,
      carouselSlideImgHeight: null
    }
  },
  mounted() {
    setTimeout(() => {
      this.handleSlideStyle()
      setTimeout(() => {
        this.handleNavigationWidth()
      })
    })
    window.addEventListener('resize', this.handleSlideStyle)
    window.addEventListener('resize', this.handleNavigationWidth)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleSlideStyle)
    window.removeEventListener('resize', this.handleNavigationWidth)
  },
  methods: {
    handleSlideStyle() {
      const carouselSlide = document.getElementsByClassName(
        'VueCarousel-slide'
      )[0]
      const carouselImg = this.$refs.carouselImg
      this.carouselSlideWidth = carouselSlide.clientWidth
      this.carouselSlideHeight = carouselSlide.clientHeight
      this.carouselSlideImgHeight = carouselImg.clientHeight
    },
    handleNavigationWidth() {
      const carouselOuter = this.$refs.carouselOuter
      const carouselInner = document.getElementsByClassName(
        'VueCarousel-inner'
      )[0]
      const navigation = document.getElementsByClassName(
        'VueCarousel-navigation'
      )[0]
      navigation.style.width = `${carouselOuter.clientWidth}px`
      carouselInner.style.height = 'initial'
    }
  }
}
</script>

<style lang="scss">
.ImageCarousel-Outer {
  overflow: hidden;
  height: 860px;
}
.ImageCarousel-Slide {
  padding-right: 8px;
}
.VueCarousel-navigation {
  display: flex;
  justify-content: space-between;
}
.VueCarousel-navigation-button {
  position: relative !important;
  top: 0 !important;
  transform: none !important;
}
</style>
