import React from "react";
import { PhoneFrame } from "@/components/layout/PhoneFrame";

const MARKET_DATA = [
  { crop: "Wheat", emoji: "🌾", price: 2180, change: 4.2, dir: "up" },
  { crop: "Rice (Basmati)", emoji: "🌿", price: 4350, change: 1.8, dir: "up" },
  { crop: "Tomato", emoji: "🍅", price: 890, change: -6.1, dir: "down" },
  { crop: "Potato", emoji: "🥔", price: 1120, change: 0.3, dir: "flat" },
  { crop: "Maize", emoji: "🌽", price: 1790, change: 2.7, dir: "up" },
  { crop: "Lentil", emoji: "🫘", price: 6200, change: 5.4, dir: "up" },
  { crop: "Onion", emoji: "🧅", price: 2200, change: -2.1, dir: "down" },
  { crop: "Garlic", emoji: "🧄", price: 12000, change: 8.3, dir: "up" },
];

export default function Market() {
  return (
    <PhoneFrame>
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 px-5 py-5 pb-8">
        <h2 className="font-display text-xl font-bold text-white mb-1">
          Mandi Prices
        </h2>
        <p className="text-sm text-white/60 font-medium mb-3">
          Kalimati Market · Kathmandu
        </p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-leaf-light rounded-full animate-pulse" />
          <span className="text-xs text-white/50 font-semibold">
            Live · Updated 6:00 AM today
          </span>
        </div>
      </div>

      {/* Market Items */}
      <div className="px-4 py-4 space-y-2">
        {MARKET_DATA.map((item) => (
          <MarketCard key={item.crop} {...item} />
        ))}
      </div>

      {/* Forecast Tip */}
      <div className="px-4 pb-4">
        <div className="bg-gradient-to-br from-forest-100 to-forest rounded-2xl p-5 relative overflow-hidden">
          <div className="absolute right-4 top-3 text-4xl opacity-20">💡</div>
          <span className="inline-block bg-leaf-light/20 text-leaf-light text-xs font-bold px-2.5 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            AI Forecast
          </span>
          <p className="text-white/85 text-sm leading-relaxed font-medium">
            Wheat prices expected to rise 8–12% in 3 weeks. Lentil demand
            strong from India exports. Tomato may dip — sell early if possible.
          </p>
        </div>
      </div>
    </PhoneFrame>
  );
}

function MarketCard({
  crop,
  emoji,
  price,
  change,
  dir,
}: {
  crop: string;
  emoji: string;
  price: number;
  change: number;
  dir: string;
}) {
  const changeStr = (dir === "up" ? "+" : "") + change + "%";
  const bgClass =
    dir === "up" ? "bg-leaf/10" : dir === "down" ? "bg-red-100" : "bg-gray-100";
  const textClass =
    dir === "up"
      ? "text-forest-200"
      : dir === "down"
        ? "text-red-600"
        : "text-gray-400";

  return (
    <div className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-3xl w-12 text-center flex-shrink-0">{emoji}</div>
      <div className="flex-1">
        <h3 className="font-display text-sm font-bold text-gray-700">
          {crop}
        </h3>
        <p className="text-xs text-gray-400 font-semibold mt-0.5">
          Kalimati Market
        </p>
      </div>
      <div className="text-right">
        <div className="font-display font-bold text-gray-700 text-lg">
          ₹{price.toLocaleString()}
        </div>
        <p className="text-xs text-gray-400 font-semibold mb-1">per quintal</p>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full inline-block ${bgClass} ${textClass}`}>
          {changeStr}
        </span>
      </div>
    </div>
  );
}
