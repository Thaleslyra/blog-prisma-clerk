import { createPost } from "@/actions/actions";
import React from "react";

export default function Form() {
  return (
    <form
      action={createPost}
      className="flex flex-col max-w-[400px] mx-auto gap-2 my-10"
    >
      <input
        type="text"
        name="title"
        placeholder="Title for new post"
        className="border rounded px-3 h-10"
        required
      />
      <textarea
        name="body"
        id=""
        placeholder="Body content for new post.."
        className="border rounded px-3 py-2"
        rows={6}
        required
      ></textarea>
      <button className="h-10 bg-blue-500 text-white px-5 rounded">
        Submit
      </button>
    </form>
  );
}
