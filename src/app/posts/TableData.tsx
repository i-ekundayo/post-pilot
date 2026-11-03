import TableRow from "./TableRow";
import { fetchData } from "../api/function";
import { Posts } from "../utils/type";

type TableDataProps = {
  page: number;
  limit: number;
};

const TableData = async ({ page, limit }: TableDataProps) => {
  const posts: Posts[] = await fetchData({ url: "posts", page, limit });
  return (
    <table className="relative w-full text-left text-sm text-muted-text">
      <thead>
        <tr className="border-b-2 border-b-borders">
          <th className="italic px-8 py-4 text-primary-text">#</th>
          <th className="px-8 py-4">TITLE</th>
          <th className="px-8 py-4">AUTHOR</th>
          <th className="px-8 py-4">STATUS</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 divide-borders">
        {posts.map((post) => (
          <TableRow key={post.id} post={post} />
        ))}
      </tbody>
    </table>
  );
};

export default TableData;
