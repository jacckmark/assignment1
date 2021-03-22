<template>
  <th scope="col" @click="sortColumn" class="header">
    {{ name }}
    <font-awesome-icon v-show="isSortingOn" :icon="['fas', chevronDirection]" />
  </th>
</template>

<script>
  export default {
    name: "TableHeader",
    props: {
      name: {
        type: String,
        required: true
      },
      propertyPath: {
        type: String,
        required: true
      },
      isSortingOn: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        isSortedAsc: false
      }
    },
    methods: {
      sortColumn(event) {
        if (this.isSortingOn) {
          console.log(event.target);
          this.isSortedAsc = !this.isSortedAsc;
          this.$emit('sortColumn', this.propertyPath, this.isSortedAsc);
        }
      },
    },
    computed: {
      chevronDirection() {
        return this.isSortedAsc ? 'angle-up' : 'angle-down'
      }
    }
  };
</script>

<style lang="scss" scoped>
  .header {
    cursor: pointer;
  }
</style>
