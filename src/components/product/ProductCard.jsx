import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">

      <Link to={`/product/${product.id}`}>
        <img
          src={product.imgUrl}
          alt={product.name}
          className="h-60 w-full object-cover"
        />
      </Link>

      <div className="p-5">

        <p className="text-sm text-gray-500">
          {product.category?.name || "Uncategorized"}
        </p>

        <h2 className="text-xl font-bold mt-2">
          {product.name}
        </h2>

        <p className="text-gray-600 mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-3">
          <span className="text-2xl font-bold text-blue-600">
            ₹{product.price}
          </span>
        </div>

       <p className="mt-2">
        {product.stock > 0 ? (
            <span className="text-green-600 font-semibold">
                In Stock ({product.stock})
            </span>
        ) : (
            <span className="text-red-600 font-semibold">
                Out of Stock
            </span>
        )}
    </p>

        <div className="flex gap-3 mt-6">

          <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">
            <FaShoppingCart className="inline mr-2" />
            Add to Cart
          </button>

          <button className="bg-red-500 text-white px-4 rounded-xl hover:bg-red-600">
            <FaHeart />
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;