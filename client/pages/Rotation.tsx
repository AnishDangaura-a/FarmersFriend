import React, { useState } from "react";
import { PhoneFrame } from "@/components/layout/PhoneFrame";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CROPS = [
  { name: "Wheat", emoji: "🌾" },
  { name: "Rice", emoji: "🌿" },
  { name: "Tomato", emoji: "🍅" },
  { name: "Potato", emoji: "🥔" },
  { name: "Maize", emoji: "🌽" },
  { name: "Lentil", emoji: "🫘" },
];

const SEASONS = [
  { name: "Spring", emoji: "🌸" },
  { name: "Monsoon", emoji: "⛈️" },
  { name: "Autumn", emoji: "🍂" },
  { name: "Winter", emoji: "❄️" },
];

export default function Rotation() {
  const [plan, setPlan] = useState<(typeof CROPS[0] | null)[]>([
    null,
    null,
    null,
    null,
  ]);
  const [activeSlot, setActiveSlot] = useState(-1);
  const [showResults, setShowResults] = useState(false);

  const selectCrop = (cropIdx: number) => {
    const newPlan = [...plan];
    newPlan[activeSlot] = CROPS[cropIdx];
    setPlan(newPlan);
    setActiveSlot(-1);
  };

  const analyze = () => {
    if (plan.filter(Boolean).length < 2) {
      alert("Add at least 2 crops to analyze");
      return;
    }
    setShowResults(true);
  };

  return (
    <PhoneFrame showNav={false}>
      {/* Header */}
      <div className="bg-gradient-to-br from-forest via-forest-100 to-forest-200 px-5 py-5 pb-8">
        <Link
          to="/more"
          className="flex items-center gap-1.5 text-white/85 text-sm font-bold mb-4 hover:text-white transition-colors"
        >
          <ArrowLeft size={18} /> Back
        </Link>
        <h2 className="font-display text-xl font-bold text-white mb-1">
          Crop Rotation Planner
        </h2>
        <p className="text-sm text-white/60 font-medium">
          Plan 4 seasons for optimal soil & yield
        </p>
      </div>

      {/* Rotation Slots */}
      <div className="px-4 -mt-6 relative z-10 mb-4 grid grid-cols-2 gap-3">
        {plan.map((crop, i) => (
          <button
            key={i}
            onClick={() => setActiveSlot(i)}
            className={`bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all text-center min-h-[130px] flex flex-col items-center justify-between border-2 transition-colors ${
              crop
                ? "border-leaf"
                : "border-transparent hover:border-leaf-light/30"
            }`}
          >
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              {SEASONS[i].emoji} {SEASONS[i].name}
            </div>
            {crop ? (
              <>
                <div className="text-5xl">{crop.emoji}</div>
                <div className="text-sm font-bold text-gray-700">
                  {crop.name}
                </div>
              </>
            ) : (
              <div className="text-3xl text-gray-300">＋</div>
            )}
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="px-4 mb-4 flex gap-2">
        <button
          onClick={analyze}
          className="flex-1 bg-gradient-to-br from-leaf to-forest-200 text-white rounded-lg py-3 font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-shadow active:scale-95"
        >
          📊 Analyze
        </button>
        <button
          onClick={() => {
            const defaultPlan = [CROPS[0], CROPS[1], CROPS[3], CROPS[5]];
            setPlan(defaultPlan);
            setShowResults(true);
          }}
          className="flex-1 bg-white border border-gray-200 text-gray-600 rounded-lg py-3 font-bold text-sm hover:bg-gray-50 transition-colors active:scale-95"
        >
          ✨ AI Pick
        </button>
        <button
          onClick={() => {
            setPlan([null, null, null, null]);
            setShowResults(false);
          }}
          className="bg-white border border-gray-200 text-gray-600 rounded-lg px-4 py-3 hover:bg-gray-50 transition-colors active:scale-95"
        >
          🔄
        </button>
      </div>

      {/* Results */}
      {showResults && (
        <div className="px-4 space-y-2 pb-4">
          <Benefit
            emoji="🌱"
            title="Natural nitrogen fixation"
            desc="Lentil adds 40–60 kg N/ha naturally, cutting fertilizer costs next season."
          />
          <Benefit
            emoji="🌍"
            title="High crop diversity"
            desc="Multiple different crops promote soil microbial health and reduce disease risk."
          />
          <Benefit
            emoji="🔄"
            title="Rotation cycle"
            desc={plan.filter(Boolean).map((c) => c?.emoji).join(" → ")}
          />
        </div>
      )}

      {/* Modal */}
      {activeSlot >= 0 && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-end backdrop-blur-sm">
          <div className="w-full max-h-[75%] bg-gray-50 rounded-t-3xl overflow-y-auto">
            <div className="sticky top-0 bg-gray-50 px-4 pt-4 pb-2">
              <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
              <h3 className="font-display font-bold text-gray-700 mb-4">
                Choose a crop
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-2 px-4 pb-4">
              {CROPS.map((crop) => (
                <button
                  key={crop.name}
                  onClick={() => selectCrop(CROPS.indexOf(crop))}
                  className="bg-white rounded-lg p-3 text-center cursor-pointer hover:bg-leaf-glow hover:border-leaf-light transition-all border-2 border-transparent"
                >
                  <div className="text-4xl mb-1">{crop.emoji}</div>
                  <div className="text-xs font-bold text-gray-600">
                    {crop.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </PhoneFrame>
  );
}

function Benefit({
  emoji,
  title,
  desc,
}: {
  emoji: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm flex gap-3">
      <div className="text-2xl flex-shrink-0">{emoji}</div>
      <div>
        <p className="text-sm font-bold text-gray-700 mb-1">{title}</p>
        <span className="text-xs text-gray-400 font-medium leading-tight">
          {desc}
        </span>
      </div>
    </div>
  );
}
