<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  },
  hasError: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="text-red-500 text-center mt-1 font-semibold select-none">{{ text }}</div>
</template>
