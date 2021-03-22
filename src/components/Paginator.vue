<template>
  <nav aria-label="page navigation">
    <ul class="pagination justify-content-center" @click="moveToPage">
      <li
        v-for="pageNum in totalPages"
        :key="pageNum"
        :data-page="pageNum"
        class="page-item page-link"
      >
        {{ pageNum }}
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Paginator',
    props: {
      totalPages: {
        type: Number,
        required: true
      }
    },
    methods: {
      moveToPage(event) {
        if (event.target?.dataset?.page) {
          this.$emit("changePage", event.target?.dataset?.page);
        }
      }
    }
  }
</script>

<style scoped>
  .pagination .page-item {
    cursor: pointer;
  }
</style>
