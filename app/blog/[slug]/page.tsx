import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllSlugs } from "../../lib/posts";
import GlitchText from "../../components/GlitchText";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Trans from "../../components/Trans";
import BlogPostClient from "../../components/BlogPostClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Neon Nexus",
    };
  }

  return {
    title: `${post.title} | Neon Nexus`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#888] hover:text-[#00f0ff] transition-colors mb-8 terminal-text"
        >
          <ArrowLeft className="w-4 h-4" />
          <Trans k="blog.backToBlog" />
        </Link>

        {/* Header */}
        <header className="mb-12">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#e0e0e0] mb-6 leading-tight">
            <BlogPostClient slug={post.slug} originalTitle={post.title} />
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#888] terminal-text">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#00f0ff]" />
              <BlogPostDate date={post.date} />
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#ff00ff]" />
              {post.readingTime}
            </span>
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <div className="text-[#b0b0b0] leading-relaxed">
            <MDXRemote source={post.content} />
          </div>
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-[#333]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#666] terminal-text text-sm">
              <Trans k="blogPost.eof" />
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#00f0ff] hover:text-[#ff00ff] transition-colors terminal-text"
            >
              <Trans k="blog.backToBlog" /> <span className="text-xl">→</span>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

function BlogPostDate({ date }: { date: string }) {
  return (
    <BlogPostClient date={date} slug="" originalTitle="" />
  );
}
