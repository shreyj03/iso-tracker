import React from "react";
// import the api function to fetch analysis data
import { getIPOAnalysis } from "../../api/openai";
import Link from "next/link";
// utility to save the ticker to our database
import insertNewTicker from "@/lib/insertNewTicker";

// interface for page props, accessing dynamic route params
interface PageProps {
  params: Promise<{ ticker: string }>;
}

// report page component that fetches and displays stock analysis
export default async function ReportPage({ params }: PageProps) {
  // retrieve the ticker symbol from route parameters
  const { ticker } = await params;
  
  // fetch analysis data from the openai api
  const analysis = await getIPOAnalysis(ticker);

  // save the ticker and its score to the database
  await insertNewTicker(ticker, analysis.IPO_Attractiveness_Score);

  // display error message if analysis fails or returns no data
  if (!analysis) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 font-sans text-white">
        <h1 className="text-3xl font-bold mb-4">Analysis Failed</h1>
        <p className="mb-8 opacity-60">Could not analyze ticker: {ticker}</p>
        {/* navigation link to return to the search page */}
        <Link 
          href="/"
          className="px-8 py-4 bg-[#b0dee9] text-black rounded-full font-light text-sm tracking-wide hover:opacity-90 transition-opacity"
        >
          SEARCH ANOTHER STOCK
        </Link>
      </div>
    );
  }

  // render the main report layout
  return (
    <div className="min-h-screen bg-black text-white font-sans relative">
      {/* header with home link */}
       <Link href='/'>
      <div className="absolute top-8 left-8">
        <h1 className="text-2xl font-light tracking-wider text-white">LAUNCH</h1>
      </div>
      </Link>

      <main className="w-full max-w-[1512px] mx-auto pt-8 pb-16 px-8 flex flex-col items-center">
        {/* display the ticker symbol prominently */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-[128px] font-serif font-light leading-none tracking-tight">
            {ticker.toUpperCase()}
          </h1>
          {/* conditionally render the company name */}
          {analysis.Company_Name && (
            <p className="text-xl md:text-2xl font-light opacity-60 mt-4 tracking-wide">
              {analysis.Company_Name}
            </p>
          )}
        </div>

        {/* main grid layout for report content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-[1200px]">
          
          {/* left column containing description and score */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="border border-white h-[451px] p-8 relative">
              <h2 className="text-2xl font-light underline decoration-1 underline-offset-8 text-center mb-6">
                Description
              </h2>
              {/* scrollable container for company description */}
              <div className="overflow-y-auto h-[350px] pr-2 font-light text-lg leading-relaxed">
                <p className="mb-6">{analysis.Company_Description}</p>
                <h3 className="text-xl font-normal mb-2 text-white/80">Verdict</h3>
                <p>{analysis.Score_justification}</p>
              </div>
            </div>

            {/* display the attractiveness score */}
            <div className="border border-white h-[151px] relative flex items-center justify-center">
              <span className="absolute top-4 font-light text-sm tracking-widest uppercase opacity-80">
                Score
              </span>
              <div className="flex items-baseline gap-4 mt-4">
                <span className="text-6xl md:text-[96px] font-light leading-none">
                  {analysis.IPO_Attractiveness_Score}
                </span>
                <span className="text-lg md:text-2xl font-light opacity-80">
                  of 100
                </span>
              </div>
            </div>
          </div>

            {/* right column containing detailed pros and cons */}
          <div className="lg:col-span-7">
            <div className="border border-white h-[750px] p-8 relative">
              <h2 className="text-2xl font-light underline decoration-1 underline-offset-8 text-center mb-8">
                Analysis
              </h2>
              {/* scrollable container for analysis lists */}
              <div className="overflow-y-auto h-[600px] pr-4 pb-4 space-y-8 font-light">
                {/* potential advantages section */}
                <div>
                  <h3 className="text-xl font-normal mb-4 text-[#b0dee9]">Potential Advantages</h3>
                  <ul className="space-y-4 list-disc pl-5 marker:text-[#b0dee9]">
                    {/* list all advantages */}
                    {analysis.Pros.map((item: string, i: number) => (
                      <li key={`pro-${i}`} className="text-lg leading-relaxed opacity-90">{item}</li>
                    ))}
                  </ul>
                </div>

                {/* potential disadvantages section */}
                <div>
                  <h3 className="text-xl font-normal mb-4 text-[#ff9999]">Potential Disadvantages</h3>
                  <ul className="space-y-4 list-disc pl-5 marker:text-[#ff9999]">
                    {/* list all disadvantages */}
                    {analysis.Cons.map((item: string, i: number) => (
                      <li key={`con-${i}`} className="text-lg leading-relaxed opacity-90">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* footer button to analyze another stock */}
        <div className="mt-16">
          <Link 
            href="/search"
            className="flex items-center justify-center w-[294px] h-[51px] bg-[#b0dee9] rounded-full text-black text-base font-light tracking-wide hover:opacity-90 transition-opacity"
          >
            ANALYZE ANOTHER STOCK
          </Link>
        </div>
      </main>
    </div>
  );
}