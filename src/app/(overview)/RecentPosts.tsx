import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RecentPost from "./RecentPost";
import { Posts } from "../utils/type";

type RecentPostsPromiseProp = {
  recentPostsPromise: Promise<Posts[]>;
};

const RecentPosts = async ({ recentPostsPromise }: RecentPostsPromiseProp) => {
  const recentPosts = await recentPostsPromise;

  return (
    <div className="p-8 rounded-2xl border-2 border-borders bg-raised-surface">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="mb-2 font-bold text-lg">Recent Posts</h3>
          <p className="text-muted-text">
            Parallel fetched from JSONPlaceholder
          </p>
        </div>
        <Link
          href={"/posts"}
          className="text-blue-600 flex gap-1 items-center font-semibold"
        >
          View all <ArrowUpRight className="size-5" />
        </Link>
      </div>
      {recentPosts.map((recentPost) => (
        <RecentPost key={recentPost.id} {...recentPost} />
      ))}
    </div>
  );
};

export default RecentPosts;
