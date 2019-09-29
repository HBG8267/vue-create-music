<template>
  <div class="tabwrap">
    <cube-tab-bar
      ref="tabNav"
      v-model="tabindex"
      show-slider
      inline
      @change="changeTab">
      <cube-tab v-for="(item, index) in tabs" :label="item.label" :value="index" :key="index">
        <!-- name为icon的插槽 -->
        <!-- 默认插槽 -->
        {{item.label}}
      </cube-tab>
    </cube-tab-bar>
    <div class="tab-slide-container">
      <cube-slide
        ref="slide"
        :loop=false
        :initial-index="slideindex"
        :auto-play=false
        :show-dots=false
        :options="slideOptions"
        @change="changePage"
      >
        <!-- 关注 -->
        <cube-slide-item>
          <my></my>
        </cube-slide-item>
        <!-- 推荐 -->
        <cube-slide-item>
            <found></found>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>
<script>
import found from '../found/found.vue'
import my from '../my/my.vue'
export default {
  name: 'tab',
  data: function () {
    return {
      tabs: [
        {
          label: 'my'
        },
        {
          label: 'found'
        }
      ],
      tabindex: 1, // 初始tab栏index
      slideindex: 1, // 初始slideItem index
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        /* lock y-direction when scrolling horizontally and  vertically at the same time */
        directionLockThreshold: 0
      },
      scrollOptions: {
        /* lock x-direction when scrolling horizontally and  vertically at the same time */
        directionLockThreshold: 0
      },
      renderdata: [
        'a', 'b'
      ]
    }
  },
  computed: {
  },
  methods: {
    changeTab (value) {
      console.log('change =', value)
      this.slideindex = value
    },
    scroll (pos) {
      console.log('scroll')
      const x = Math.abs(pos.x)
      const tabItemWidth = this.$refs.tabNav.$el.clientWidth
      const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
      const deltaX = x / slideScrollerWidth * tabItemWidth
      this.$refs.tabNav.setSliderTransform(deltaX)
    },
    changePage (value) {
      this.tabindex = value
    }
  },
  components: {
    found,
    my
  }
}
</script>
<style lang="stylus" scoped>
.tabwrap
  display: flex
  flex-direction: column
  width: 100%
  height: 100%
  .cube-tab-bar
    flex: 0 0 40px
  .tab-slide-container
    flex: 1
    .cube-slide-item
      height: 100%
</style>
