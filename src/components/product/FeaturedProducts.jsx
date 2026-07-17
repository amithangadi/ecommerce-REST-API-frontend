import ProductCard from "./ProductCard";

const products = [

    {
        id: 1,
        title: "Apple Watch",
        category: "Electronics",
        price: 29999,
        oldPrice: 35999,
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },

    {
        id: 2,
        title: "Running Shoes",
        category: "Shoes",
        price: 4999,
        oldPrice: 6999,
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },

    {
        id: 3,
        title: "Leather Jacket",
        category: "Fashion",
        price: 6999,
        oldPrice: 8999,
        image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },

    {
        id: 4,
        title: "Novel Collection",
        category: "Books",
        price: 999,
        oldPrice: 1499,
        image:
            "https://images.unsplash.com/photo-1512820790803-83ca734da794"
    }

];

function FeaturedProducts() {

    return (

        <section className="max-w-7xl mx-auto py-16 px-6">

            <h1 className="text-4xl font-bold mb-10">

                Featured Products

            </h1>

            <div className="grid md:grid-cols-4 gap-8">

                {
                    products.map((product) => (

                        <ProductCard
                            key={product.id}
                            product={product}
                        />

                    ))
                }

            </div>

        </section>

    );

}

export default FeaturedProducts;