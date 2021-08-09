import React, { useRef } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { userInputCity } from "../../redux/user-input/userInput.actions";

import searchIcon from "../../assets/search.svg";

import "./Search.styles.scss";

const Search = ({ searchCity, fetch, big }) => {
  const history = useHistory();
  const inputEl = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    searchCity(inputEl.current.value);
    fetch();
    history.push(`/weather/${inputEl.current.value}`);
  };

  const handleFocusOnClickIcon = () => {
    inputEl.current.focus();
  };

  return (
    <div className={`${big ? "big-search" : "small-search"}`}>
      {big ? null : (
        <img
          alt="search icon"
          onClick={handleFocusOnClickIcon}
          src={searchIcon}
        />
      )}
      <form onSubmit={handleSubmit}>
        <input
          required
          ref={inputEl}
          aria-label="search"
          placeholder="Search for places..."
          type="text"
        />
        <div className="s-button-container">
          <button type="submit">search</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchCity: (city) => dispatch(userInputCity(city)),
});

export default connect(null, mapDispatchToProps)(Search);
