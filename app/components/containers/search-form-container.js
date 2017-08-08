import React, {Component} from 'react';
import * as userApi from '../../api/user-api';
import * as videoApi from '../../api/video-api';
import { loadSearchLayout } from '../../actions/search-layout-actions';
import SearchForm from '../views/search-form';

class SearchFormContainer extends Component {

  constructor(props) {
    super(props);
  }
  search(event) {
    event.preventDefault();

    // By assigning a "child" ref to <SearchForm />, we
    // can use that reference to gain access to the
    // .getQuery() method. See the code for
    // <SearchForm /> to see how it returns a value.
    let query = this.refs.child.getQuery();

    if (this.props.searchType === 'users') {
      userApi.searchUsers(query);
    } else if (this.props.searchType === 'videos') {
      videoApi.searchVideos(query);
    }
  }

  render() {
    return (
      <SearchForm search={this.search.bind(this)} ref="child" />
    );
  }

};

export default SearchFormContainer;
