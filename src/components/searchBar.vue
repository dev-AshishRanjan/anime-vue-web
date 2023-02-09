<template>
  <div class="searchbar">
    <!-- <h1>{{ modelValue }}</h1> -->
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model='query' placeholder="Query">
      <input type="number" v-model='amount' placeholder="Amount">
      <button type="submit" v-show="false">ok</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data: function () {
    return {
      query: '',
      amount: '',
      data: ''
    }
  },
  methods: {
    handleSubmit: function () {
      // data fetching
      fetch(`https://nekos.best/api/v2/search?query=${this.query}&type=${this.type}&amount=${this.amount}`).then(res => res.json()).then(res => {
        this.data = res
        console.log(res)
        this.$emit('update:modelValue', this.data.results)
        if (res.code) {
          alert(res.errors.query)
        }
      })
      console.log(this.data)
      console.log(this.query, this.amount)
    }
  },
  props: {
    modelValue: Object,
    type: Number
  },
  created: function () {
    fetch(`https://nekos.best/api/v2/search?query=hero&type=${this.type}&amount=21`).then(res => res.json()).then(res => {
      this.data = res
      console.log(res)
      this.$emit('update:modelValue', this.data.results)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/global';

.searchbar {
  background: var(--color-1);
  padding: 0.5rem;
  border-bottom: 1px solid var(--color-4);

  // box-shadow: 3px 3px 5px gray;
  input {
    outline: none;
    border: 1px solid var(--color-3);
    color: var(--color-4);
    margin: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    background: transparent;
    backdrop-filter: blur(0.5rem);
  }
}

@media (max-width: 450px) {
  .searchbar {
    padding: 0.2rem;

    input {
      margin: 0.5rem;
    }
  }
}
</style>
