<template>
  <div class="page" v-if="cardStyle === 1">
    <ImageCard v-for="(ele, i) in data" :key="i" :data="ele" />
  </div>
  <div class="page" v-if="cardStyle === 2">
    <GifCard v-for="(ele, i) in data" :key="i" :data="ele" />
  </div>
</template>

<script>
import ImageCard from '@/components/ImageCard.vue'
import GifCard from '@/components/GifCard.vue'

export default {
  name: 'MultiPage',
  props: {
    data: Object,
    cardStyle: Number
  },
  components: {
    ImageCard,
    GifCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/global';

@mixin flexCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}

.page {
  margin: 0;
  padding: 0;
  @include flexCenter;
  flex-wrap: wrap;
  min-height: 100vh;
  width: 100%;
  background: var(--color-1);
  overflow-x: hidden;
}
</style>
