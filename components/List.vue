<template>
  <ul class="mountain-list">
    <li class="mountain-item" v-for="mountain in mountains" :key="mountain.slug">
      <item :slug="mountain.slug" :title="mountain.title" :description="mountain.description" :image="mountain.image" />
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    mountains() {
      return this.$store.state.mountains
    }
  },
}
</script>

<style>
.mountain-list {
  list-style: none;
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 30px;
  row-gap: 30px;
  padding: 30px;
}
</style>