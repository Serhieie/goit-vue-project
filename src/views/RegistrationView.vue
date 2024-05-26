<script setup>
import RegistrationForm from '../components/Auth/RegistrationForm/RegistrationForm.vue'
import { authService } from '../api/authService'
import { useRouter } from 'vue-router'
import { useMutation } from '../composables/useMutation'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.vue'

const router = useRouter()

const {
  isLoading,
  error,
  mutation: handleRegisterUser
} = useMutation({
  mutationFn: (data) => authService.registerUser(data),
  onSuccess: () => router.replace('/goit-vue-project/map')
})
</script>

<template>
  <RegistrationForm @submit="handleRegisterUser" :is-loading="isLoading" />
  <ErrorMessage v-if="error" :text="error.message" />
</template>
