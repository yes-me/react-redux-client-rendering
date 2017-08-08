import React from 'react';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import PropTypes from 'prop-types';

// Layouts
import MainLayout from './components/layouts/main-layout';
import SearchLayoutContainer from './components/containers/search-layout-container';

// Pages
import Home from './components/containers/Home';
import UserListContainer from './components/containers/user-list-container';
import UserProfileContainer from './components/containers/user-profile-container';
import VideoListContainer from './components/containers/video-list-container';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />

        <Route path="users">
          <Route component={SearchLayoutContainer}>
            <IndexRoute component={UserListContainer} />
          </Route>
          <Route path=":userId" component={UserProfileContainer} />
        </Route>

        <Route path="videos">
          <Route component={SearchLayoutContainer}>
            <IndexRoute component={VideoListContainer} />
          </Route>
        </Route>

    </Route>
  </Router>
);
