
const Cart = ({ cart, onRemove }) => {
  return (
    <div className="absolute right-0 top-16 w-80 bg-white shadow-xl rounded-lg">

      <div className="p-4 border-b font-bold">
        Cart
      </div>

      {!cart ? (
        <div className="p-6 text-center text-gray-500 font-semibold">
          Your cart is empty.
        </div>
      ) : (
        <div className="p-6 flex flex-col gap-4">

          {/* PRODUCT ITEM */}
          <div className="flex items-center gap-4">
            <img
              src={cart.image}
              alt={cart.title}
              className="w-12 rounded"
            />
            <div className="text-gray-500 text-sm">
              <p>{cart.title}</p>
              <p>
                ${cart.price} x {cart.quantity}{" "}
                <span className="font-bold text-black ml-2">
                  ${cart.price * cart.quantity}
                </span>
              </p>
            </div>
            <button
              onClick={onRemove}
              className="ml-auto text-gray-500 hover:text-red-500 font-bold"
            >
              ✖
            </button>
          </div>

          {/* CHECKOUT BUTTON */}
          <button className="bg-orange-500 text-white py-3 rounded-lg font-bold">
            Checkout
          </button>

        </div>
      )}

    </div>
  )
}

export default Cart