<script setup lang="ts">
import { ref } from 'vue'
import { UiButton, UiCard } from '@brianzhu/ui'

const count = ref(0)
</script>

<template>
  <main class="page">
    <h1>web</h1>
    <UiCard title="Shared UI from @brianzhu/ui">
      <p>This card and the button below come from packages/ui.</p>
      <UiButton @click="count++">clicked {{ count }} times</UiButton>
    </UiCard>
  </main>
</template>

<style scoped>
.page {
  max-width: 640px;
  margin: 0 auto;
  padding: 32px 16px;
  font-family: system-ui, sans-serif;
}
</style>