import { FaSearch } from "react-icons/fa";
import SortDropdown from "./SortDropdown";

function SearchBar({ value, onChange, sort, onSortChange }) {
    return (
        <div className="flex items-center gap-4">

            {/* Search Box */}
            <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 flex-1">

                <FaSearch />

                <input
                    type="text"
                    placeholder="Search Products..."
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="bg-transparent ml-3 outline-none w-full"
                />

            </div>

            {/* Sort Dropdown */}
            <SortDropdown
                value={sort}
                onChange={onSortChange}
            />

        </div>
    );
}

export default SearchBar;