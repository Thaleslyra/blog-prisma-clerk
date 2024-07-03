import Form from "@/components/Form";
import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function CreatePostPage() {
  return (
    <main>
      <div className=" text-end p-6">
        <UserButton />
      </div>
      <div className="text-center pt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>
        <Form />
      </div>
    </main>
  );
}
