function SortDropdown({ value, onChange }) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border rounded-lg px-4 py-2"
        >
            <option value="">Default</option>

            <option value="priceAsc">
                Price Low to High
            </option>

            <option value="priceDesc">
                Price High to Low
            </option>

            <option value="nameAsc">
                Name A-Z
            </option>

            <option value="nameDesc">
                Name Z-A
            </option>
        </select>
    );
}

export default SortDropdown;