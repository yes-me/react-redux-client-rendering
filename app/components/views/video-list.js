import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
const videoList = props => {
  return (
    <div className="data-list">

      {props.videos.map(video => {

        return (
          <div key={video.id} className="data-list-item">
            <div className="details">{video.name}</div>
            <div className="controls">
              <button onClick={props.deleteVideo.bind(null, video.id)} className="delete">Delete</button>
            </div>
          </div>
        );

      })}

    </div>
  );
}
export default videoList;