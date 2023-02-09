<template>
  <div class="Icard" v-if="data">
    <a :href="data.url" target="_blank" download="output.png" title="Click to Preview"><img :src="data.url" alt=""></a>
    <!-- <img :src="data.url" alt=""> -->
    <div class="footer">
      <a :href="data.artist_href" target="_blank" title="artist">{{ data.artist_name }}</a>
      <a :href="data.source_url" target="_blank" class="source" title="source">Source</a>
      <!-- <a :href="data.url" target="_blank" download="output.png">Preview</a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
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

.Icard {
  @include flexCenter;
  flex-direction: column;
  width: 30%;
  max-width: 400px;
  padding: 1rem;
  margin: 1rem;
  transition: all 0.3s ease-in-out;
  background: var(--color-2);
  border-radius: 0.3rem;
  overflow-x: hidden;

  &:hover {
    box-shadow: 0 2px 7px 2px gray;
  }

  a {
    width: 110%;
    @include flexCenter;

    img {
      height: 25rem;
      width: 110%;
    }
  }

  .footer {
    width: 100%;
    @include flexCenter;
    justify-content: space-between;

    a {
      margin-top: 1rem;
      text-decoration: none;
      color: var(--color-4);
      max-width: 40%;
    }

    .source {
      color: var(--color-4);
      background: var(--color-3);
      padding: 0.5rem;
      border-radius: 0.2rem;
    }
  }
}

@media (max-width: 450px) {
  .Icard {
    width: 100%;

    a {
      width: 115%;
      @include flexCenter;

      img {
        height: 25rem;
        width: 110%;
      }
    }
  }
}
</style>
