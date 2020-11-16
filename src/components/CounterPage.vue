<template>
  <div>
    <h2>COUNTER</h2>

    <p>The current count is {{ this.$store.state.count }}</p>
    <button v-on:click="update(1)">+</button>
    <button v-on:click="update(-1)">-</button>
  </div>
</template>

<script>
export default {
  name: 'CounterPage',
  props: {
  },
  methods: {
    update(change) {
      this.$store.state.count += change;
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
