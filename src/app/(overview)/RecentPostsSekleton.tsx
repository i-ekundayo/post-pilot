import { ArrowUpRight } from "lucide-react";

const RecentPostsSkeleton = () => {
  return (
    <div className="p-8 rounded-2xl border-2 border-borders bg-raised-surface animate-pulse">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col gap-3">
          <div className="h-6 w-36 rounded bg-gray-200" />
          <div className="h-4 w-52 rounded bg-gray-200" />
        </div>

        <div className="flex items-center gap-1">
          <div className="h-4 w-16 rounded bg-gray-200" />
          <ArrowUpRight className="size-5 text-gray-200" />
        </div>
      </div>

      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="py-4 border-b-2 border-b-borders flex items-center justify-between"
        >
          <div className="flex gap-4 items-center flex-1 min-w-0">
            <div className="size-10 shrink-0 rounded-xl bg-gray-200" />

            <div className="flex-1 min-w-0 space-y-2">
              <div className="h-4 w-3/4 rounded bg-gray-200" />
              <div className="h-3 w-1/2 rounded bg-gray-200" />
              <div className="h-3 w-2/3 rounded bg-gray-200" />
            </div>
          </div>

          <div className="size-5 shrink-0 rounded bg-gray-200 ml-4" />
        </div>
      ))}
    </div>
  );
};

export default RecentPostsSkeleton;
