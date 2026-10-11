<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary'
  }>(),
  { variant: 'primary' },
)
</script>

<template>
  <button class="ui-button" :class="`ui-button--${variant}`">
    <slot />
  </button>
</template>

<style scoped>
.ui-button {
  padding: 8px 16px;
  border: 0;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.15s ease;
}
.ui-button:hover {
  opacity: 0.85;
}
.ui-button--primary {
  background: #3b82f6;
  color: #fff;
}
.ui-button--secondary {
  background: #e5e7eb;
  color: #111827;
}
</style>