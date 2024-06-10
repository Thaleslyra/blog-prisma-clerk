import PostsList from "@/components/PostList";
import { Suspense } from "react";

export default async function Page() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const post = await response.json();
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>

      <Suspense fallback="Loading...">
        <PostsList />
      </Suspense>
    </main>
  );
}
