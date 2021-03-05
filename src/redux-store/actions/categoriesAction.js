export const CategoryActionTypes = {
  FETCH_CATEGORIES: 'FETCH_CATEGORIES',
  FETCH_CATEGORIES_START: 'FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILED: 'FETCH_CATEGORIES_FAILED',
}

export const CategoryActions = {
  fetchCategories: (data) => {
    return {
      type: CategoryActionTypes.FETCH_CATEGORIES,
      payload: data,
    }
  },

  fetchCategoriesStart: (data) => {
    return {
      type: CategoryActionTypes.FETCH_CATEGORIES_START,
      payload: data,
    }
  },

  fetchCategoriesSuccess: (data) => {
    return {
      type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS,
      payload: data,
    }
  },

  fetchCategoriesFailed: (data) => {
    return {
      type: CategoryActionTypes.FETCH_CATEGORIES_FAILED,
      payload: data,
    }
  },
}
