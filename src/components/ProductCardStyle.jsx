const tagConfig = {
  popular: {
    badge: "bg-purple-100 text-purple-600",
    border: "border-purple-200",
  },
  new: { badge: "bg-green-100 text-green-600", border: "border-green-200" },
  "best-seller": {
    badge: "bg-yellow-100 text-yellow-600",
    border: "border-yellow-200",
  },
  featured: { badge: "bg-blue-100 text-blue-600", border: "border-blue-200" },
  limited: { badge: "bg-red-100 text-red-600", border: "border-red-200" },
};

const periodLabel = {
  monthly: "/Mo",
  yearly: "/Yr",
  "one-time": "/One-Time",
};

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="shrink-0 mt-0.5"
  >
    <circle cx="8" cy="8" r="8" fill="#7C3AED" fillOpacity="0.12" />
    <path
      d="M5 8l2 2 4-4"
      stroke="#7C3AED"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProductCardStyle = ({
  name,
  description,
  price,
  period,
  tag,
  tagType,
  features,
  icon,
  cartItems,
  setCartItems
}) => {
  const tc = tagConfig[tagType] ?? tagConfig.popular;
  const formattedPrice = `$${price % 1 === 0 ? price : price.toFixed(2)}`;
  const handleAddToCart = () => {
    const newItem = { name, price };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <div className="relative rounded-2xl border border-gray-200 bg-white p-6 flex flex-col gap-4 shadow-sm px-1.5 mx-1.5">
      {/* Tag — top right corner */}
      <div className="absolute top-4 right-4">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold border ${tc.badge} ${tc.border}`}
        >
          {tag}
        </span>
      </div>

      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center text-2xl">
        {icon}
      </div>

      {/* Name + Description */}
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-bold text-gray-900 leading-snug pr-16">
          {name}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-0.5">
        <span className="text-2xl font-extrabold text-gray-900">
          {formattedPrice}
        </span>
        <span className="text-sm font-medium text-gray-500">
          {periodLabel[period] ?? ""}
        </span>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
            <CheckIcon />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button onClick={handleAddToCart} className="mt-2 w-full py-3 rounded-full bg-violet-600 hover:bg-violet-700 active:scale-95 text-white text-sm font-semibold tracking-wide transition-all duration-150 cursor-pointer">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCardStyle;
