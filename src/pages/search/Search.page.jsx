import React from "react";

import Search from "../../components/search/Search.component";

const SearchPage = ({ fetch }) => {
  return (
    <div>
      <Search fetch={fetch} big />
    </div>
  );
};

export default SearchPage;
