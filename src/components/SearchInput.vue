<template>
  <div class="form-group mr-2 ml-2">
    <div class="row">
      <div class="col offset-md-2 col-md-6">
        <input
          v-model="searchPhrase"
          @keyup.enter="searchTable"
          type="text"
          class="form-control"
          id="searchField"
          aria-describedby="searchHelp"
          placeholder="Enter search phrase"
        />
      </div>
      <div class="col col-md-2">
        <button
          type="submit"
          class="btn btn-primary btn-block"
          @click="searchTable"
        >
          Search
        </button>
      </div>
    </div>
    <small id="searchHelp" class="form-text text-muted"
      >Enter phrase and hit enter to search</small
    >
  </div>
</template>

<script>
  export default {
    name: "SearchInput",
    data() {
      return {
        searchPhrase: ''
      }
    },
    methods: {
      searchTable() {
        this.$emit('searchTable', this.searchPhrase);
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
