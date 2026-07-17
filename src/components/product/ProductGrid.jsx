import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/productService";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";
import ErrorState from "../common/ErrorState";

function ProductGrid() {

    const {
        data: products,
        isLoading,
        error,
        refetch,
    } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
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

    // Empty State
    if (!products || products.length === 0) {
        return (
            <h2 className="text-center text-2xl py-20">
                No Products Found
            </h2>
        );
    }

    // Success State
    return (
        <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}

export default ProductGrid;