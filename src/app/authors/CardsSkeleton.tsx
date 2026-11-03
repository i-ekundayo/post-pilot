const CardsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="p-8 rounded-2xl bg-raised-surface border-2 border-borders flex flex-col gap-4 animate-pulse"
        >
          {/* Author initials and name */}
          <div className="flex gap-4 items-center">
            <div className="size-12 rounded-full bg-muted-text/20 shrink-0" />

            <div className="flex flex-col gap-2">
              <div className="h-5 w-36 rounded bg-muted-text/20" />
              <div className="h-3 w-24 rounded bg-muted-text/20" />
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-2 items-center">
            <div className="size-4 rounded bg-muted-text/20 shrink-0" />
            <div className="h-3 w-48 max-w-full rounded bg-muted-text/20" />
          </div>

          {/* Company */}
          <div className="flex gap-2 items-center">
            <div className="size-4 rounded bg-muted-text/20 shrink-0" />
            <div className="h-3 w-32 rounded bg-muted-text/20" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsSkeleton;
