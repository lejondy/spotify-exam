import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import { Provider } from 'react-redux'
import { ProfileActions } from './redux-store/actions/profileAction'
import { CategoryActions } from './redux-store/actions/categoriesAction'
import { newReleasesActions } from './redux-store/actions/newReleasesAction'
import { featuredPlaylistActions } from './redux-store/actions/featuredPlayListAction'

import { getToken } from './utils'
import configureStore from './redux-store/store'
import CoreLayout from './common/layouts/CoreLayout'
import './styles/_main.scss'

const store = configureStore()
if (getToken()) {
  store.dispatch(ProfileActions.fetchProfile())
  store.dispatch(CategoryActions.fetchCategories())
  store.dispatch(newReleasesActions.fetchNewReleases())
  store.dispatch(featuredPlaylistActions.fetchFeaturedPlaylist())
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CoreLayout>
        <Routes />
      </CoreLayout>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
