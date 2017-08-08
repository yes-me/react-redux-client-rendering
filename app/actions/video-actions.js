import * as types from '../actions/action-types';

export function getVideosSuccess(videos) {
  return {
    type: types.GET_VIDEOS_SUCCESS,
    videos
  };
}

export function deleteVideoSuccess(videoId) {
  return {
    type: types.DELETE_VIDEO_SUCCESS,
    videoId
  };
}
