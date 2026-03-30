import React, { use } from "react";
import ProductCardStyle from "./ProductCardStyle";

const ProductCard = ({ promise, cartItems, setCartItems }) => {
  const products = use(promise);
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCardStyle
          name={product.name}
          description={product.description}
          price={product.price}
          period={product.period}
          tag={product.tag}
          tagType={product.tagType}
          features={product.features}
          icon={product.icon}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
};

export default ProductCard;
