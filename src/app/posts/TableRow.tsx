import { Suspense } from "react";
import AuthorName from "../components/AuthorName";
import { Posts } from "../utils/type";
import { redirectToPost } from "../utils/redirectToPost";
import Link from "next/link";
type PostProp = {
  post: Posts;
};

const TableRow = ({ post }: PostProp) => {
  let numberId = String(post.id);
  if (post.id < 10) {
    numberId = `0${post.id}`;
  }

  let title = post.title;

  if (post.title.length > 30) {
    title = `${post.title.slice(0, 30)}...`;
  }
  return (
    <tr className="hover:bg-background">
      <td className="px-8 py-4 font-semibold text-primary-text">#{numberId}</td>
      <td className="px-8 py-4 text-base font-medium text-primary-text">
        <Link href={`/posts/${post.id}`} className="hover:underline">
          {title}
        </Link>
      </td>
      <td className="px-8 py-4 text-primary-text">
        <Suspense
          fallback={
            <span className="text-yellow-500">Loading Author name...</span>
          }
        >
          <AuthorName userId={post.userId} />
        </Suspense>
      </td>
      <td className="px-8 py-4">
        <span className="text-green-600 bg-green-accent-surface px-3 py-1 rounded-2xl">
          Published
        </span>
      </td>
    </tr>
  );
};

export default TableRow;
