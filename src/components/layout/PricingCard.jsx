import CheckIcon from "./CheckIcon";

const PricingCard = ({ plan }) => {
  const { name, tagline, price, buttonText, popular, features } = plan;

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 w-full
                ${
                  popular
                    ? "bg-gradient-to-b from-violet-600 to-purple-700 text-white shadow-2xl scale-105 z-10"
                    : "bg-white text-gray-800 border border-gray-200 shadow-sm"
                }`}
    >
      {/* Most Popular Badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-amber-200 text-amber-800 text-xs font-semibold px-4 py-1.5 rounded-full shadow">
            Most Popular
          </span>
        </div>
      )}

      <h3
        className={`text-xl font-bold ${popular ? "text-white" : "text-gray-900"}`}
      >
        {name}
      </h3>
      <p
        className={`text-sm mt-1 ${popular ? "text-violet-200" : "text-gray-500"}`}
      >
        {tagline}
      </p>

      <div className="mt-6 mb-6 flex items-end gap-1">
        <span
          className={`text-5xl font-extrabold ${popular ? "text-white" : "text-gray-900"}`}
        >
          ${price}
        </span>
        <span
          className={`text-sm mb-2 ${popular ? "text-violet-200" : "text-gray-500"}`}
        >
          /Month
        </span>
      </div>

      <ul className="flex flex-col gap-3 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckIcon popular={popular} />
            <span
              className={`text-sm ${popular ? "text-white" : "text-gray-600"}`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`mt-8 w-full py-3 rounded-full font-semibold text-sm transition-all duration-200
                    ${
                      popular
                        ? "bg-white text-violet-600 hover:bg-violet-50"
                        : "bg-violet-600 text-white hover:bg-violet-700"
                    }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
