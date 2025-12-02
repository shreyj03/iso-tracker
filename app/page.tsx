import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl md:text-9xl font-light tracking-widest mb-6">
            LAUNCH
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wide mb-12">
            View Upcoming IPOs and Analyzations
          </p>
          <Link href="/search">
            <button className="px-12 py-3 border-2 border-white text-white font-light tracking-widest hover:bg-white hover:text-black transition-all duration-300 uppercase">
              Search
            </button>
          </Link>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="border border-white/20 rounded-lg p-12">
          <h2 className="text-4xl font-light tracking-wide mb-8">What is an IPO?</h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              An <span className="text-white font-medium">Initial Public Offering (IPO)</span> is the process by which a private company offers shares to the public for the first time. This transition from private to public allows companies to raise capital from public investors.
            </p>
            <p>
              When a company goes public, it must meet strict regulatory requirements and provide detailed financial information to potential investors. This transparency helps investors make informed decisions about whether to invest in the company.
            </p>
            <p>
              IPOs represent significant milestones for companies, providing new access to capital markets and enabling opportunities for growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}