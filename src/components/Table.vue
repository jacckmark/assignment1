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
    <SearchInput v-show="this.searchIsOn" @searchTable="filterUsers($event)" />
    <div class="row justify-content-center" v-if="isUsersListNotEmpty">
      <div class="col col-md-10">
        <table class="table">
          <thead>
            <tr>
              <TableHeader
                v-for="(column, index) of sortedTableColumns"
                :key="index"
                :name="column.name"
                :isSortingOn="sortIsOn"
              />
            </tr>
          </thead>
          <tbody v-for="user of usersList" :key="user.id">
            <tr>
              <td
                v-for="(column, index) of sortedTableColumns"
                :key="index"
                scope="row"
              >
                <span
                  v-html="renderTableCell(user, column.propertyPath)"
                ></span>
              </td>
              <!-- <td>{{ user.name }}</td>
              <td>
                <a :href="`mailto:${user.email}`">{{ user.email }}</a>
              </td>
              <td>{{ user.company.name }}</td>
              <td>{{ user.address.city }}</td>
              <td>{{ user.website }}</td> -->
            </tr>
          </tbody>
        </table>
        <Paginator
          @changePage="getUsers(endpoint, $event)"
          :totalPages="totalPageAmount"
          v-show="paginationIsOn"
        />
      </div>
    </div>
    <div v-if="!isUsersListNotEmpty">
      nothing to show <font-awesome-icon :icon="['fas', 'sad-cry']" />
    </div>
  </div>
</template>

<script>
  import TableSettings from "./TableSettings";
  import SearchInput from "./SearchInput";
  import Paginator from "./Paginator";
  import TableHeader from "./TableHeader";
  import ObjUtils from "@/utils/objUtils";

  export default {
    name: 'Table',
    components: {
      TableSettings, SearchInput, Paginator, TableHeader
    },
    data() {
      return {
        searchIsOn: this.search,
        sortIsOn: this.sorting,
        paginationIsOn: this.pagination,
        usersList: [],
        defaultPageSize: 3,
        totalPageAmount: 0
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
      },
      tableColumns: {
        type: Array,
        default: (() => [])
      }
    },
    async mounted() {
      this.usersList = await this.getUsers(this.endpoint);
    },
    methods: {
      async getUsers(url, page) {
        let queryUrl = url;
        if (page && this.paginationIsOn) {
          const endElNum = page * this.defaultPageSize;
          queryUrl = `${queryUrl}/?_start=${endElNum - this.defaultPageSize}&_end=${endElNum}`
        }
        try {
          const response = await this.axios.get(queryUrl);
          console.log(response)
          if (response?.headers?.["x-total-count"]) {
            this.totalPageAmount = parseInt(response.headers["x-total-count"] / this.defaultPageSize);
          }
          return response.data;
        } catch (err) {
          console.log(err);
        }
      },
      async togglePagin() {
        this.paginationIsOn = !this.paginationIsOn;
        this.usersList = await this.getUsers(this.endpoint, 1);
      },
      async filterUsers(phrase) {
        if (phrase) {
          this.usersList = await this.getUsers(this.endpoint);
          this.usersList = this.usersList.filter(user => {
            for (const property in user) {
              if (user[property].toString().toLowerCase().includes(phrase.toLowerCase())) return true
            }
            return false;
          })
        } else {
          this.usersList = await this.getUsers(this.endpoint);
        }
      },
      toggleSort() {
        this.sortIsOn = !this.sortIsOn;
      },
      toggleSearch() {
        this.searchIsOn = !this.searchIsOn;
      },
      renderTableCell(object, path) {
        const propValue = ObjUtils.safeRead(object, path);
        console.log(propValue)
        if (propValue.toString().includes('@') || path.toString().includes('mail')) {
          return `<a href="mailto:${propValue}">${propValue}</a>`;
        } else {
          return `<span>${propValue}</span>`;
        }
      }
    },
    computed: {
      isUsersListNotEmpty() {
        return this.usersList?.length;
      },
      sortedTableColumns() {
        const columnsCopy = JSON.parse(JSON.stringify(this.tableColumns));
        return columnsCopy.sort((a, b) => a.order - b.order);
      }
    }
  }
</script>

<style lang="scss" scoped></style>
