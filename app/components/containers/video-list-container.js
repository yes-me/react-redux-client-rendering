import React, {Component} from 'react';
import { connect } from 'react-redux';
import VideoList from '../views/video-list';
import * as videoApi from '../../api/video-api';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-layout-actions';

class VideoListContainer extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    videoApi.getVideos();
    store.dispatch(loadSearchLayout('videos', 'Video Results'));
  }

  render() {
    return (
      <VideoList videos={this.props.videos} deleteVideo={videoApi.deleteVideo} />
    );
  }

};

const mapStateToProps = (store) => {
  return {
    videos: store.videoState.videos
  };
};

export default connect(mapStateToProps)(VideoListContainer);
