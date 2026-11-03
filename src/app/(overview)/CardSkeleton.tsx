const CardSkeleton = () => {
  return (
    <div className="border-2 border-borders bg-raised-surface p-8 rounded-2xl animate-pulse">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-6">
          <div className="h-4 w-28 rounded bg-gray-200" />
          <div className="h-8 w-16 rounded bg-gray-200" />
          <div className="h-4 w-36 rounded bg-gray-200" />
        </div>

        <div className="size-10 rounded-xl bg-gray-200" />
      </div>
    </div>
  );
};

export default CardSkeleton;
