import { combineReducers } from 'redux'
import categoriesReducer from './reducers/categoriesReducer'
import featuredPlayListReducer from './reducers/featuredPlayListReducer'
import newReleasesReducer from './reducers/newReleasesReducer'
import profileReducer from './reducers/profileReducer'

const rootReducer = combineReducers({
  categories: categoriesReducer,
  featuredPlaylist: featuredPlayListReducer,
  newReleases: newReleasesReducer,
  profile: profileReducer,
})

export default rootReducer
