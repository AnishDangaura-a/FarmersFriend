import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Leaf,
  Scan,
  BarChart3,
  Grid3x3,
  Bell,
  ArrowLeft,
} from "lucide-react";

interface PhoneFrameProps {
  children: React.ReactNode;
  showNav?: boolean;
  onBackClick?: () => void;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  showNav = true,
  onBackClick,
}) => {
  const [time, setTime] = useState("9:41");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };
    updateClock();
    const interval = setInterval(updateClock, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-forest via-forest-50 to-forest-100 p-4 md:p-0">
      <div className="w-full max-w-[390px] h-screen md:h-[844px] bg-gray-50 rounded-[44px] overflow-hidden relative flex flex-col shadow-2xl md:shadow-lg border border-white/10">
        {/* Status Bar */}
        <div className="bg-forest px-7 py-3.5 flex justify-between items-center flex-shrink-0 text-xs">
          <span className="font-display font-semibold text-white text-sm">
            {time}
          </span>
          <div className="flex gap-1.5 items-center text-white text-xs">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2 5h20M2 19h20M8 5v14M16 5v14" />
            </svg>
            <span>4G</span>
            <svg width="10" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 7H4c-1.1 0-2 .9-2 2v10c0 1.1.9 1.99 2 1.99L20 21c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-2 11h-4v-2h4v2z" />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth pb-[90px]">
          {children}
        </div>

        {/* Bottom Navigation */}
        {showNav && (
          <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex px-1 py-2 z-50 shadow-lg">
            <NavItem
              to="/"
              icon={<Home size={22} />}
              label="Home"
              defaultActive
            />
            <NavItem to="/crops" icon={<Leaf size={22} />} label="Crops" />
            <NavItem
              to="/scan"
              icon={<Scan size={22} />}
              label="Scan"
              isScan
            />
            <NavItem to="/market" icon={<BarChart3 size={22} />} label="Market" />
            <NavItem to="/more" icon={<Grid3x3 size={22} />} label="More" />
          </nav>
        )}
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isScan?: boolean;
  defaultActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  to,
  icon,
  label,
  isScan,
  defaultActive,
}) => {
  const isActive = window.location.pathname === to;
  const activeClass = isActive ? "text-leaf" : "text-gray-400";

  if (isScan) {
    return (
      <Link
        to={to}
        className="flex-1 flex flex-col items-center justify-center relative -mt-4 group"
      >
        <div
          className={`w-14 h-14 rounded-full bg-gradient-to-br from-leaf to-forest-200 flex items-center justify-center text-white transition-all ${
            isActive ? "shadow-lg shadow-leaf/50" : "shadow-md"
          }`}
        >
          {icon}
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={to}
      className={`flex-1 flex flex-col items-center gap-1 py-1 rounded-lg transition-all ${activeClass}`}
    >
      {isActive && (
        <div className="w-1.5 h-1.5 rounded-full bg-leaf-light shadow-glow" />
      )}
      <div className="text-xl">{icon}</div>
      <span className="text-[10px] font-bold tracking-wide">{label}</span>
    </Link>
  );
};
