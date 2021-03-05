import axios from '../../axiosApi'

export const fetchNewReleasesApi = () => {
  return axios.get('/browse/new-releases', {
    params: {
      limit: 10,
      offset: 0,
    },
  })
}
