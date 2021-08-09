import React from "react";

import Search from "../../components/search/Search.component";

const SearchPage = ({ fetch }) => {
  return <Search fetch={fetch} big />;
};

export default SearchPage;
