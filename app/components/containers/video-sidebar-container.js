import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class VideoSidebarContainer extends Component {

    render() {
        const style = {
            videoContainer: {
                paddingBottom: 20
            }
        }
        const videoSrc = "https://www.youtube.com/embed/" + 
            this.props.video + "?autoplay=" + 
            this.props.autoplay + "&rel=" + 
            this.props.rel + "&modestbranding=" +
            this.props.modest;
            
        return (
        <div style={style.videoContainer}>
            <iframe className="player" type="text/html" width="360" height="203" src={videoSrc} frameBorder="0"/>
        </div>
        );
    }
}