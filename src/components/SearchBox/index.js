import React from 'react';

const SearchBox = ({ placeholder }) => (
  <div className="search-box">
    <input type="text" placeholder={placeholder} />
    <button>
      Search
      <i className="fa fa-search" />
    </button>
  </div>
);

export default SearchBox;
