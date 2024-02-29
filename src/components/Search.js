import React from "react";

function Search({onSearchChange}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={onSearchChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
