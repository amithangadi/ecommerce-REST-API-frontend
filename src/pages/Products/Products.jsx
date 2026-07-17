import SearchBar from "../../components/product/SearchBar";
import FilterSidebar from "../../components/product/FilterSidebar";
import ProductGrid from "../../components/product/ProductGrid";

function Products() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <SearchBar />

      <div className="grid grid-cols-12 gap-8 mt-8">

        <div className="col-span-3">
          <FilterSidebar />
        </div>

        <div className="col-span-9">
          <ProductGrid />
        </div>

      </div>

    </div>
  );
}

export default Products;