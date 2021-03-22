<template>
  <div id="app">
    <Table :endpoint="this.tableUrl" :tableColumns="columns" />
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
        columns: [
          { name: "Name", order: 2, propertyPath: "name" },
          { name: "#", order: 1, propertyPath: "id" },
          { name: "Email", order: 3, propertyPath: "email" },
          { name: "Company name", order: 5, propertyPath: "company.name" },
          { name: "City", order: 4, propertyPath: "address.city" },
          { name: "Website", order: 7, propertyPath: "website" },
          { name: "Phone", order: 6, propertyPath: "phone" },
        ]
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
