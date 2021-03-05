import { featuredPlaylistActionTypes } from '../actions/featuredPlayListAction'

const initialState = {
  data: [],
  isLoading: false,
  error: '',
}

const featuredPlaylistReducer = (state = initialState, action) => {
  switch (action.type) {
    case featuredPlaylistActionTypes.FETCH_FEATURED_PLAYLIST_START:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }
    case featuredPlaylistActionTypes.FETCH_FEATURED_PLAYLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      }
    case featuredPlaylistActionTypes.FETCH_FEATURED_PLAYLIST_FAILED:
      return {
        ...state,
        isLoading: false,
        data: [],
        error: action.payload.error,
      }

    default:
      return state
  }
}

export default featuredPlaylistReducer
