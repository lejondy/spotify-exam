import { CategoryActionTypes } from '../actions/categoriesAction'

const initialState = {
  data: [],
  isLoading: false,
  error: '',
}

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CategoryActionTypes.FETCH_CATEGORIES_START:
      return {
        ...state,
        loading: action.payload.isLoading,
      }
    case CategoryActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      }
    case CategoryActionTypes.FETCH_CATEGORIES_FAILED:
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

export default categoriesReducer
