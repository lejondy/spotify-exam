import axios from '../../axiosApi'

export const fetchCategoriesApi = () => {
  return axios.get('/browse/categories', {
    params: {
      limit: 10,
      offset: 0,
    },
  })
}
