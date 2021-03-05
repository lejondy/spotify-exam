import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchCategoriesApi } from './api/CategoriesApi'
import {
  CategoryActions,
  CategoryActionTypes,
} from '../redux-store/actions/categoriesAction'

export function* fetchCategoriesSaga() {
  try {
    yield put(CategoryActions.fetchCategoriesStart({ isLoading: true }))
    let resp = yield call(fetchCategoriesApi)
    yield put(CategoryActions.fetchCategoriesSuccess({ data: resp.data }))
  } catch (err) {
    yield put(CategoryActions.fetchCategoriesFailed({ error: err.message }))
  }
}

export function* watchFetchCategories() {
  yield takeEvery(CategoryActionTypes.FETCH_CATEGORIES, fetchCategoriesSaga)
}
