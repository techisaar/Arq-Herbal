import React from "react";

interface BotanicalLeavesProps {
  position: "left-top" | "right-top" | "left-middle" | "right-middle" | "left-bottom" | "right-bottom";
  className?: string;
}

export function BotanicalBranch({ position, className = "" }: BotanicalLeavesProps) {
  const isLeft = position.startsWith("left");

  if (isLeft) {
    return (
      <div
        className={`pointer-events-none select-none absolute z-0 opacity-45 mix-blend-multiply transition-opacity duration-1000 ${className}`}
        aria-hidden="true"
      >
        <svg
          width="320"
          height="420"
          viewBox="0 0 320 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main botanical stalk */}
          <path
            d="M-40 400 C 30 310, 110 220, 190 90 C 220 40, 250 10, 290 -20"
            stroke="#536E56"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.55"
          />
          {/* Detailed watercolor leaves */}
          <path
            d="M50 300 C 90 280, 140 295, 160 320 C 130 335, 75 325, 50 300 Z"
            fill="#759379"
            fillOpacity="0.5"
          />
          <path
            d="M85 260 C 130 235, 175 240, 205 260 C 165 285, 120 280, 85 260 Z"
            fill="#617F65"
            fillOpacity="0.45"
          />
          <path
            d="M120 205 C 85 170, 70 135, 80 110 C 110 125, 120 165, 120 205 Z"
            fill="#8EA990"
            fillOpacity="0.55"
          />
          <path
            d="M150 165 C 190 140, 235 145, 260 170 C 220 185, 175 180, 150 165 Z"
            fill="#6E8C73"
            fillOpacity="0.5"
          />
          <path
            d="M185 115 C 165 70, 155 35, 180 15 C 200 45, 200 85, 185 115 Z"
            fill="#5E7C62"
            fillOpacity="0.55"
          />
          <path
            d="M220 65 C 260 45, 295 50, 315 70 C 280 85, 245 80, 220 65 Z"
            fill="#7E9F82"
            fillOpacity="0.45"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`pointer-events-none select-none absolute z-0 opacity-45 mix-blend-multiply transition-opacity duration-1000 ${className}`}
      aria-hidden="true"
    >
      <svg
        width="340"
        height="440"
        viewBox="0 0 340 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main stem arching downward */}
        <path
          d="M360 -20 C 290 60, 210 160, 130 300 C 85 370, 50 415, 5 450"
          stroke="#536E56"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeOpacity="0.55"
        />
        {/* Leaf pairs */}
        <path
          d="M275 60 C 230 75, 185 55, 160 25 C 195 20, 245 35, 275 60 Z"
          fill="#759379"
          fillOpacity="0.5"
        />
        <path
          d="M250 110 C 205 130, 160 125, 135 100 C 175 85, 215 90, 250 110 Z"
          fill="#5F7E63"
          fillOpacity="0.45"
        />
        <path
          d="M205 165 C 240 200, 255 235, 240 260 C 210 245, 205 205, 205 165 Z"
          fill="#8EA990"
          fillOpacity="0.55"
        />
        <path
          d="M175 220 C 130 245, 85 240, 60 215 C 100 200, 145 205, 175 220 Z"
          fill="#6E8C73"
          fillOpacity="0.5"
        />
        <path
          d="M135 285 C 160 325, 170 365, 150 385 C 125 355, 125 320, 135 285 Z"
          fill="#5E7C62"
          fillOpacity="0.55"
        />
        <path
          d="M100 340 C 60 360, 25 350, 10 330 C 45 315, 80 320, 100 340 Z"
          fill="#7E9F82"
          fillOpacity="0.45"
        />
      </svg>
    </div>
  );
}
