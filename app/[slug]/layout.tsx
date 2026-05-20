import { blogPosts } from "../blog/data";
import type { Metadata } from "next";

interface Props {
  params: Promise<{
    slug: string;
  }>;
  children: React.ReactNode;
}

export async function generateMetadata({
  params,
}: Omit<Props, "children">): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) {
    return {
      title: "Blog Post Not Found - Omni Logistics",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
  };
}

export default function BlogPostLayout({ children }: Props) {
  return <>{children}</>;
}
