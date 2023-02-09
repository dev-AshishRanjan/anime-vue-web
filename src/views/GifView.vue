<template>
  <div class="home">
    <SearchBar v-model="data" :type="2" />
    <!-- <h2>{{ data }}</h2> -->
    <ErrorPage v-if="!data" />
    <MultiPage :data="data" :cardStyle="2" v-if="data" />
    <!-- <MultiPage :data="data" :cardStyle="2" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/searchBar.vue'
import MultiPage from '@/components/pages.vue'
import ErrorPage from '@/components/ErrorPage.vue'

export default {
  name: 'GifView',
  data: function () {
    return {
      data: ''
    }
  },
  components: {
    SearchBar,
    MultiPage,
    ErrorPage
  }
}
</script>
