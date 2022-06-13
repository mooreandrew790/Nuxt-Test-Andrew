<template>
  <a-card hoverable :bodyStyle="{ height: '200px' }" :loading="loading">
    <template #cover>
      <img :alt="title" :src="image" />
    </template>
    <template #actions>
      <a-button type="primary" @click="removeItem(slug)">
        Remove
      </a-button>
    </template>
    <a-card-meta :title="title">
      <template #description>
        <p>{{ description }}</p>
      </template>
    </a-card-meta>
  </a-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    slug: String,
    title: String,
    description: String,
    image: String
  },
  data() {
    return {
      loading: true
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
  methods: {
    ...mapActions({
      removeItem: 'removeItem'
    }),
  }
}
</script>

<style>
img {
  display: block;
  height: 200px;
  object-fit: cover;
}
</style>