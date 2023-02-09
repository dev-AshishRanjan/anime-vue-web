<template>
  <div class="page">
    Arigato Baka
  </div>
</template>

<script>

export default {
  name: 'ErrorPage',
  props: {
    data: Object
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
  color: var(--color-4);
  overflow-x: hidden;
  font-size: 2rem;
  font-weight: 700;
}
</style>
