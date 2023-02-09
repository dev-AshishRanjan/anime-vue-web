<template>
  <div class="home">
    <SearchBar v-model="data" :type="1" />
    <!-- <h2>{{ data }}</h2> -->
    <ErrorPage v-if="!data" />
    <MultiPage :data="data" :cardStyle="1" v-if="data" />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/searchBar.vue'
import MultiPage from '@/components/pages.vue'
import ErrorPage from '@/components/ErrorPage.vue'
import '@/_global.scss'

export default {
  name: 'ImageView',
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
