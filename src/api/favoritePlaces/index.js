import { clientFetch } from '../clientFetch'

export const getFavoritePlaces = async () => {
  return clientFetch.get('/points').then(({ data }) =>
    data.map((place) => ({
      ...place,
      id: place._id
    }))
  )
}

export const addFavoritePlace = async (body) => {
  try {
    return await clientFetch.post('/points/post', body)
  } catch (error) {
    console.log(error)
  }
}

export const updateFavoritePlace = async (body) => {
  try {
    return await clientFetch.patch('/points/patch', body)
  } catch (error) {
    console.log(error)
  }
}

export const deleteFavoritePlace = async (id) => {
  try {
    return await clientFetch.delete(`/points/delete/${id}`)
  } catch (error) {
    console.log(error)
  }
}
