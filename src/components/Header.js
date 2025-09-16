import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { addSuggestionsToStore } from "../store/searchSlice";
import {
  GO_BACK,
  HAMBURGER_ICON,
  SEARCH_ICON,
  SEARCH_SUGGESTIONS,
  USER_ICON,
  YT_LOGO,
} from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const cachedSearchData = useSelector((store) => store.search);
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isMobileSearch, setIsMobileSearch] = useState(false);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    const response = await fetch(
      "https://corsproxy.io/?" +
        encodeURIComponent(SEARCH_SUGGESTIONS) +
        searchText
    );
    const json = await response.json();

    setSearchSuggestions(json?.[1]);

    dispatch(addSuggestionsToStore({ [searchText]: json?.[1] }));
  };

  /**
   * searchText: romantic, comedy
   *
   * --- What we send from here ---
   * {"romantic": ["romantic movies", "romantic 2025"]}
   *
   * --- Store ----
   * searchSuggestions: {
   *     "romantic": [],
   *     "comedy": []
   * }
   */

  useEffect(() => {
    // Whenever the search text changes, make an API call to get suggestions, add debouncing
    const timer = setTimeout(() => {
      if (cachedSearchData[searchText]) {
        setSearchSuggestions(cachedSearchData[searchText]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      {!isMobileSearch && (
        <div className="flex col-span-1">
          <img
            onClick={toggleMenuHandler}
            className="h-8 cursor-pointer"
            src={HAMBURGER_ICON}
            alt="hamburger-icon"
          />
          <img className="h-8 ml-6" src={YT_LOGO} alt="youtube-logo" />
        </div>
      )}
      <div className="col-span-10">
        <div className="flex">
          <input
            value={searchText}
            type="text"
            className={`w-1/2 border border-gray-400 p-2 rounded-l-full hidden md:inline-block `}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-2 hidden md:inline-block md:rounded-r-full flex items-center justify-center">
            <img className="w-4 h-4" src={SEARCH_ICON} alt="search-icon" />
          </button>

          {/** Mobile view */}
          {isMobileSearch && (
            <button
              className="p-2 flex items-center justify-center"
              onClick={() => setIsMobileSearch(false)}
            >
              <img className="w-8 h-8 mr-4" src={GO_BACK} alt="go-back" />
            </button>
          )}
          {isMobileSearch && (
            <input
              value={searchText}
              type="text"
              className={`w-1/2 border border-gray-400 p-2 rounded-l-full`}
              onChange={(e) => setSearchText(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
          )}
          <button
            className={`border border-gray-400 p-2  md:hidden flex items-center justify-center ${
              isMobileSearch ? "rounded-r-full" : "ml-4 rounded-full"
            }`}
            onClick={() => setIsMobileSearch(true)}
          >
            <img className="w-4 h-4" src={SEARCH_ICON} alt="search-icon" />
          </button>
        </div>
        {showSuggestions && searchText && (
          <div className="absolute bg-white shadow-lg px-2 py-2 w-[44rem] rounded-lg border border-grau-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {!isMobileSearch && (
        <div className="col-span-1">
          <img
            className="h-8 justify-self-end"
            src={USER_ICON}
            alt="user-icon"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
