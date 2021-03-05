import axios from '../../axiosApi'

export const fetchFeaturedPlayListApi = () => {
  return axios.get('/browse/featured-playlists', {
    params: {
      limit: 10,
      offset: 0,
    },
  })
}
