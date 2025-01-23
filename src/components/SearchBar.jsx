import React from "react";

const SearchBar = ({ search, setSearch, setSort }) => {
  return (
    <div className="flex justify-around w-full items-center p-4">
      <input
        type="text"
        value={search}
        placeholder="Search by title"
        onChange={(e) => setSearch(e.target.value)}
        className="w-[300px] p-2 rounded-lg border border-gray-300"
      />
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort by Year</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SearchBar;
