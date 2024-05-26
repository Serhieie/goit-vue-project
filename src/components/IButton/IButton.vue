<script setup>
import { defineProps, computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  variant: {
    default: 'primary',
    type: String,
    validator: (value) => {
      return ['primary', 'gradient', 'outlined'].includes(value)
    }
  },
  to: String,
  isLoading: {
    default: false,
    type: Boolean
  }
})

const bgStyles = computed(() => {
  return props.variant === 'gradient'
    ? 'bg-gradient-to-r from-[#FFA279] to-[#F3743D] text-white'
    : props.variant === 'outlined'
      ? ' text-primary bg-orange-50 border hover:border-orange-200 border-[#FFA279] hover:text-orange-400 hover:bg-[#fff] transition-all duration-300 '
      : 'bg-[#FFA279] text-white '
})

const isLink = computed(() => !!props.to)

const componentName = computed(() => {
  return isLink.value ? RouterLink : 'button'
})
const link = computed(() => {
  return isLink.value ? props.to : undefined
})
</script>

<template>
  <component
    :is="componentName"
    class="rounded-xl py-3 px-10 font-bold -tracking-wider"
    :class="bgStyles"
    :to="link"
  >
    <template v-if="props.isLoading">Loading...</template>
    <template v-else>
      <slot></slot>
    </template>
  </component>
</template>
