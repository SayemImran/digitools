import { Suspense, useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./cart/Cart";

const SelectionToggle = ({ cartItems, promise, setCartItems }) => {
  const [selected, setSelected] = useState("products");

  const activeClass =
    "px-5 py-2 rounded-full bg-gradient-to-r from-[#4F39F6] to-purple-400 text-white text-sm font-semibold";
  const inactiveClass =
    "px-5 py-2 text-sm text-gray-600 hover:text-violet-600 transition-colors duration-150";

  return (
    <div className="flex flex-col items-center text-center gap-4 py-12 px-4">
      
      <h2 className="text-4xl font-bold text-gray-900">
        Premium Digital Tools
      </h2>

     
      <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>

      
      <div className="flex items-center gap-3 mt-2">
        <button
          className={selected === "products" ? activeClass : inactiveClass}
          onClick={() => setSelected("products")}
        >
          Products
        </button>
        <button
          className={selected === "cart" ? activeClass : inactiveClass}
          onClick={() => setSelected("cart")}
        >
          Cart ({cartItems.length})
        </button>
      </div>

      
      <div className="w-full mt-4">
  {selected === "products" ? (
    <div>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <ProductCard
          promise={promise}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </Suspense>
    </div>
  ) : (
    <Cart
      cartItems={cartItems}
      onRemove={(name) =>
        setCartItems((prev) => prev.filter((item) => item.name !== name))
      }
    />
  )}
</div>
    </div>
  );
};

export default SelectionToggle;
