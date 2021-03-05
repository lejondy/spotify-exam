import { all } from 'redux-saga/effects'
import { watchFetchCategories } from './CategoriesSaga'
import { watchFetchProfile } from './ProfileSaga'
import { watchFetchNewReleases } from './NewReleasesSaga'
import { watchFetchFeaturedPlayList } from './FeaturedPlayListSaga'
export default function* rootSaga() {
  yield all([
    watchFetchCategories(),
    watchFetchProfile(),
    watchFetchNewReleases(),
    watchFetchFeaturedPlayList(),
  ])
}
