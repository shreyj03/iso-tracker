import React from "react";
import { analyzeIPO } from "@/app/api/actions";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#b0dee9] relative flex flex-col items-center justify-center font-sans">
      {/* Back Arrow - Top Left */}
      <button 
        className="absolute top-8 left-8 p-2 hover:opacity-70 transition-opacity"
        aria-label="Go back"
      >
        <svg 
          width="86" 
          height="20" 
          viewBox="0 0 86 20" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 10L86 0V20L0 10Z" fill="black"/> 
        </svg>
      </button>

      {/* Main Content */}
      <main className="flex flex-col items-center gap-8 w-full px-4">
        <h1 className="text-4xl md:text-7xl font-serif text-black tracking-tight text-center">
          ENTER IPO TICKER
        </h1>

        <form action={analyzeIPO} className="flex flex-col md:flex-row items-center gap-4">
          {/* Input Box */}
          <div className="relative w-full md:w-auto">
            <input
              name="ticker"
              type="text"
              placeholder="FIG"
              required
              className="w-full md:w-[448px] h-[97px] bg-[#b0dee9] border border-black text-center text-5xl text-black placeholder-black/30 focus:outline-none font-thin uppercase tracking-widest"
            />
          </div>

          {/* Go Button */}
          <button 
            type="submit"
            className="w-[47px] h-[59px] rounded-full border border-black flex items-center justify-center hover:bg-black/5 transition-colors shrink-0"
            aria-label="Submit"
          >
            <svg 
              width="14" 
              height="20" 
              viewBox="0 0 14 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 10L0 0V20L14 10Z" fill="black"/>
            </svg>
          </button>
        </form>
      </main>
    </div>
  );
}
