import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
 const userList = props => {
  return (
    <div className="data-list">

      {props.users.map(user => {

        return (
          <div key={user.id} className="data-list-item">
            <div className="details">
              <Link to={'/users/' + user.id}>{user.name}</Link>
            </div>
            <div className="controls">
              <button onClick={props.deleteUser.bind(null, user.id)} className="delete">Delete</button>
            </div>
          </div>
        );

      })}
    </div>
  );
}
export default userList;