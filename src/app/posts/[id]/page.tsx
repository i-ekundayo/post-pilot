import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3, ArrowUpRight } from "lucide-react";
import { getInitials } from "@/app/utils/getInitials";
import { fetchData } from "@/app/api/function";
import { Posts } from "@/app/utils/type";
import AuthorName from "@/app/components/AuthorName";
import { Suspense } from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const post: Posts = await fetchData({ url: `posts/${id}` });

  let numberId = String(post.id);
  if (post.id < 10) {
    numberId = `0${post.id}`;
  }
  return (
    <div className="flex flex-col divide-y-2 divide-borders">
      <div className="flex flex-col gap-8 pb-8">
        <Link
          href={"/posts"}
          className="flex items-center gap-2 text-muted-text"
        >
          <ArrowLeft className="size-5" />
          <span className="font-bold">Back to Posts</span>
        </Link>

        <div className="flex gap-2 items-center">
          <small className="rounded-2xl bg-blue-accent-surface text-blue-600 px-4 py-1 font-semibold">
            POST #{numberId}
          </small>
          <div className="rounded-lg bg-primary-text size-0.5"></div>
          <small className="text-blue-600 font-semibold">Published</small>
        </div>

        <h1 className="text-5xl capitalize font-bold ">{post.title}</h1>

        <p className="text-muted-text text-xl max-w-8/10">
          A dynamic route rendered from a single JSONPlaceholder resource, with
          sequential author fetching.
        </p>

        <div className="flex gap-4 items-center text-muted-text">
          <div className="flex gap-2 items-center">
            <div className="size-10 bg-blue-accent-surface text-blue-600 rounded-full flex items-center justify-center font-bold">
              {getInitials("Leane Graham")}
            </div>
            <Suspense
              fallback={
                <span className="text-yellow-500">Loading Author name...</span>
              }
            >
              <AuthorName userId={post.userId} />
            </Suspense>
          </div>
          <div className="flex gap-2 items-center">
            <CalendarDays className="size-5" />
            <span>Oct 30, 2026</span>
          </div>
          <div className="flex gap-2 items-center">
            <Clock3 className="size-5" />
            <span>4 min read</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 pt-8 gap-8">
        <div className="flex flex-col gap-8 col-span-3">
          <p className="text-xl text-borders leading-8">{post.body}</p>
          <p className="text-muted-text leading-8">
            This detail page demonstrates dynamic routing with{" "}
            <code className="bg-primary-text text-blue-600 p-1 rounded-md">
              /posts/[id]
            </code>
            . The post is fetched first, then its author is fetched using the
            post's userId — a clear sequential data fetching example.
          </p>
        </div>
        <div className="flex flex-col gap-4 p-4 rounded-2xl bg-card">
          <h3 className="text-blue-300 uppercase font-medium text-sm">
            Concept spotlight
          </h3>
          <div className="font-bold flex flex-col gap-0.5">
            <span>Dynamic route +</span>
            <span>sequential fetch</span>
          </div>
          <small className="text-muted-text">
            Try changing the number in the URL to load another post.
          </small>
          <Link
            href={"/learn"}
            className="text-xs flex gap-1 items-center text-blue-600"
          >
            See all concepts <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
