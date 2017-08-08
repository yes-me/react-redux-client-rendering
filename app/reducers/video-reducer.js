import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  videos: []
};

const videoReducer = (state = initialState, action) => {

  switch(action.type) {

    case types.GET_VIDEOS_SUCCESS:
      return Object.assign({}, state, { videos: action.videos });

    case types.DELETE_VIDEO_SUCCESS:

      // Use lodash to create a new video array without the video we want to remove
      const newVideos = _.filter(state.videos, video => video.id != action.videoId);
      return Object.assign({}, state, { videos: newVideos })

  }

  return state;

}

export default videoReducer;
