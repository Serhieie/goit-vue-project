import { clientFetch } from '../clientFetch'

export const login = (body) => {
  return clientFetch.post('/auth/login', body)
}

export const registerUser = (body) => {
  return clientFetch.post('/auth/register', body)
}

export const logout = () => {
  return clientFetch.get('/auth/logout')
}

export const refresh = () => {
  return clientFetch.get('/auth/current')
}

export const getUserInfo = () => {
  return clientFetch.get('/user/me')
}
