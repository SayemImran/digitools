import React from "react";

const GettingStartedCard = ({ card }) => {
  return (
    <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
      <span className="absolute top-4 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-violet-600 text-white text-xs font-bold shadow-md">
        {String(card.id).padStart(2, "0")}
      </span>
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-violet-100 flex items-center justify-center mb-6">
        <img
          src={card.logo}
          alt={card.title}
          className="w-9 h-9 sm:w-11 sm:h-11 object-contain"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
        {card.title}
      </h3>
      <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xs">
        {card.description}
      </p>
    </div>
  );
};

export default GettingStartedCard;
