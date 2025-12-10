// BUILT BY DAVID REN FOR CS391 FINAL PROJECT
import Link from 'next/link';

// home component
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* nav bar*/ }
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo for LAUNCH*/}
          <Link href="/" className="text-xl font-light tracking-[0.2em]">
            LAUNCH
          </Link>
          
          {/* Nav link with search also in bar*/}
          <div className="flex items-center gap-8">
            <Link 
              href="/search" 
              className="text-sm text-gray-400 hover:text-white transition-colors tracking-wide"
            >
              Search
            </Link>
          </div>
        </div>
      </nav>

      {/* center section*/}
      <section className="min-h-screen flex items-center justify-center pt-16">
        
        {/* Main hero content container */}
        <div className="text-center px-6">
          
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-extralight tracking-[0.3em] mb-4">
            LAUNCH
          </h1>
          
          {/* Tagline with description */}
          <p className="text-lg md:text-xl text-gray-400 font-light tracking-widest uppercase mb-12 max-w-2xl mx-auto">
            AI-Powered Stock Analysis &amp; IPO Insights
          </p>
          
          {/* divider line for decoration */}
          <div className="w-24 h-px bg-white/30 mx-auto mb-12" />
          
          {/* CTA (links to the search page) */}
          <Link href="/search">
            <button className="px-16 py-4 border border-white/30 text-white font-light 
                               tracking-[0.2em] uppercase text-sm
                               hover:border-white hover:bg-white hover:text-black 
                               transition-colors">
              Explore Stocks →
            </button>
          </Link>
        </div>
      </section>

      {/* info section*/}
      <section className="max-w-5xl mx-auto px-6 py-32">
        
        <div className="border border-white/10 rounded-2xl p-8 md:p-16 bg-white/5">

          <h2 className="text-3xl md:text-5xl font-extralight tracking-wide mb-4">
            What is an IPO?
          </h2>
          
          <div className="w-16 h-px bg-blue-500/50 mb-10" />
          
          <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
            
            {/* Paragraph 1: definition of an IPO */}
            <p>
              An{' '}
              <span className="text-white font-medium border-b border-blue-500/50 pb-0.5">
                Initial Public Offering (IPO)
              </span>{' '}
              is the process by which a private company offers shares to the public for the 
              first time. This transition from private to public ownership represents a major 
              milestone in a company&apos;s growth journey.
            </p>
            
            {/* Paragraph 2: requirements */}
            <p>
              When a company goes public, it must meet strict regulatory requirements and 
              provide detailed financial information to potential investors. This transparency 
              helps investors make{' '}
              <span className="text-white">informed decisions</span>{' '}
              about whether to participate in the offering.
            </p>
            
            {/* Paragraph 3: the significance of IPO's */}
            <p>
              IPOs represent significant milestones for companies, providing new access to 
              capital markets and enabling opportunities for growth, expansion, and innovation.
            </p>
          </div>
        </div>
        
        {/* features section */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          
          {/* Feature 1: ai analysis */}
          <div className="border border-white/10 rounded-xl p-8 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-light mb-3">
              AI Analysis
            </h3>
          </div>
          
          {/* Feature 2: insights for stocks */}
          <div className="border border-white/10 rounded-xl p-8 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-light mb-3">
              Stock Insights
            </h3>
          </div>
          
          {/* Feature 3: IPO tracking */}
          <div className="border border-white/10 rounded-xl p-8 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-light mb-3">
              IPO Tracking
            </h3>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center 
                        text-gray-500 text-sm">
          <p>CS 391 Final Project Fall 2025 Boston University</p>
          <p className="mt-2 md:mt-0">Built with Next.js &amp; OpenAI</p>
        </div>
      </footer>
    </div>
  );
}