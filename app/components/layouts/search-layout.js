import React from 'react';
import SearchFormContainer from '../containers/search-form-container';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="search">
      <header className="search-header">
        {props.title}
        <SearchFormContainer searchType={props.searchType} />
      </header>
      <div className="search-results">
        {props.children}
      </div>
      <footer className="search-footer">
        {props.totalResults} Results
      </footer>
      <img src="http://placehold.it/728x350" />
    </div>
    );
}
