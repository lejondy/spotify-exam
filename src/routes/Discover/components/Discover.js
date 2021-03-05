import React, { Component } from 'react'
import { connect } from 'react-redux'
import PageLoader from '../../../common/PageLoader'
import { getTokenFromUrl, getToken, saveToken } from '../../../utils/'
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock'
import '../styles/_discover.scss'

class Discover extends Component {
  componentDidMount() {
    if (!getToken()) {
      const token = getTokenFromUrl()
      if (typeof token.access_token !== 'undefined') {
        saveToken(token.access_token)
        window.location.hash = ''
        window.location.reload()
      }
    }
  }

  render() {
    const {
      isLoadingProfile,
      isLoadingCategories,
      isLoadingNewReleases,
      isLoadingFeaturedPlayList,
      categories,
      newReleases,
      featuredPlaylist,
    } = this.props

    const isLoading =
      isLoadingProfile ||
      isLoadingCategories ||
      isLoadingNewReleases ||
      isLoadingFeaturedPlayList

    const _categories = categories.data.categories || { items: [] }
    const _newReleases = newReleases.data.albums || { items: [] }
    const _playlists = featuredPlaylist.data.playlists || { items: [] }

    return (
      <div className="discover">
        <DiscoverBlock
          text="RELEASED THIS WEEK"
          id="released"
          data={_newReleases.items}
          imagesKey="images"
        />
        <DiscoverBlock
          text="FEATURED PLAYLISTS"
          id="featured"
          data={_playlists.items}
        />
        <DiscoverBlock
          text="BROWSE"
          id="browse"
          data={_categories.items}
          imagesKey="icons"
        />
        {isLoading && <PageLoader />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoadingProfile: state.profile.isLoading,
    isLoadingCategories: state.categories.isLoading,
    isLoadingNewReleases: state.newReleases.isLoading,
    isLoadingFeaturedPlayList: state.featuredPlaylist.isLoading,
    categories: state.categories || {},
    newReleases: state.newReleases || {},
    featuredPlaylist: state.featuredPlaylist || {},
  }
}

export default connect(mapStateToProps, null)(Discover)
