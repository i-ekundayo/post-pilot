import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  return (
    <div className="flex items-center justify-between gap-4 p-4 border-t-2 border-borders">
      <p className="text-sm text-muted-text">
        Page {currentPage} of {totalPages}
      </p>

      <div className="flex items-center gap-2">
        <Link
          href={`?page=${currentPage - 1}`}
          aria-disabled={currentPage === 1}
          className={`flex items-center gap-2 px-3 py-2 rounded-xl border-2 border-borders ${
            currentPage === 1
              ? "pointer-events-none opacity-40"
              : "hover:bg-background"
          }`}
        >
          <ChevronLeft className="size-4" />
          <span>Previous</span>
        </Link>

        <Link
          href={`?page=${currentPage + 1}`}
          aria-disabled={currentPage === totalPages}
          className={`flex items-center gap-2 px-3 py-2 rounded-xl border-2 border-borders ${
            currentPage === totalPages
              ? "pointer-events-none opacity-40"
              : "hover:bg-background"
          }`}
        >
          <span>Next</span>
          <ChevronRight className="size-4" />
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
