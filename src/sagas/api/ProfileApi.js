import axios from '../../axiosApi'

export const fetchProfileApi = () => {
  return axios.get('/me')
}
