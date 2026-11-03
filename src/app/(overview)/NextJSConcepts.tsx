import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const NextJSConcepts = () => {
  return (
    <div className="p-8 rounded-2xl bg-card border-2 border-borders flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <p className="bg-background rounded-2xl text-xs text-blue-300 font-bold px-3 py-2">
          NEXT.JS CONCEPTS
        </p>
        <span className="text-xs text-muted-text">01 / 04</span>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-2xl">
          A small app that makes the invisible visible.
        </h3>
        <p className="text-muted-text">
          Each screen is to show how App Router, caching and loading UI work
          together.
        </p>
      </div>
      <Link
        href={"/learn"}
        className="text-blue-300 flex gap-2 items-center cursor-pointer self-start"
      >
        <p className="font-bold">Explore the learning map</p>
        <ArrowUpRight className="size-5" />
      </Link>
    </div>
  );
};

export default NextJSConcepts;
