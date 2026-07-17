function SortDropdown() {
  return (
    <select className="border rounded-lg px-4 py-2">
      <option>Default</option>
      <option>Price Low to High</option>
      <option>Price High to Low</option>
      <option>Rating</option>
    </select>
  );
}

export default SortDropdown;