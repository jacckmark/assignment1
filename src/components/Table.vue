<template>
  <div class="container-fluid">
    <TableSettings
      :search-is-on="this.searchIsOn"
      :sort-is-on="this.sortIsOn"
      :pagination-is-on="this.paginationIsOn"
      @sortToggled="toggleSort"
      @paginToggled="togglePagination"
      @searchToggled="toggleSearch"
      class="mb-3"
    />
    <SearchInput v-show="this.searchIsOn" @searchTable="filterUsers($event)" />
    <div class="row justify-content-center" v-if="isUsersListNotEmpty">
      <div class="col col-xl-10">
        <table class="table">
          <thead>
            <tr>
              <TableHeader
                v-for="(column, index) of sortedTableColumns"
                :key="index"
                :name="column.name"
                :propertyPath="column.propertyPath"
                :isSortingOn="sortIsOn"
                @sortColumn="sortByColumn"
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
            </tr>
          </tbody>
        </table>
        <Paginator
          @changePage="changePage"
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
    watch: {
      usersList: function (value) {
        this.$emit('userListChanged', value);
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
          if (response?.headers?.["x-total-count"]) {
            this.totalPageAmount = parseInt(response.headers["x-total-count"] / this.defaultPageSize);
          }
          return response.data;
        } catch (err) {
          console.log(err);
        }
      },
      async togglePagination() {
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
      async changePage($event) {
        this.usersList = await this.getUsers(this.endpoint, $event);
      },
      async sortByColumn(propName, isSortedAsc) {
        let users = await this.getUsers(this.endpoint, propName);
        users.sort((a, b) => {
          if (isSortedAsc) {
            return ObjUtils.safeRead(a, propName) < ObjUtils.safeRead(b, propName) ? -1 : 1;
          } else {
            return ObjUtils.safeRead(b, propName) < ObjUtils.safeRead(a, propName) ? -1 : 1
          }
        })
        this.usersList = users;
      },
      async toggleSort() {
        this.sortIsOn = !this.sortIsOn;
        if (!this.sortIsOn) {
          this.usersList = await this.getUsers(this.endpoint)
        }
      },
      toggleSearch() {
        this.searchIsOn = !this.searchIsOn;
      },
      renderTableCell(object, path) {
        const propValue = ObjUtils.safeRead(object, path);
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
