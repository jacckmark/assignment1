<template>
  <div class="container-fluid">
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
    <div class="row justify-content-center" v-if="usersList.length">
      <div class="col col-md-10">
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
          <tbody v-for="user of usersList" :key="user.id">
            <tr>
              <th scope="row">{{ user.id }}</th>
              <td>{{ user.name }}</td>
              <td>
                <a :href="`mailto:${user.email}`">{{ user.email }}</a>
              </td>
              <td>{{ user.company.name }}</td>
              <td>{{ user.address.city }}</td>
              <td>{{ user.website }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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
        paginationIsOn: this.pagination,
        usersList: []
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
      pagination: {
        type: Boolean,
        default: false
      },
      sorting: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.getUsers(this.endpoint);
    },
    methods: {
      getUsers(url) {
        this.axios.get(url).then(res => {
          this.usersList = res.data;
        }).catch(err => console.log(err))
      },
      toggleSort() {
        this.sortIsOn = !this.sortIsOn;
      },
      toggleSearch() {
        this.searchIsOn = !this.searchIsOn;
      },
      togglePagin() {
        this.paginationIsOn = !this.paginationIsOn;
      }
    },
    computed: {

    }
  }
</script>

<style lang="scss" scoped></style>
