"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ href, children }) => {
  const pathname = usePathname();

  const isActive =
    href === pathname || (pathname.startsWith(href) && href != "/");

  return (
    <Link
      href={href}
      className={`px-4 py-3 rounded-2xl ${isActive ? "text-blue-600 bg-blue-accent-surface" : "bg-background text-muted-text"}`}
    >
      {children}
    </Link>
  );
};

export default NavItem;
