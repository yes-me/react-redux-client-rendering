import React, {Component} from 'react';
import {Link} from 'react-router';
import VideoSidebarContainer from '../../containers/video-sidebar-container'

/**
 * footer Component
 */
export default class Aside extends Component {
  /**
   * render
   * return {ReactElement} markup
   */
  render() {
    const style = {
        aside: {
           width: '23rem',
           display: 'block'
        },
        asideTitle: {
            fontSize: 16,
            color: '#2297D1',
            marginTop: 0
        }
    }
    
    return (
      <aside style={style.aside}>
        <div>
            <h3 style={style.asideTitle}>Meet Mr Cobra: The King of Shelby Cobras - XCAR</h3>
            <VideoSidebarContainer video="A63kWP9DrKQ" autoplay="0" rel="0" modest="1" />
            <h3 style={style.asideTitle}>Pedal to the Metal: Interview with Mr. Cobra</h3>
            <VideoSidebarContainer video="dyGU1-1qlj0" autoplay="0" rel="0" modest="opaque" />
            <h3 style={style.asideTitle}>Allan Grant Lynn Park interview</h3>
            <VideoSidebarContainer video="WkkES24xc-w" autoplay="0" rel="0" modest="opaque" />
        </div>
      </aside>
    );
  }
}
