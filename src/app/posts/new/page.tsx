"use client";

import { useActionState } from "react";
import MainSectionHeading from "@/app/components/MainSectionHeading";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { FormState } from "@/app/api/function";
import { createPost } from "@/app/api/function";

const initialState: FormState = {
  errors: {},
  success: false,
};

const NewPostPage = () => {
  const [state, formAction, isPending] = useActionState(
    createPost,
    initialState,
  );

  return (
    <div className="flex flex-col gap-8 w-8/10 max-w-250 m-auto">
      <Link href={"/posts"} className="flex items-center gap-2 text-muted-text">
        <ArrowLeft className="size-5" />
        <span className="font-bold">Back to Posts</span>
      </Link>
      <MainSectionHeading />
      <form
        action={formAction}
        className="p-4 bg-raised-surface border-2 border-borders rounded-2xl flex flex-col gap-4"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-bold">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Give your post a clear title"
            aria-invalid={Boolean(state.errors.title)}
            aria-describedby={state.errors.title ? "title-error" : undefined}
            className={`p-2 rounded-xl border-2 outline-none ${
              state.errors.title ? "border-red-500" : "border-borders"
            }`}
          />
          {state.errors.title && (
            <p id="title-error" role="alert" className="text-sm text-red-500">
              {state.errors.title}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="body" className="font-bold">
            Body
          </label>
          <textarea
            id="body"
            name="body"
            rows={10}
            placeholder="Start writing..."
            aria-invalid={Boolean(state.errors.body)}
            aria-describedby={state.errors.body ? "body-error" : undefined}
            className={`p-2 rounded-xl border-2 outline-none ${
              state.errors.body ? "border-red-500" : "border-borders"
            }`}
          />
          {state.errors.body && (
            <p id="body-error" role="alert" className="text-sm text-red-500">
              {state.errors.body}
            </p>
          )}
        </div>
        {state.success && (
          <p role="status" className="text-green-600">
            Post submitted successfully!
          </p>
        )}
        <div className="flex gap-2 font-bold justify-end">
          <Link
            href="/posts"
            className="border-2 border-borders rounded-xl px-4 py-2"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={isPending}
            className="border-2 border-borders rounded-xl px-4 py-2 bg-blue-600 text-white cursor-pointer disabled:opacity-50"
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPostPage;
