import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-600/5">
      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h2 className="mb-3 text-xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-primary-600 sm:text-2xl">
          <Link href={`/blog/${post.slug}`} className="line-clamp-3">
            {post.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="mb-6 line-clamp-3 flex-1 text-base leading-relaxed text-gray-500">
          {post.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 border-t border-gray-100 pt-4 text-sm text-gray-400">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
          <div className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{post.readTime} de lecture</span>
          </div>
        </div>

        {/* Read More Link */}
        <div className="mt-4">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
          >
            Lire l&apos;article
            <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
