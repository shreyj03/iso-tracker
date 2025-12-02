'use client';
import Link from 'next/link';
import { useState } from 'react';
// import { useRouter } from 'next/navigation';
import { analyzeIPO } from '../api/openai';

export default function SearchPage() {
  const [ticker, setTicker] = useState('');
  // const router = useRouter();

  // const handleSearch = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!ticker.trim()) return;
  //   console.log('Searching for ticker:', ticker);
  //   router.push(`/results?ticker=${ticker}`);
  // };

  return (
    <div className="min-h-screen bg-[#C5E8E8] flex flex-col items-center justify-center px-4">
      <Link href='/'>
      <div className="absolute top-8 left-8">
        <h1 className="text-2xl font-light tracking-wider text-gray-800">LAUNCH</h1>
      </div>
      </Link>

      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-light tracking-widest text-gray-800 mb-2">
            ENTER IPO TICKER
          </h2>
        </div>

         {/* Search Bar */}
        <form action={analyzeIPO} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="ticker"
              value={ticker}
              onChange={(e) => setTicker(e.target.value.toUpperCase())}
              placeholder="FIG"
              className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border border-gray-300 
                         rounded-lg text-center text-lg font-light tracking-wider text-gray-800
                         placeholder:text-black-400 focus:outline-none focus:ring-2 
                         focus:ring-gray-400 focus:border-transparent
                         transition-all duration-200"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 
                         w-8 h-8 flex items-center justify-center
                         bg-gray-800 hover:bg-gray-700 rounded-full
                         transition-colors duration-200
                         disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!ticker.trim()}
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>
        <div className="text-center text-base text-gray-800 font-medium">
          <p>Enter a company ticker to view IPO information</p>
        </div>
      </div>
    </div>
  );
}