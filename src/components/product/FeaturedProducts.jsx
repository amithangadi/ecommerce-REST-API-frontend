import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/productService";
import ProductCard from "./ProductCard";

function FeaturedProducts() {

    const {

        data: products,

        isLoading,

        error,

    } = useQuery({

        queryKey: ["products"],

        queryFn: getProducts,

    });

    if (isLoading)
        return <h2>Loading Products...</h2>;

    if (error)
        return <h2>Something went wrong.</h2>;

    return (

        <section className="max-w-7xl mx-auto py-16 px-6">

            <h1 className="text-4xl font-bold mb-10">

                Featured Products

            </h1>

            <div className="grid md:grid-cols-4 gap-8">

                {products.map(product => (

                    <ProductCard
                        key={product.id}
                        product={product}
                    />

                ))}

            </div>

        </section>

    );
}

export default FeaturedProducts;