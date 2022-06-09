import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="TodoSearch">
      <input
        type="text"
        value={searchValue}
        placeholder="Esos son rebook o son nike"
        onChange={onSearchValueChange}
      />
    </div>
  );
}

export { TodoSearch };
