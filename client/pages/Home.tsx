import React from "react";
import { PhoneFrame } from "@/components/layout/PhoneFrame";
import { Link } from "react-router-dom";
import { Bell } from "lucide-react";

export default function Home() {
  return (
    <PhoneFrame>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-forest via-forest-100 to-forest-200 px-5 py-5 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-leaf-light/10 pointer-events-none" />
        <div className="absolute -bottom-10 right-5 text-8xl opacity-10 pointer-events-none select-none">
          🌾
        </div>

        {/* Greeting Header */}
        <div className="flex justify-between items-start mb-5 relative z-10">
          <div>
            <p className="text-sm text-white/65 font-medium mb-1">
              Good morning 🌤️
            </p>
            <h1 className="font-display text-2xl font-bold text-white">
              Anish's Farm
            </h1>
          </div>
          <button className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white text-xl hover:bg-white/15 transition-colors relative backdrop-blur">
            <Bell size={20} />
            <div className="w-2 h-2 bg-gold rounded-full absolute top-2 right-2 border border-forest" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 relative z-10">
          <StatBox icon="🌾" value="87%" label="Health" />
          <StatBox icon="📅" value="18d" label="Harvest" />
          <StatBox icon="⚠️" value="2" label="Alerts" />
        </div>
      </div>

      {/* Content */}
      <div className="px-4">
        {/* Field Health Section */}
        <SectionHeader title="Field Health" action="View all" />
        <HealthCard />

        {/* Quick Actions */}
        <SectionHeader title="Quick Actions" />
        <div className="grid grid-cols-4 gap-3 mb-4">
          <QuickActionBtn
            to="/advisor"
            icon="🤖"
            label="AI Advisor"
            bgColor="bg-leaf-glow"
          />
          <QuickActionBtn
            to="/scan"
            icon="🔍"
            label="Scan Crop"
            bgColor="bg-gold/10"
          />
          <QuickActionBtn
            to="/soil"
            icon="🧪"
            label="Soil Calc"
            bgColor="bg-earth/10"
          />
          <QuickActionBtn
            to="/market"
            icon="📊"
            label="Market Prices"
            bgColor="bg-sky/10"
          />
        </div>

        {/* Alerts */}
        <SectionHeader title="Alerts" action="2 active" />
        <div className="flex flex-col gap-2 mb-4">
          <AlertItem
            type="danger"
            icon="🐛"
            title="Aphid risk — Sector B"
            desc="High humidity · inspect crops today"
          />
          <AlertItem
            type="warn"
            icon="💧"
            title="Irrigate within 48 hours"
            desc="Soil moisture dropping · wheat affected"
          />
          <AlertItem
            type="good"
            icon="☀️"
            title="Spray window: Saturday 7–10 AM"
            desc="Low wind, no rain forecast"
          />
        </div>

        {/* Tip */}
        <div className="bg-gradient-to-br from-forest-100 to-forest rounded-2xl p-5 mb-4 relative overflow-hidden">
          <div className="absolute right-4 top-3 text-4xl opacity-20">💡</div>
          <span className="inline-block bg-leaf-light/20 text-leaf-light text-xs font-bold px-2.5 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            Today's Tip
          </span>
          <p className="text-white/85 text-sm leading-relaxed font-medium">
            Rotate legumes like lentils after wheat to fix 40–60 kg N/ha
            naturally — saving you fertilizer cost next season while breaking
            pest cycles.
          </p>
        </div>
      </div>
    </PhoneFrame>
  );
}

