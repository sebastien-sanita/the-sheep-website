import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import BlogCard from "@/components/blog/BlogCard";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article introuvable - The Sheep",
    };
  }

  return {
    title: `${post.title} - The Sheep`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

function renderContent(content: string) {
  const blocks = content.split("\n\n");

  return blocks.map((block, index) => {
    // Handle ## headers
    if (block.startsWith("## ")) {
      const headerText = block.replace("## ", "");
      return (
        <h2
          key={index}
          className="mb-4 mt-10 text-2xl font-bold text-gray-900 first:mt-0 sm:text-3xl"
        >
          {headerText}
        </h2>
      );
    }

    // Handle ### headers
    if (block.startsWith("### ")) {
      const headerText = block.replace("### ", "");
      return (
        <h3
          key={index}
          className="mb-3 mt-8 text-xl font-semibold text-gray-900 sm:text-2xl"
        >
          {headerText}
        </h3>
      );
    }

    // Regular paragraphs
    return (
      <p
        key={index}
        className="mb-6 text-lg leading-relaxed text-gray-600"
      >
        {block}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (other posts excluding current)
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <Header />

      <main>
        {/* Article Header */}
        <section className="gradient-bg grid-pattern relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Back Link */}
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour au blog
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} de lecture</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <article className="prose-custom">
              {renderContent(post.content)}
            </article>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-gray-100 bg-gray-50 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Envie de tester The Sheep ?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Centralisez vos campagnes publicitaires et boostez votre ROAS
              avec notre plateforme tout-en-un.
            </p>
            <div className="mt-8">
              <Button href="#" variant="primary" size="lg">
                Essai gratuit 14 jours
              </Button>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
                Articles similaires
              </h2>
              <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
