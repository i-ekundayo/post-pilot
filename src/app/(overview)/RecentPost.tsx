import { ArrowUpRight } from "lucide-react";
import { Posts } from "../utils/type";
import AuthorName from "../components/AuthorName";
import { Suspense } from "react";
import { recentPostsColor } from "../utils/posts";
import Link from "next/link";

const colors = [
  recentPostsColor.blue,
  recentPostsColor.purple,
  recentPostsColor.orange,
  recentPostsColor.green,
  recentPostsColor.red,
];

const RecentPost = async ({ id, userId, title }: Posts) => {
  return (
    <Link
      href={`/posts/${id}`}
      className="py-4 border-b-2 border-b-borders flex items-center justify-between cursor-pointer"
    >
      <div className="flex gap-4 items-center">
        <div
          className={`size-10 rounded-xl ${colors[id - 1]} flex items-center justify-center font-semibold`}
        >
          0{id}
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>

          <Suspense
            fallback={
              <span className="text-yellow-500">Loading Author name...</span>
            }
          >
            <small>
              By <AuthorName userId={userId} />
              <span> . </span> 4 min read
            </small>
          </Suspense>

          <p></p>
        </div>
      </div>
      <ArrowUpRight className="size-5 cursor-pointer" />
    </Link>
  );
};

export default RecentPost;
