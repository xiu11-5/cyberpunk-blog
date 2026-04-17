import TrendCard from "../components/TrendCard";
import SectionHeader from "../components/SectionHeader";
import Trans from "../components/Trans";
import { getAllTrends } from "../lib/trends";

export const metadata = {
  title: "Tech Trends | Neon Nexus",
  description: "Tracking the pulse of the tech industry. What's rising, what's falling, and what's on the horizon.",
};

export default function TrendsPage() {
  const trends = getAllTrends();

  const categories = ['AI', 'Cloud', 'Security', 'Web3', 'DevOps'] as const;

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader titleKey="trends.title" descKey="trends.description" color="pink" size="lg" />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const colorClasses = {
              AI: 'text-[#00f0ff] border-[#00f0ff]',
              Cloud: 'text-[#9d00ff] border-[#9d00ff]',
              Security: 'text-[#ff0040] border-[#ff0040]',
              Web3: 'text-[#f0ff00] border-[#f0ff00]',
              DevOps: 'text-[#00ff9d] border-[#00ff9d]',
            };
            return (
              <button
                key={category}
                className={`px-4 py-2 border ${colorClasses[category]} rounded-full text-sm font-medium opacity-60 hover:opacity-100 transition-opacity`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Trends Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trends.map((trend) => (
            <TrendCard key={trend.id} trend={trend} />
          ))}
        </div>

        {/* Market Status */}
        <div className="mt-16 p-6 border border-[#333] rounded-lg bg-[#0d0d12]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#00ff9d] animate-pulse" />
            <span className="text-[#00ff9d] terminal-text text-sm"><Trans k="trends.marketLive" /></span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-[#00ff9d] terminal-text">+42.8%</div>
              <div className="text-xs text-[#666] uppercase"><Trans k="trends.aiMomentum" /></div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#00f0ff] terminal-text">+28.3%</div>
              <div className="text-xs text-[#666] uppercase"><Trans k="trends.cloudGrowth" /></div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#ff0040] terminal-text">+156%</div>
              <div className="text-xs text-[#666] uppercase"><Trans k="trends.securityDemand" /></div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#f0ff00] terminal-text">+15.2%</div>
              <div className="text-xs text-[#666] uppercase"><Trans k="trends.devopsAdoption" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
