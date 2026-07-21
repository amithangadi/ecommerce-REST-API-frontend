import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/productService";
import { getWishlist } from "../../services/wishlistService";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";
import ErrorState from "../common/ErrorState";

function ProductGrid({ search, sort, category }) {

    const userId = 1;

    const {
        data: products = [],
        isLoading,
        error,
        refetch,
    } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });

    const {
        data: wishlist = [],
    } = useQuery({
        queryKey: ["wishlist", userId],
        queryFn: () => getWishlist(userId),
    });

    // Loading State
    if (isLoading) {
        return (
            <div className="grid md:grid-cols-3 gap-8">
                {[...Array(6)].map((_, index) => (
                    <ProductSkeleton key={index} />
                ))}
            </div>
        );
    }

    // Error State
    if (error) {
        return (
            <ErrorState
                title="Unable to load products"
                message="Please try again later."
                onRetry={refetch}
            />
        );
    }

    // Search
    let filteredProducts = [...products];

    if (search.trim()) {
        filteredProducts = filteredProducts.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (category) {
    filteredProducts = filteredProducts.filter(
        (product) => product.category.id === Number(category)
        );
    }

    // Sort
    switch (sort) {

        case "priceAsc":
            filteredProducts.sort((a, b) => a.price - b.price);
            break;

        case "priceDesc":
            filteredProducts.sort((a, b) => b.price - a.price);
            break;

        case "nameAsc":
            filteredProducts.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
            break;

        case "nameDesc":
            filteredProducts.sort((a, b) =>
                b.name.localeCompare(a.name)
            );
            break;

        default:
            break;
    }

    // Empty State
    if (filteredProducts.length === 0) {
        return (
            <h2 className="text-center text-2xl py-20">
                No Products Found
            </h2>
        );
    }

    return (
        <div className="grid md:grid-cols-3 gap-8">

            {filteredProducts.map((product) => (

                <ProductCard
                    key={product.id}
                    product={product}
                    wishlist={wishlist}
                />

            ))}

        </div>
    );
}

export default ProductGrid;