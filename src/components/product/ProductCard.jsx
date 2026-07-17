import { FaHeart, FaShoppingCart } from "react-icons/fa";

function ProductCard({ product }) {

    return (

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl duration-300">

            <img
             src={product.imageUrl}
             alt={product.name}
            />

            <div className="p-5">

                <p>{product.category?.name}</p>

                <h2>{product.name}</h2>

                <div className="flex justify-between mt-4">

                    <span>₹{product.price}</span>

                    <span className="line-through text-gray-400">

                        ₹{product.oldPrice}

                    </span>

                </div>

                <div className="flex gap-3 mt-6">

                    <button
                        className="flex-1 bg-blue-600 text-white py-3 rounded-xl"
                    >
                        <FaShoppingCart className="inline mr-2" />

                        Add
                    </button>

                    <button
                        className="bg-red-500 text-white p-3 rounded-xl"
                    >
                        <FaHeart />
                    </button>

                </div>

            </div>

        </div>

    );

}

export default ProductCard;