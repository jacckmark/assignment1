<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button
      type="button"
      :class="['btn', sortIsOn ? 'btn-success' : 'btn-secondary']"
      @click="this.toggleSorting"
    >
      sorting
    </button>
    <button
      type="button"
      :class="['btn', searchIsOn ? 'btn-success' : 'btn-secondary']"
      @click="this.toggleSearch"
    >
      search
    </button>
    <button
      type="button"
      :class="['btn', paginationIsOn ? 'btn-success' : 'btn-secondary']"
      @click="this.togglePagination"
    >
      pagination
    </button>
  </div>
</template>

<script>
  export default {
    name: 'TableSettings',
    props: {
      searchIsOn: {
        type: Boolean,
        required: true
      },
      sortIsOn: {
        type: Boolean,
        required: true
      },
      paginationIsOn: {
        type: Boolean,
        required: true
      },
    },
    methods: {
      toggleSorting() {
        this.$emit('sortToggled');
      },
      toggleSearch() {
        this.$emit('searchToggled');
      },
      togglePagination() {
        this.$emit('paginToggled');
      },
    }
  }
</script>

<style scoped>
</style>
