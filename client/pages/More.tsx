import React from "react";
import { PhoneFrame } from "@/components/layout/PhoneFrame";
import { Link } from "react-router-dom";
import {
  Cloud,
  RotateCcw,
  Calendar,
  History,
  Settings,
  MapPin,
} from "lucide-react";

export default function More() {
  return (
    <PhoneFrame>
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-forest via-forest-50 to-forest-100 px-5 py-8 text-center relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-leaf-light/5 pointer-events-none" />

        <div className="w-18 h-18 rounded-full bg-gradient-to-br from-leaf-light to-leaf flex items-center justify-center text-5xl mx-auto mb-4 shadow-lg relative z-10">
          👨‍🌾
        </div>
        <h1 className="font-display text-2xl font-bold text-white mb-2">
          Anish's Farm
        </h1>
        <div className="flex items-center justify-center gap-1 text-sm text-white/60 font-medium mb-4">
          <MapPin size={14} />
          Kathmandu Valley, Nepal
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8">
          <Stat value="5" label="Bigha" />
          <Stat value="3" label="Crops" />
          <Stat value="12" label="Scans" />
        </div>
      </div>

      {/* Menu */}
      <div className="px-4 py-4 space-y-0 mb-4">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <MenuItem
            to="/weather"
            icon="☁️"
            title="Weather Forecast"
            desc="7-day farm-specific forecast"
            bgColor="bg-sky/10"
          />
          <MenuItem
            to="/rotation"
            icon="🔄"
            title="Crop Rotation Planner"
            desc="Plan 4 seasons for max yield"
            bgColor="bg-leaf-glow"
          />
          <MenuItem
            icon="📅"
            title="Farm Calendar"
            desc="Tasks, reminders & schedules"
            bgColor="bg-gold/10"
          />
          <MenuItem
            icon="📋"
            title="Scan History"
            desc="Previous AI scan results"
            bgColor="bg-earth/10"
          />
          <MenuItem
            icon="⚙️"
            title="Settings"
            desc="Language, notifications, profile"
            bgColor="bg-red-100"
            isLast
          />
        </div>
      </div>

      {/* Footer */}
      <div className="text-center px-4 pb-4 text-xs text-gray-400 font-semibold">
        Farmers Friend v2.0 · Powered by Claude AI
      </div>
    </PhoneFrame>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-white/50 font-semibold mt-1">{label}</div>
    </div>
  );
}

interface MenuItemProps {
  icon: string;
  title: string;
  desc: string;
  bgColor: string;
  to?: string;
  isLast?: boolean;
}

function MenuItem({
  icon,
  title,
  desc,
  bgColor,
  to,
  isLast,
}: MenuItemProps) {
  const content = (
    <>
      <div
        className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center text-xl flex-shrink-0`}
      >
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
    </>
  );

  return (
    <div
      className={`flex items-center gap-4 px-5 py-4 transition-colors hover:bg-gray-50 active:bg-gray-100 ${
        !isLast ? "border-b border-gray-50" : ""
      } ${to ? "cursor-pointer" : ""}`}
    >
      {to ? <Link to={to} className="contents">{content}</Link> : content}
    </div>
  );
}
