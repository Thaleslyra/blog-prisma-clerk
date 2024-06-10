import { createPost } from "@/actions/actions";
import React from "react";

export default function CreatePostPage() {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>
      <form action={createPost} className=" h-10 space-x-2  mt-10">
        <input
          type="text"
          name="title"
          placeholder="Title for new post"
          className="border rounded px-3 h-full"
          required
        />
        <button className="h-full bg-blue-500 text-white px-5 rounded">
          Submit
        </button>
      </form>
    </main>
  );
}