function StatBox({
  icon,
  value,
  label,
}: {
  icon: string;
  value: string;
  label: string;
}) {
  return (
    <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur border border-white/5">
      <div className="text-base mb-1">{icon}</div>
      <div className="font-display text-xl font-bold text-white leading-none">
        {value}
      </div>
      <div className="text-[10px] font-bold text-white/60 mt-1 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

function HealthCard() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="font-display text-lg font-bold text-gray-700">
            Wheat — Sector A
          </div>
          <div className="text-sm font-semibold text-gray-400 mt-1">
            Flowering stage · 18 days to harvest
          </div>
          <div className="inline-flex items-center gap-1 bg-leaf-glow text-forest-200 text-xs font-bold px-2.5 py-1 rounded-full mt-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M13 3l4 8h7l-5.5 4 2 6.5L13 17 7.5 21.5 9.5 15 4 11h7l4-8z"
                fill="currentColor"
              />
            </svg>
            Looking good
          </div>
        </div>
        <div className="w-16 h-16 rounded-full bg-conic-gradient flex items-center justify-center relative">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              backgroundImage:
                "conic-gradient(#3DD68C 0% 87%, #E4EDE8 87% 100%)",
            }}
          />
          <div className="w-12 h-12 bg-white rounded-full absolute" />
          <span className="font-display text-base font-bold text-forest relative z-10">
            87%
          </span>
        </div>
      </div>

      {/* Nutrient Bars */}
      <div className="space-y-3">
        {[
          { label: "N", value: 72, color: "from-leaf to-leaf-light" },
          { label: "P", value: 58, color: "from-gold to-gold-light" },
          { label: "K", value: 81, color: "from-sky to-sky-light" },
          { label: "pH", value: 80, color: "from-purple-500 to-purple-300" },
        ].map((nutrient) => (
          <div key={nutrient.label} className="flex items-center gap-3">
            <span className="text-xs font-bold text-gray-600 w-7">
              {nutrient.label}
            </span>
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${nutrient.color} rounded-full`}
                style={{ width: `${nutrient.value}%` }}
              />
            </div>
            <span className="text-xs font-bold text-gray-600 w-8 text-right">
              {nutrient.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuickActionBtn({
  to,
  icon,
  label,
  bgColor,
}: {
  to: string;
  icon: string;
  label: string;
  bgColor: string;
}) {
  return (
    <Link
      to={to}
      className="bg-white rounded-lg p-2.5 flex flex-col items-center gap-1.5 shadow-sm hover:shadow-md transition-shadow active:scale-95"
    >
      <div className={`w-11 h-11 rounded-lg ${bgColor} flex items-center justify-center text-xl`}>
        {icon}
      </div>
      <span className="text-[10px] font-bold text-gray-600 text-center leading-tight">
        {label}
      </span>
    </Link>
  );
}

function SectionHeader({
  title,
  action,
}: {
  title: string;
  action?: string;
}) {
  return (
    <div className="flex justify-between items-center my-5">
      <h2 className="font-display text-base font-bold text-gray-700">
        {title}
      </h2>
      {action && (
        <span className="text-sm font-bold text-leaf cursor-pointer">
          {action}
        </span>
      )}
    </div>
  );
}

function AlertItem({
  type,
  icon,
  title,
  desc,
}: {
  type: "danger" | "warn" | "good";
  icon: string;
  title: string;
  desc: string;
}) {
  const borderColors = {
    danger: "border-l-red-500",
    warn: "border-l-gold",
    good: "border-l-leaf-light",
  };
  const bgColors = {
    danger: "bg-red-50",
    warn: "bg-gold/10",
    good: "bg-leaf-glow",
  };
  const iconBgColors = {
    danger: "bg-red-100",
    warn: "bg-gold/20",
    good: "bg-leaf-glow",
  };

  return (
    <div
      className={`bg-white rounded-lg p-3 flex items-center gap-3 border-l-4 ${borderColors[type]} shadow-sm`}
    >
      <div className={`w-10 h-10 rounded-lg ${iconBgColors[type]} flex items-center justify-center text-xl flex-shrink-0`}>
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm font-bold text-gray-700">{title}</p>
        <span className="text-xs text-gray-400 font-medium">{desc}</span>
      </div>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="text-gray-300 flex-shrink-0"
      >
        <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
