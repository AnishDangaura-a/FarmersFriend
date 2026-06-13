import React, { useState } from "react";
import { PhoneFrame } from "@/components/layout/PhoneFrame";

const CROPS = [
  {
    name: "Wheat",
    emoji: "🌾",
    season: "Oct–Mar",
    type: "Rabi",
    duration: "120–150d",
    soil: "Loam pH 6–7",
    water: "6–8 inch at sowing",
    fert: "DAP at sowing + Urea top-dress at tillering",
    pests: "Aphids, rust, smut",
  },
  {
    name: "Rice",
    emoji: "🌿",
    season: "Jun–Nov",
    type: "Kharif",
    duration: "100–150d",
    soil: "Clay pH 5.5–6.5",
    water: "Flood / 2–3 inch standing water",
    fert: "N in 3 splits, K+P at transplant",
    pests: "Brown planthopper, blast, stem borer",
  },
  {
    name: "Tomato",
    emoji: "🍅",
    season: "All seasons",
    type: "Year-round",
    duration: "60–80d",
    soil: "Sandy loam pH 6–6.8",
    water: "Drip 1–1.5L/plant/day",
    fert: "NPK 19:19:19 + Ca-B foliar spray",
    pests: "Early blight, whitefly, fruit borer",
  },
  {
    name: "Potato",
    emoji: "🥔",
    season: "Oct–Feb",
    type: "Rabi",
    duration: "70–120d",
    soil: "Loam pH 5.5–6",
    water: "Furrow, avoid waterlogging",
    fert: "High K+P at planting + hilling stage",
    pests: "Late blight, aphids, scab disease",
  },
  {
    name: "Maize",
    emoji: "🌽",
    season: "Jun–Oct",
    type: "Kharif",
    duration: "80–110d",
    soil: "Deep loam pH 5.8–7",
    water: "Critical at tasseling stage",
    fert: "N-heavy, side-dress at knee height",
    pests: "Fall armyworm, stalk borer",
  },
  {
    name: "Lentil",
    emoji: "🫘",
    season: "Oct–Mar",
    type: "Rabi",
    duration: "90–120d",
    soil: "Sandy loam pH 6–8",
    water: "Minimal, drought tolerant",
    fert: "Rhizobium inoculant, low N needed",
    pests: "Fusarium wilt, aphids, pod borer",
  },
];

export default function Crops() {
  const [filter, setFilter] = useState("all");
  const [selectedCrop, setSelectedCrop] = useState<typeof CROPS[0] | null>(null);

  const filteredCrops =
    filter === "all" ? CROPS : CROPS.filter((c) => c.type === filter);

  return (
    <PhoneFrame>
      {/* Header */}
      <div className="bg-gradient-to-br from-forest via-forest-100 to-forest-200 px-5 py-5 pb-8">
        <h2 className="font-display text-xl font-bold text-white mb-1">
          Crop Guides
        </h2>
        <p className="text-sm text-white/65 font-medium">
          Tap a crop to see the complete growing guide
        </p>

        {/* Filter Pills */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
          {[
            { label: "🌿 All", value: "all" },
            { label: "❄️ Rabi", value: "Rabi" },
            { label: "☀️ Kharif", value: "Kharif" },
            { label: "📅 Year-round", value: "Year-round" },
          ].map((pill) => (
            <button
              key={pill.value}
              onClick={() => setFilter(pill.value)}
              className={`px-4 py-2 rounded-full text-xs font-bold flex-shrink-0 transition-all active:scale-95 ${
                filter === pill.value
                  ? "bg-leaf text-white shadow-lg"
                  : "bg-white text-gray-600 shadow-sm"
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="px-4 py-4 grid grid-cols-2 gap-3">
        {filteredCrops.map((crop) => (
          <button
            key={crop.name}
            onClick={() => setSelectedCrop(crop)}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <div className="h-20 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-5xl">
              {crop.emoji}
            </div>
            <div className="p-3">
              <h3 className="font-display text-sm font-bold text-gray-700 mb-0.5">
                {crop.name}
              </h3>
              <p className="text-xs text-gray-400 font-semibold mb-2">
                {crop.season}
              </p>
              <span
                className={`text-xs font-bold px-2 py-1 rounded-full inline-block ${
                  crop.type === "Rabi"
                    ? "bg-sky/10 text-sky"
                    : crop.type === "Kharif"
                      ? "bg-leaf/10 text-forest-200"
                      : "bg-gold/10 text-gold"
                }`}
              >
                {crop.type}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedCrop && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-end backdrop-blur-sm">
          <div className="w-full max-h-[75%] bg-gray-50 rounded-t-3xl overflow-y-auto">
            <div className="sticky top-0 bg-gray-50 px-4 pt-4 pb-2">
              <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
              <button
                onClick={() => setSelectedCrop(null)}
                className="ml-auto block text-2xl text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            {/* Hero */}
            <div className="bg-gradient-to-br from-forest to-forest-200 px-5 py-5 flex items-center gap-4">
              <div className="text-6xl">{selectedCrop.emoji}</div>
              <div>
                <h2 className="font-display text-2xl font-bold text-white">
                  {selectedCrop.name}
                </h2>
                <p className="text-sm text-white/70 mt-1">
                  {selectedCrop.type} · {selectedCrop.duration}
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="px-5 py-4 space-y-4">
              <DetailRow icon="📅" label="Season" value={`${selectedCrop.season} · ${selectedCrop.duration}`} />
              <DetailRow icon="🌍" label="Soil" value={selectedCrop.soil} />
              <DetailRow icon="💧" label="Irrigation" value={selectedCrop.water} />
              <DetailRow icon="🧪" label="Fertilizer" value={selectedCrop.fert} />
              <DetailRow icon="🐛" label="Watch for" value={selectedCrop.pests} />
            </div>

            <div className="h-4" />
          </div>
        </div>
      )}
    </PhoneFrame>
  );
}

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3 pb-3 border-b border-gray-100 last:border-0">
      <div className="w-9 h-9 rounded-lg bg-leaf-glow flex items-center justify-center text-lg flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold text-gray-700 mb-0.5">{label}</p>
        <span className="text-xs text-gray-400 font-medium">{value}</span>
      </div>
    </div>
  );
}
