import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { icon: 28, text: "text-lg" },
  md: { icon: 36, text: "text-xl" },
  lg: { icon: 48, text: "text-2xl" },
};

export default function Logo({
  className = "",
  showText = true,
  size = "md",
}: LogoProps) {
  const { icon, text } = sizeMap[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Minimalist geometric sheep icon */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Wool / cloud body */}
        <circle cx="16" cy="18" r="7" fill="#4f46e5" opacity="0.85" />
        <circle cx="28" cy="16" r="8" fill="#4f46e5" opacity="0.9" />
        <circle cx="36" cy="22" r="6" fill="#4f46e5" opacity="0.8" />
        <circle cx="22" cy="24" r="8" fill="#6366f1" />
        <circle cx="32" cy="26" r="7" fill="#6366f1" opacity="0.9" />

        {/* Head */}
        <ellipse cx="14" cy="28" rx="6" ry="7" fill="#1e1b4b" />
        {/* Eye */}
        <circle cx="12.5" cy="26.5" r="1.5" fill="white" />
        <circle cx="12.5" cy="26.5" r="0.7" fill="#1e1b4b" />

        {/* Ears */}
        <ellipse
          cx="9"
          cy="22"
          rx="2.5"
          ry="4"
          fill="#312e81"
          transform="rotate(-15 9 22)"
        />

        {/* Legs */}
        <rect x="19" y="33" width="3" height="8" rx="1.5" fill="#1e1b4b" />
        <rect x="30" y="33" width="3" height="8" rx="1.5" fill="#1e1b4b" />
      </svg>

      {showText && (
        <span className={`font-bold tracking-tight ${text}`}>
          <span className="text-primary-600">The</span>{" "}
          <span className="text-gray-900">Sheep</span>
        </span>
      )}
    </div>
  );
}
