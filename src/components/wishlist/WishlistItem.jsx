import { addToCart } from "../../services/cartService";

function WishlistItem({ item, onRemove }) {

    async function moveToCart() {

        await addToCart({

            user: {
                id: 1
            },

            product: {
                id: item.product.id
            },

            quantity: 1

        });

        alert("Added to Cart");

    }

    return (

        <div className="bg-white rounded-xl shadow-lg p-5 flex items-center justify-between">

            <div className="flex items-center gap-5">

                <img
                    src={item.product.imgUrl}
                    alt={item.product.name}
                    className="w-28 h-28 object-cover rounded"
                />

                <div>

                    <h2 className="text-2xl font-semibold">

                        {item.product.name}

                    </h2>

                    <p className="text-gray-500 mt-2">

                        ₹{item.product.price}

                    </p>

                    <p className="text-green-600 mt-2">

                        In Stock

                    </p>

                </div>

            </div>

            <div className="space-x-3">

                <button

                    onClick={moveToCart}

                    className="bg-blue-600 text-white px-5 py-2 rounded"

                >

                    Add To Cart

                </button>

                <button

                    onClick={onRemove}

                    className="bg-red-600 text-white px-5 py-2 rounded"

                >

                    Remove

                </button>

            </div>

        </div>

    );

}

export default WishlistItem;