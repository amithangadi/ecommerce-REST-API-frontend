function CartItem({ item, onIncrease, onDecrease, onRemove }) {

    return (

        <div className="flex items-center gap-6 bg-white p-5 rounded-2xl shadow-md">

            <img
                src={item.product?.imgUrl}
                alt={item.product?.name}
                className="w-24 h-24 object-cover rounded-xl"
            />

            <div className="flex-1">

                <h2 className="text-xl font-semibold">
                    {item.product?.name}
                </h2>

                <p className="text-gray-500 mt-2">
                    ₹{item.product?.price}
                </p>

                <p className="text-sm text-gray-400 mt-1">
                    Stock : {item.product?.stock}
                </p>

            </div>

            <div className="flex items-center gap-3">

                <div className="bg-gray-100 px-4 py-2 rounded-lg">

    <span className="font-semibold">

        Quantity : {item.quantity}

    </span>

</div>

            </div>

            <div className="font-bold text-lg">

                ₹{(item.product?.price || 0) * item.quantity}

            </div>

            <button
                onClick={onRemove}
                className="text-red-600 hover:text-red-800"
            >
                Remove
            </button>

        </div>

    );

}

export default CartItem;