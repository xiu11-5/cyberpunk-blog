import HeroSection from "./components/HeroSection";
import BlogCard from "./components/BlogCard";
import TrendCard from "./components/TrendCard";
import { getLatestPosts } from "./lib/posts";
import { getLatestTrends } from "./lib/trends";
import SectionHeader from "./components/SectionHeader";
import Trans from "./components/Trans";

export default function Home() {
  const posts = getLatestPosts(3);
  const trends = getLatestTrends(4);

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <HeroSection />

      {/* Latest Posts Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader titleKey="home.latestPosts" descKey="home.latestPostsDesc" color="cyan" />

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 terminal-text">
              <p className="text-[#666]"><Trans k="home.noPosts" /></p>
            </div>
          )}

          <div className="text-center mt-12">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-[#00f0ff] hover:text-[#ff00ff] transition-colors terminal-text"
            >
              <Trans k="home.viewAllPosts" /> <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Trends Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d0d12]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader titleKey="home.techTrends" descKey="home.techTrendsDesc" color="pink" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trends.map((trend) => (
              <TrendCard key={trend.id} trend={trend} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/trends"
              className="inline-flex items-center gap-2 text-[#ff00ff] hover:text-[#00f0ff] transition-colors terminal-text"
            >
              <Trans k="home.exploreTrends" /> <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
