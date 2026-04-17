import BlogCard from "../components/BlogCard";
import SectionHeader from "../components/SectionHeader";
import Trans from "../components/Trans";
import { getAllPosts } from "../lib/posts";

export const metadata = {
  title: "Blog | Neon Nexus",
  description: "Read the latest articles on Rust, AI, Kubernetes, and more.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader titleKey="blog.title" descKey="blog.description" color="cyan" size="lg" />

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="terminal-text text-[#666] space-y-2">
              <p><Trans k="blog.noPosts" /></p>
              <p><Trans k="blog.waiting" /></p>
              <p className="animate-pulse">_</p>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 pt-8 border-t border-[#333]">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#00f0ff] terminal-text">
                {posts.length}
              </div>
              <div className="text-sm text-[#666] uppercase tracking-wider">
                <Trans k="blog.totalPosts" />
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#ff00ff] terminal-text">
                {[...new Set(posts.flatMap(p => p.tags))].length}
              </div>
              <div className="text-sm text-[#666] uppercase tracking-wider">
                <Trans k="blog.topics" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
