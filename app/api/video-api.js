import axios from 'axios';
import store from '../store';
import { getVideosSuccess, deleteVideoSuccess } from '../actions/video-actions';

/**
 * Get videos
 */

export function getVideos() {
  return axios.get('http://localhost:3001/videos')
    .then(response => {
      store.dispatch(getVideosSuccess(response.data));
      return response;
    });
}

/**
 * Search Videos
 */

export function searchVideos(query = '') {
  return axios.get('http://localhost:3001/videos?q='+ query)
    .then(response => {
      store.dispatch(getVideosSuccess(response.data));
      return response;
    });
}

/**
 * Delete a video
 */

export function deleteVideo(videoId) {
  return axios.delete('http://localhost:3001/videos/' + videoId)
    .then(response => {
      store.dispatch(deleteVideoSuccess(videoId));
      return response;
    });
}
