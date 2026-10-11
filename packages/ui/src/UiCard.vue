<template>
  <section class="ui-card">
    <h3 v-if="title" class="ui-card__title">{{ title }}</h3>
    <div class="ui-card__body">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<style scoped>
.ui-card {
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 6%);
}
.ui-card__title {
  margin: 0 0 8px;
  font-size: 16px;
  color: #111827;
}
.ui-card__body {
  font-size: 14px;
  color: #374151;
}
</style>