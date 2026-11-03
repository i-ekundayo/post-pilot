"use client";

import { redirect, usePathname } from "next/navigation";
import { BookOpen } from "lucide-react";

const EditorialWorkspace = () => {
  const pathname = usePathname();
  let currentpath = "";

  switch (true) {
    case pathname === "/":
      currentpath = "Overview";
      break;

    case pathname === "/posts" || pathname.startsWith("/posts"):
      currentpath = "Posts";
      break;

    case pathname === "/authors" || pathname.startsWith("/authors"):
      currentpath = "Authors";
      break;

    case pathname === "/learn" || pathname.startsWith("/learn"):
      currentpath = "Learn";
      break;

    default:
      currentpath = "Overview";
      redirect("/");
  }
  return (
    <div className="flex gap-2">
      <div className="flex gap-2 text-muted-text items-center">
        <BookOpen className="size-5" />
        <p>Editorial workspace</p>
      </div>
      <span>/</span>
      <p className="font-semibold">{currentpath}</p>
    </div>
  );
};

export default EditorialWorkspace;
