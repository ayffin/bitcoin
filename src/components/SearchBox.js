import React from "react";

const SearchBox = ({search, selects}) => {
  return(
    <div>
      <input type= "search"
          placeholder="Enter the value"
          className = "pa3 f4 ma2 bg-light-yellow shadow-5"
          onChange ={search}
        />
        <h3>Search By:
        <select onChange ={selects}
                className = ' pa3 f3 tc bg-light-yellow ma2'>

          <option value="name">name</option>
          <option value="rank">rank</option>
          <option value="symbol">symbol</option>

        </select>
        </h3>
    </div>
  )
}
export default SearchBox;
