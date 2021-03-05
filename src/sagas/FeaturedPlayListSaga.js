import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchFeaturedPlayListApi } from './api/FeaturedPlayListApi'
import {
  featuredPlaylistActionTypes,
  featuredPlaylistActions,
} from '../redux-store/actions/featuredPlayListAction'

export function* fetchFeaturedPlayListSaga() {
  try {
    yield put(
      featuredPlaylistActions.fetchFeaturedPlaylistStart({ isLoading: true }),
    )
    let resp = yield call(fetchFeaturedPlayListApi)
    yield put(
      featuredPlaylistActions.fetchFeaturedPlaylistSuccess({ data: resp.data }),
    )
  } catch (err) {
    yield put(
      featuredPlaylistActions.fetchFeaturedPlaylistFailed({
        error: err.message,
      }),
    )
  }
}

export function* watchFetchFeaturedPlayList() {
  yield takeEvery(
    featuredPlaylistActionTypes.FETCH_FEATURED_PLAYLIST,
    fetchFeaturedPlayListSaga,
  )
}
