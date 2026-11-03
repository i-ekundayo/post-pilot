"use client";

import { Plus } from "lucide-react";
import { mainPageHeading } from "../utils/mainPageHeading";
import { redirect, usePathname } from "next/navigation";

const MainSectionHeading = () => {
  const pathname = usePathname();
  const page = mainPageHeading[pathname as keyof typeof mainPageHeading];

  return (
    <div className="flex justify-between items-end">
      <div className="flex flex-col gap-2">
        <p className="text-blue-600 text-sm">{page.title}</p>
        <h1 className="text-4xl font-bold">{page.heading}</h1>
        <p className="text-muted-text">{page.subheading}</p>
      </div>

      {page.isButton && (
        <button
          className="flex gap-2 items-center bg-blue-500 hover:bg-blue-600 rounded-xl px-4 py-2 cursor-pointer"
          onClick={() => redirect("/posts/new")}
        >
          <Plus className="size-4" />
          <span className="font-semibold">New post</span>
        </button>
      )}
    </div>
  );
};

export default MainSectionHeading;
