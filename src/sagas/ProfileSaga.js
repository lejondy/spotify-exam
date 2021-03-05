import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchProfileApi } from './api/ProfileApi'
import {
  ProfileActionTypes,
  ProfileActions,
} from '../redux-store/actions/profileAction'

export function* fetchProfileSaga() {
  try {
    yield put(ProfileActions.fetchProfileStart({ isLoading: true }))
    let resp = yield call(fetchProfileApi)
    yield put(ProfileActions.fetchProfileSuccess({ data: resp.data }))
  } catch (err) {
    yield put(ProfileActions.fetchProfileFailed({ error: err.message }))
  }
}

export function* watchFetchProfile() {
  yield takeEvery(ProfileActionTypes.FETCH_PROFILE, fetchProfileSaga)
}
