import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchNewReleasesApi } from './api/NewReleasesApi'
import {
  newReleasesActionTypes,
  newReleasesActions,
} from '../redux-store/actions/newReleasesAction'

export function* fetchNewReleasesSaga() {
  try {
    yield put(newReleasesActions.fetchNewReleasesStart({ isLoading: true }))
    let resp = yield call(fetchNewReleasesApi)
    yield put(newReleasesActions.fetchNewReleasesSuccess({ data: resp.data }))
  } catch (err) {
    yield put(newReleasesActions.fetchNewReleasesFailed({ error: err.message }))
  }
}

export function* watchFetchNewReleases() {
  yield takeEvery(
    newReleasesActionTypes.FETCH_NEW_RELEASES,
    fetchNewReleasesSaga,
  )
}
