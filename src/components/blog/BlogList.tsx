"use client";

import { useState } from "react";
import type { BlogPost } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";

interface BlogListProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogList({ posts, categories }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");

  const filteredPosts =
    activeCategory === "Tous"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => setActiveCategory("Tous")}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
            activeCategory === "Tous"
              ? "bg-primary-600 text-white shadow-md shadow-primary-600/25"
              : "bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-600"
          }`}
        >
          Tous
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
              activeCategory === category
                ? "bg-primary-600 text-white shadow-md shadow-primary-600/25"
                : "bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="text-lg text-gray-500">
            Aucun article trouvé dans cette catégorie.
          </p>
        </div>
      )}
    </>
  );
}
