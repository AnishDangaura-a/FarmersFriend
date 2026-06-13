import React, { useState } from "react";
import { PhoneFrame } from "@/components/layout/PhoneFrame";

export default function Soil() {
  const [crop, setCrop] = useState("wheat");
  const [area, setArea] = useState(2);
  const [soilType, setSoilType] = useState("loam");
  const [pH, setPH] = useState(6.5);
  const [nitrogenLevel, setNitrogenLevel] = useState("medium");
  const [previousCrop, setPreviousCrop] = useState("legume");
  const [result, setResult] = useState<any>(null);

  const soilDB: Record<
    string,
    { n: number[]; p: number[]; k: number[] }
  > = {
    wheat: { n: [100, 80, 60], p: [60, 50, 40], k: [40, 30, 25] },
    rice: { n: [120, 100, 70], p: [60, 50, 40], k: [60, 50, 40] },
    tomato: { n: [150, 120, 90], p: [80, 70, 60], k: [100, 80, 60] },
    potato: { n: [120, 100, 80], p: [80, 70, 60], k: [150, 120, 100] },
    maize: { n: [150, 120, 90], p: [75, 60, 50], k: [50, 40, 30] },
    lentil: { n: [20, 15, 10], p: [40, 35, 30], k: [25, 20, 15] },
  };

  const handleCalculate = () => {
    const d = soilDB[crop];
    const ni = nitrogenLevel === "low" ? 0 : nitrogenLevel === "medium" ? 1 : 2;
    let n = Math.round(d.n[ni] * area);
    let p = Math.round(d.p[ni] * area);
    let k = Math.round(d.k[ni] * area);

    if (previousCrop === "legume") n = Math.round(n * 0.75);

    const dap = Math.round(p * 2.17);
    const urea = Math.round(Math.max(0, n - dap * 0.18) * 2.17);
    const mop = Math.round(k * 1.67);

    setResult({ n, p, k, dap, urea, mop, pH });
  };

  return (
    <PhoneFrame>
      {/* Header */}
      <div className="bg-gradient-to-br from-earth via-earth/80 to-earth/60 px-5 py-5">
        <h2 className="font-display text-xl font-bold text-white mb-1">
          🧪 Soil Calculator
        </h2>
        <p className="text-sm text-white/65 font-medium">
          Get precise fertilizer recommendations for your field
        </p>
      </div>

      {/* Form */}
      <div className="px-4 py-4">
        <div className="bg-white rounded-2xl p-5 shadow-md space-y-4">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-3">
            <FormField label="Crop">
              <select
                value={crop}
                onChange={(e) => setCrop(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 bg-gray-50 focus:border-leaf focus:outline-none focus:ring-2 focus:ring-leaf-glow transition-all"
              >
                <option value="wheat">🌾 Wheat</option>
                <option value="rice">🌿 Rice</option>
                <option value="tomato">🍅 Tomato</option>
                <option value="potato">🥔 Potato</option>
                <option value="maize">🌽 Maize</option>
                <option value="lentil">🫘 Lentil</option>
              </select>
            </FormField>
            <FormField label="Area (bigha)">
              <input
                type="number"
                value={area}
                onChange={(e) => setArea(parseFloat(e.target.value))}
                min="0.5"
                step="0.5"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 bg-gray-50 focus:border-leaf focus:outline-none focus:ring-2 focus:ring-leaf-glow transition-all"
              />
            </FormField>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-3">
            <FormField label="Soil Type">
              <select
                value={soilType}
                onChange={(e) => setSoilType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 bg-gray-50 focus:border-leaf focus:outline-none focus:ring-2 focus:ring-leaf-glow transition-all"
              >
                <option value="loam">Loamy</option>
                <option value="clay">Clayey</option>
                <option value="sandy">Sandy</option>
                <option value="silt">Silty</option>
              </select>
            </FormField>
            <FormField label="Soil pH">
              <input
                type="number"
                value={pH}
                onChange={(e) => setPH(parseFloat(e.target.value))}
                min="4"
                max="9"
                step="0.1"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 bg-gray-50 focus:border-leaf focus:outline-none focus:ring-2 focus:ring-leaf-glow transition-all"
              />
            </FormField>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-3">
            <FormField label="Nitrogen Level">
              <select
                value={nitrogenLevel}
                onChange={(e) => setNitrogenLevel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 bg-gray-50 focus:border-leaf focus:outline-none focus:ring-2 focus:ring-leaf-glow transition-all"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </FormField>
            <FormField label="Previous Crop">
              <select
                value={previousCrop}
                onChange={(e) => setPreviousCrop(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 bg-gray-50 focus:border-leaf focus:outline-none focus:ring-2 focus:ring-leaf-glow transition-all"
              >
                <option value="legume">Legume/Pulse</option>
                <option value="cereal">Cereal</option>
                <option value="vegetable">Vegetable</option>
                <option value="fallow">Fallow</option>
              </select>
            </FormField>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full py-3.5 bg-gradient-to-br from-leaf to-forest-200 text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-shadow active:scale-95"
          >
            📊 Calculate Recommendations
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="mt-6 space-y-4">
            {/* NPK Results */}
            <div className="grid grid-cols-3 gap-2">
              <ResultCard
                label="N"
                value={result.n}
                unit="kg/bigha"
                bgColor="bg-leaf/10"
                textColor="text-forest-200"
              />
              <ResultCard
                label="P"
                value={result.p}
                unit="kg/bigha"
                bgColor="bg-gold/10"
                textColor="text-gold"
              />
              <ResultCard
                label="K"
                value={result.k}
                unit="kg/bigha"
                bgColor="bg-sky/10"
                textColor="text-sky"
              />
            </div>

            {/* Fertilizer Plan */}
            <div className="bg-white rounded-2xl p-4 shadow-md">
              <h3 className="font-display font-bold text-gray-700 mb-3">
                📋 Fertilizer Schedule
              </h3>
              <div className="space-y-2">
                <FertRow
                  emoji="🌱"
                  name="DAP (18:46:0)"
                  detail="Apply at sowing"
                  amount={`${result.dap} kg`}
                />
                <FertRow
                  emoji="🌾"
                  name="Urea (46% N)"
                  detail="Split: 30 & 60 days"
                  amount={`${result.urea} kg`}
                />
                <FertRow
                  emoji="💧"
                  name="MOP (0:0:60)"
                  detail="Mix with DAP at sowing"
                  amount={`${result.mop} kg`}
                />
              </div>
            </div>

            {/* Notes */}
            {result.pH < 5.5 && (
              <div className="bg-red-50 border-l-4 border-l-red-500 rounded-lg p-3">
                <p className="text-xs text-red-700 font-semibold">
                  ⚠️ Acidic soil (pH {result.pH}) — apply 200–400 kg lime per
                  bigha before sowing.
                </p>
              </div>
            )}
            {result.pH > 7.5 && (
              <div className="bg-gold/10 border-l-4 border-l-gold rounded-lg p-3">
                <p className="text-xs text-warn font-semibold">
                  ⚠️ Alkaline soil (pH {result.pH}) — apply sulfur or organic
                  matter to lower pH.
                </p>
              </div>
            )}
            {previousCrop === "legume" && (
              <div className="bg-leaf-glow border-l-4 border-l-leaf-light rounded-lg p-3">
                <p className="text-xs text-forest-200 font-semibold">
                  ✅ Previous legume: N reduced by 25% — nitrogen credit
                  applied.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </PhoneFrame>
  );
}

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}

function ResultCard({
  label,
  value,
  unit,
  bgColor,
  textColor,
}: {
  label: string;
  value: number;
  unit: string;
  bgColor: string;
  textColor: string;
}) {
  return (
    <div className="bg-white rounded-lg p-3 text-center shadow-sm">
      <span
        className={`text-xs font-bold px-2 py-1 rounded-full inline-block mb-2 ${bgColor} ${textColor}`}
      >
        {label}
      </span>
      <div className="font-display text-2xl font-bold text-gray-700">
        {value}
      </div>
      <div className="text-xs text-gray-400 font-semibold mt-1">{unit}</div>
    </div>
  );
}

function FertRow({
  emoji,
  name,
  detail,
  amount,
}: {
  emoji: string;
  name: string;
  detail: string;
  amount: string;
}) {
  return (
    <div className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
      <div className="text-2xl">{emoji}</div>
      <div className="flex-1">
        <p className="text-xs font-bold text-gray-700">{name}</p>
        <p className="text-xs text-gray-400 font-medium">{detail}</p>
      </div>
      <div className="font-display font-bold text-forest-200 text-sm">
        {amount}
      </div>
    </div>
  );
}
