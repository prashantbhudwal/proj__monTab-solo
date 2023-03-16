"use client";
import { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (searchTerm) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
        searchTerm
      )}`;
    }
  };

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        className="block text-xl w-6/12 py-3 pr-10 pl-4 rounded-2xl border border-fuchsia-700 text-fuchsia-700 focus:outline-fuchsia-800"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default SearchBar;
