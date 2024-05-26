<script setup>
import IButton from '../IButton/IButton.vue'
import IModal from '../IModal/IModal.vue'
import ErrorMessage from '../ErrorMessage/ErrorMessage.vue'
import { defineEmits } from 'vue'

defineProps({
  title: {
    type: String,
    default: ''
  },
  isOpen: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  hasError: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['cancel', 'confirm'])
</script>

<template>
  <IModal v-if="isOpen" @close="emit('cancel')">
    <div class="mb-6 text-lg">{{ title }}</div>
    <div class="flex gap-12 justify-center">
      <IButton variant="outlined" @click="emit('cancel')">Відхилити</IButton>
      <IButton variant="gradient" :is-loading="isLoading" @click="emit('confirm')">
        Підтвердити
      </IButton>
    </div>
    <ErrorMessage v-if="hasError" text="Упс щось пішло не так" />
  </IModal>
</template>
