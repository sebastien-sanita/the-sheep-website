import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionTitleProps) {
  return (
    <div
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      <h2
        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
        dangerouslySetInnerHTML={{
          __html: title.replace(
            /\*\*(.*?)\*\*/g,
            '<span class="gradient-text">$1</span>'
          ),
        }}
      />
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-gray-500 sm:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
