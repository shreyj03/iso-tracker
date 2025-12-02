import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center font-sans text-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#b0dee9] mb-4"></div>
      <h2 className="text-xl font-light tracking-wide animate-pulse">ANALYZING IPO DATA...</h2>
      <p className="text-white/60 mt-2 font-light">This may take a moment</p>
    </div>
  );
}