import axios from 'axios'

export const clientFetch = axios.create({
  // baseURL: 'http://localhost:3000/api/',

  baseURL: 'https://vue-proj-back.onrender.com/api/',
  withCredentials: true
})
