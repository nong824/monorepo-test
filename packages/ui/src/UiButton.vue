<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary'
    size?: 'sm' | 'md' | 'lg'
  }>(),
  { variant: 'primary', size: 'md' },
)
</script>

<template>
  <button class="ui-button" :class="[`ui-button--${variant}`, `ui-button--${size}`]">
    <slot />
  </button>
</template>

<style scoped>
.ui-button {
  border: 0;
  border-radius: 6px;
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
.ui-button--sm {
  padding: 4px 10px;
  font-size: 12px;
}
.ui-button--md {
  padding: 8px 16px;
  font-size: 14px;
}
.ui-button--lg {
  padding: 12px 22px;
  font-size: 16px;
}
</style>