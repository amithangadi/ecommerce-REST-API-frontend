import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import FilterSidebar from "../../components/product/FilterSidebar";
import ProductGrid from "../../components/product/ProductGrid";
import SortDropdown from "../../components/product/SortDropdown";

function Products() {

    const [searchParams, setSearchParams] = useSearchParams();

    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [category, setCategory] = useState("");
    const [priceRange, setPriceRange] = useState("");

    // Read search value coming from Navbar
    useEffect(() => {

    const searchValue =
        searchParams.get("search") || "";

    const categoryValue =
        searchParams.get("category") || "";

    setSearch(searchValue);

    setCategory(categoryValue);

}, [searchParams]);

    // Clear all filters
    const clearFilters = () => {

        setSearch("");
        setSort("");
        setCategory("");
        setPriceRange("");

        // Also remove ?search=... from URL
        setSearchParams({});

    };

    return (

        <div className="max-w-7xl mx-auto px-6 py-10">

            {/* Page Header */}

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">

                <div>

                    <h1 className="text-4xl font-bold">
                        Products
                    </h1>

                    {search && (

                        <p className="text-gray-500 mt-2">

                            Search results for:

                            <span className="font-semibold text-gray-800 ml-2">
                                "{search}"
                            </span>

                        </p>

                    )}

                </div>


                {/* Sort + Clear Filters */}

                <div className="flex items-center gap-3">

                    <SortDropdown
                        value={sort}
                        onChange={setSort}
                    />

                    <button
                        onClick={clearFilters}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                    >
                        Clear Filters
                    </button>

                </div>

            </div>


            {/* Products + Sidebar */}

            <div className="grid grid-cols-12 gap-8">

                {/* Filter Sidebar */}

                <div className="col-span-12 md:col-span-3">

                    <FilterSidebar
                        selectedCategory={category}
                        onCategoryChange={setCategory}
                        selectedPrice={priceRange}
                        onPriceChange={setPriceRange}
                    />

                </div>


                {/* Product Grid */}

                <div className="col-span-12 md:col-span-9">

                    <ProductGrid
                        search={search}
                        sort={sort}
                        category={category}
                        priceRange={priceRange}
                    />

                </div>

            </div>

        </div>

    );
}

export default Products;