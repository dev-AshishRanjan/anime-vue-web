<template>
  <nav>
    <router-link to="/">Images</router-link>
    <router-link to="/gifs">GIFs</router-link>
    <button @click="toggleMode" class="source">Toogle Mode</button>
  </nav>
  <router-view />
</template>

<script>
export default {
  data: function () {
    return {
      mode: false
    }
  },
  methods: {
    toggleMode: function () {
      this.mode = !this.mode
      if (this.mode) {
        document.querySelector('body').classList.add('custom-dark')
        document.querySelector('body').classList.remove('custom-light')
      } else {
        document.querySelector('body').classList.add('custom-light')
        document.querySelector('body').classList.remove('custom-dark')
      }
    }
  },
  created: function () {
    document.querySelector('body').classList.add('custom-light')
  }
}
</script>

<style lang="scss">
@import './global';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'Montserrat', sans-serif;
}

nav {
  background: var(--color-1);
  padding: 1rem;

  a {
    text-decoration: none;
    font-weight: bold;
    color: var(--color-3);
    margin: 1rem;
    font-size: 1.5rem;

    &.router-link-exact-active {
      color: var(--color-4);
    }
  }

  .source {
    position: fixed;
    right: 1rem;
    top: 5rem;
    color: var(--color-4);
    background: var(--color-2);
    padding: 0.5rem;
    border-radius: 0.2rem;
    border: none;
    z-index: 3;
  }
}
</style>
