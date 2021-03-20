<template>
  <div id="app">
    <Table :endpoint="this.tableUrl" />
  </div>
</template>

<script>
  import Table from "./components/Table";
  export default {
    name: "App",
    components: {
      Table,
    },
    data() {
      return {
        tableUrl: "https://jsonplaceholder.typicode.com/users",
      };
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
