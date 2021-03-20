<template>
  <div>
    <TableSettings
      :search-is-on="this.searchIsOn"
      :sort-is-on="this.sortIsOn"
      :pagination-is-on="this.paginationIsOn"
      @sortToggled="toggleSort"
      @paginToggled="togglePagin"
      @searchToggled="toggleSearch"
      class="mb-3"
    />
    <SearchInput v-show="this.searchIsOn" />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Company name</th>
          <th scope="col">City</th>
          <th scope="col">Website</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import TableSettings from "./TableSettings";
  import SearchInput from "./SearchInput";
  export default {
    name: 'Table',
    components: {
      TableSettings, SearchInput
    },
    data() {
      return {
        searchIsOn: this.search,
        sortIsOn: this.sorting,
        paginationIsOn: this.pagination
      }
    },
    props: {
      endpoint: {
        type: String,
        required: true
      },
      search: {
        type: Boolean,
        default: false
      },
      sorting: {
        type: Boolean,
        default: false
      },
      pagination: {
        type: Boolean,
        default: false
      },
    },
    methods: {
      toggleSort() {
        this.sortIsOn = !this.sortIsOn;
      },
      toggleSearch() {
        this.searchIsOn = !this.searchIsOn;
      },
      togglePagin() {
        this.paginationIsOn = !this.paginationIsOn;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dupa {
    .kkk {
      background-color: red;
    }
  }
</style>
