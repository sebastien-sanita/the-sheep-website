import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import BlogList from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Blog - The Sheep | Guides et conseils marketing",
  description:
    "Retrouvez nos guides, comparatifs et conseils pour optimiser vos campagnes publicitaires sur Meta Ads, Google Ads et plus encore.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="gradient-bg grid-pattern relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="gradient-text">Blog</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
                Conseils, guides et actualités pour optimiser vos campagnes
                publicitaires.
              </p>
            </div>
          </div>
        </section>

        {/* Blog List Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlogList posts={posts} categories={categories} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
