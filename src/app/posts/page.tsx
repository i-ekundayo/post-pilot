import MainSectionHeading from "../components/MainSectionHeading";
import { Funnel, Search } from "lucide-react";
import TableData from "./TableData";
import { Suspense } from "react";
import TableDataSkeleton from "./TableDataSkeleton";
import Pagination from "./Pagination";
import { fetchTotalPosts } from "../api/function";

type PostsPageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

const PAGE_SIZE = 10;

const PostsPage = async ({ searchParams }: PostsPageProps) => {
  const [params, totalPosts] = await Promise.all([
    searchParams,
    fetchTotalPosts(),
  ]);

  const requestedPage = Number(params.page ?? "1");

  const totalPages = Math.ceil(totalPosts / PAGE_SIZE);

  const currentPage = Number.isInteger(requestedPage)
    ? Math.min(Math.max(requestedPage, 1), totalPages)
    : 1;

  return (
    <div className="flex flex-col gap-8">
      <MainSectionHeading />

      <div className="flex gap-4 bg-raised-surface rounded-2xl p-4 items-center border-2 border-borders">
        <div className="bg-background flex-1 rounded-xl px-4 py-2 flex items-center gap-4">
          <Search className="text-muted-text size-5" />
          <input
            type="text"
            className="outline-none"
            placeholder="Search posts..."
          />
        </div>

        <button className="text-muted-text flex gap-4 items-center px-4 py-2 rounded-xl border-2 border-borders">
          <Funnel className="size-5" />
          Filter
        </button>
      </div>

      <div className="bg-raised-surface border-2 border-borders rounded-2xl">
        <Suspense key={currentPage} fallback={<TableDataSkeleton />}>
          <TableData page={currentPage} limit={PAGE_SIZE} />
        </Suspense>

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default PostsPage;
