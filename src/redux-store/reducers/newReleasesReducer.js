import { newReleasesActionTypes } from '../actions/newReleasesAction'

const initialState = {
  data: [],
  isLoading: false,
  error: '',
}

const newReleasesReducer = (state = initialState, action) => {
  switch (action.type) {
    case newReleasesActionTypes.FETCH_NEW_RELEASES_START:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }
    case newReleasesActionTypes.FETCH_NEW_RELEASES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      }
    case newReleasesActionTypes.FETCH_NEW_RELEASES_FAILED:
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

export default newReleasesReducer
