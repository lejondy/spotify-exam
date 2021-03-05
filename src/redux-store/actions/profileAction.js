export const ProfileActionTypes = {
  FETCH_PROFILE: 'FETCH_PROFILE',
  FETCH_PROFILE_START: 'FETCH_PROFILE_START',
  FETCH_PROFILE_SUCCESS: 'FETCH_PROFILE_SUCCESS',
  FETCH_PROFILE_FAILED: 'FETCH_PROFILE_FAILED',
}

export const ProfileActions = {
  fetchProfile: (data) => {
    return {
      type: ProfileActionTypes.FETCH_PROFILE,
      payload: data,
    }
  },
  fetchProfileStart: (data) => {
    return {
      type: ProfileActionTypes.FETCH_PROFILE_START,
      payload: data,
    }
  },
  fetchProfileSuccess: (data) => {
    return {
      type: ProfileActionTypes.FETCH_PROFILE_SUCCESS,
      payload: data,
    }
  },
  fetchProfileFailed: (data) => {
    return {
      type: ProfileActionTypes.FETCH_PROFILE_FAILED,
      payload: data,
    }
  },
}
