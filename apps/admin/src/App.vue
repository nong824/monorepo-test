<script setup lang="ts">
import { ref } from 'vue'
import { UiButton, UiCard } from '@brianzhu/ui'

const users = ref(['alice', 'bob', 'carol'])
</script>

<template>
  <main class="page">
    <h1>admin</h1>
    <UiCard title="Shared UI from @brianzhu/ui">
      <p>Admin panel also consumes the same packages/ui components.</p>
      <ul>
        <li v-for="user in users" :key="user">{{ user }}</li>
      </ul>
      <UiButton variant="secondary" @click="users.push(`user-${users.length + 1}`)">
        test add user
      </UiButton>
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