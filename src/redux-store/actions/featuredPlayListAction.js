export const featuredPlaylistActionTypes = {
  FETCH_FEATURED_PLAYLIST: 'FETCH_FEATURED_PLAYLIST',
  FETCH_FEATURED_PLAYLIST_START: 'FETCH_FEATURED_PLAYLIST_START',
  FETCH_FEATURED_PLAYLIST_SUCCESS: 'FETCH_FEATURED_PLAYLIST_SUCCESS',
  FETCH_FEATURED_PLAYLIST_FAILED: 'FETCH_FEATURED_PLAYLIST_FAILED',
}

export const featuredPlaylistActions = {
  fetchFeaturedPlaylist: (data) => {
    return {
      type: featuredPlaylistActionTypes.FETCH_FEATURED_PLAYLIST,
      payload: data,
    }
  },

  fetchFeaturedPlaylistStart: (data) => {
    return {
      type: featuredPlaylistActionTypes.FETCH_FEATURED_PLAYLIST_START,
      payload: data,
    }
  },

  fetchFeaturedPlaylistSuccess: (data) => {
    return {
      type: featuredPlaylistActionTypes.FETCH_FEATURED_PLAYLIST_SUCCESS,
      payload: data,
    }
  },

  fetchFeaturedPlaylistFailed: (data) => {
    return {
      type: featuredPlaylistActionTypes.FETCH_FEATURED_PLAYLIST_FAILED,
      payload: data,
    }
  },
}
