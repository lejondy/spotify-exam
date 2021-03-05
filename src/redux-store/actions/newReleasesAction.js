export const newReleasesActionTypes = {
  FETCH_NEW_RELEASES: 'FETCH_NEW_RELEASES',
  FETCH_NEW_RELEASES_START: 'FETCH_NEW_RELEASES_START',
  FETCH_NEW_RELEASES_SUCCESS: 'FETCH_NEW_RELEASES_SUCCESS',
  FETCH_NEW_RELEASES_FAILED: 'FETCH_NEW_RELEASES_FAILED',
}

export const newReleasesActions = {
  fetchNewReleases: (data) => {
    return {
      type: newReleasesActionTypes.FETCH_NEW_RELEASES,
      payload: data,
    }
  },

  fetchNewReleasesStart: (data) => {
    return {
      type: newReleasesActionTypes.FETCH_NEW_RELEASES_START,
      payload: data,
    }
  },

  fetchNewReleasesSuccess: (data) => {
    return {
      type: newReleasesActionTypes.FETCH_NEW_RELEASES_SUCCESS,
      payload: data,
    }
  },

  fetchNewReleasesFailed: (data) => {
    return {
      type: newReleasesActionTypes.FETCH_NEW_RELEASES_FAILED,
      payload: data,
    }
  },
}
