import React from "react";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export default function TestimonialCard({
  quote: testimonialQuote,
  author,
  role,
  company,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
      <Quote className="mb-4 h-8 w-8 text-primary-300" />

      <blockquote className="mb-6 flex-1 text-gray-600 leading-relaxed">
        &ldquo;{testimonialQuote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
        {avatar ? (
          <img
            src={avatar}
            alt={author}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-600">
            {author
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()
              .slice(0, 2)}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-gray-900">{author}</p>
          <p className="text-xs text-gray-500">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}
