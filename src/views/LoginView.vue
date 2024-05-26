<script setup>
import LoginForm from '../components/Auth/LoginForm/LoginForm.vue'
import { authService } from '../api/authService'
import { useRouter } from 'vue-router'
import { useMutation } from '../composables/useMutation'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage.vue'

const router = useRouter()
const {
  isLoading,
  error,
  mutation: handleLogin
} = useMutation({
  mutationFn: (data) => authService.login(data),
  onSuccess: () => router.replace('/goit-vue-project/map')
})
</script>

<template>
  <LoginForm @submit="handleLogin" :is-loading="isLoading" />
  <ErrorMessage v-if="error" :text="error.message" />
</template>
