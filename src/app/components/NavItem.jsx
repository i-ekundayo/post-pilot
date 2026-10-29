"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ href, children }) => {
  const pathname = usePathname();

  const isActive =
    href === pathname || (pathname.startsWith(href) && href != "/");

  if (isActive) console.log(isActive);

  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-lg ${isActive ? "text-white bg-sidebar-active" : "text-sidebar-text"}`}
    >
      {children}
    </Link>
  );
};

export default NavItem;
