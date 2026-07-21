import { useState } from "react";
import SearchBar from "../../components/product/SearchBar";
import FilterSidebar from "../../components/product/FilterSidebar";
import ProductGrid from "../../components/product/ProductGrid";

function Products() {

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <SearchBar 
        value={search}
        onChange={setSearch}
        sort={sort}
        onSortChange={setSort}
      />

      <div className="grid grid-cols-12 gap-8 mt-8">

        <div className="col-span-3">
          <FilterSidebar 
            selectedCategory={category}
            onCategoryChange={setCategory}
          />
        </div>

        <div className="col-span-9">
          <ProductGrid
              search={search}
              sort={sort}
              category={category}
          />
        </div>

      </div>

    </div>
  );
}

export default Products;