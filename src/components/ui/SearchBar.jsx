import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";

const SearchBar = ({ placeholder = "Search for any service..." }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center w-full max-w-md bg-gray-100 rounded-full px-3 py-2">
      <div className="bg-black p-2 rounded-full flex items-center justify-center">
        <BiSearchAlt className="text-white" size={20} />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="ml-3 w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
      />
    </div>
  );
};

export default SearchBar;
