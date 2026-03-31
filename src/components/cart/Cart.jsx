import { toast } from "react-toastify";

const Cart = ({ cartItems, onRemove, setCartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const handleProceedToCheckout = () => {
    cartItems.length === 0
      ? toast(
          "Your cart is empty. Please add items before proceeding to checkout.",
          { type: "warning" },
        )
      : (toast("Checkout successful!", { type: "success" }), setCartItems([]));
  };

  return (
    <div className="w-full border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 bg-white">
      <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
      <div className="flex flex-col gap-3">
        {cartItems.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-6">
            Your cart is empty.
          </p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-4"
            >
              {/* Icon + Name + Price */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center text-2xl bg-white rounded-xl border border-gray-100">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-400">${item.price}</p>
                </div>
              </div>

              <button
                onClick={() => {
                  console.log("clicked:", item.id);
                  console.log(
                    "all ids:",
                    cartItems.map((i) => i.id),
                  );
                  onRemove && onRemove(item.name);
                }}
                className="text-sm font-semibold text-red-400 hover:text-red-600 transition-colors duration-150 cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      <div className="flex items-center justify-between pt-2">
        <span className="text-sm text-gray-400">Total:</span>
        <span className="text-xl font-bold text-gray-900">
          ${total.toFixed(2)}
        </span>
      </div>

      <button
        onClick={handleProceedToCheckout}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#4F39F6] to-purple-400 text-white text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-150 cursor-pointer"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;
