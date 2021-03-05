import { ProfileActionTypes } from '../actions/profileAction'

const initialState = {
  data: [],
  isLoading: false,
  error: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProfileActionTypes.FETCH_PROFILE_START:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }
    case ProfileActionTypes.FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      }
    case ProfileActionTypes.FETCH_PROFILE_FAILED:
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

export default profileReducer
