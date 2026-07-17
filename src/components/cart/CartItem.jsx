function CartItem({ item, onIncrease, onDecrease, onRemove }) {
    return (
        <div className="flex items-center gap-6 bg-white p-5 rounded-2xl shadow-md">

            <img
                src={item.imageUrl}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-xl"
            />

            <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>

                <p className="text-gray-500">
                    ₹{item.price}
                </p>
            </div>

            <div className="flex items-center gap-3">

                <button
                    onClick={onDecrease}
                    className="bg-gray-200 px-3 py-1 rounded-lg"
                >
                    -
                </button>

                <span>{item.quantity}</span>

                <button
                    onClick={onIncrease}
                    className="bg-blue-600 text-white px-3 py-1 rounded-lg"
                >
                    +
                </button>

            </div>

            <div className="font-bold text-lg">
                ₹{item.price * item.quantity}
            </div>

            <button
                onClick={onRemove}
                className="text-red-600"
            >
                Remove
            </button>

        </div>
    );
}

export default CartItem;