import React from "react";
import { PhoneFrame } from "@/components/layout/PhoneFrame";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const FORECAST = [
  { day: "Today", icon: "⛈️", desc: "Thunderstorm", rain: "85%", hi: 28, lo: 21 },
  { day: "Tue", icon: "🌧️", desc: "Light rain", rain: "60%", hi: 26, lo: 20 },
  { day: "Wed", icon: "⛅", desc: "Partly cloudy", rain: "15%", hi: 30, lo: 22 },
  { day: "Thu", icon: "☀️", desc: "Sunny", rain: "5%", hi: 33, lo: 23 },
  { day: "Fri", icon: "☀️", desc: "Clear", rain: "5%", hi: 34, lo: 24 },
  { day: "Sat", icon: "🌤️", desc: "Mostly sunny", rain: "10%", hi: 32, lo: 23 },
  { day: "Sun", icon: "⛅", desc: "Cloudy", rain: "30%", hi: 29, lo: 21 },
];

export default function Weather() {
  return (
    <PhoneFrame showNav={false}>
      {/* Header with Back */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 px-5 py-5 pb-8">
        <Link
          to="/more"
          className="flex items-center gap-1.5 text-white/85 text-sm font-bold mb-4 hover:text-white transition-colors"
        >
          <ArrowLeft size={18} /> Back
        </Link>
        <h2 className="font-display text-xl font-bold text-white mb-1">
          Weather Forecast
        </h2>
        <p className="text-sm text-white/60 font-medium">
          Kathmandu Valley · Farm-specific
        </p>
      </div>

      {/* Today Card */}
      <div className="px-4 -mt-6 relative z-10 mb-4">
        <div className="bg-white rounded-2xl p-5 shadow-lg flex items-center gap-4">
          <div className="text-7xl">⛈️</div>
          <div>
            <div className="font-display text-4xl font-bold text-gray-700 leading-none">
              28°C
            </div>
            <p className="text-sm text-gray-400 font-semibold mt-1">
              Thunderstorm
            </p>
            <p className="text-xs text-gray-400 font-semibold">H: 28° · L: 21°</p>
          </div>
        </div>
      </div>

      {/* 7-Day Forecast */}
      <div className="px-4 space-y-2 pb-4">
        {FORECAST.map((day) => (
          <div
            key={day.day}
            className="bg-white rounded-lg p-3 flex items-center gap-3 shadow-sm"
          >
            <span className="text-sm font-bold text-gray-600 w-16">
              {day.day}
            </span>
            <span className="text-2xl">{day.icon}</span>
            <span className="flex-1 text-xs text-gray-400 font-semibold">
              {day.desc}
            </span>
            <span className="text-xs font-bold text-sky">💧 {day.rain}</span>
            <span className="text-sm font-bold text-gray-700 w-12 text-right">
              {day.hi}/{day.lo}°
            </span>
          </div>
        ))}
      </div>
    </PhoneFrame>
  );
}
