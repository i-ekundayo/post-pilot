"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Logo from "./Logo";
import NavItem from "./NavItem";
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  ChevronDown,
} from "lucide-react";

const Sidebar = () => {
  return (
    <motion.aside className="bg-raised-surface flex flex-col pb-8 h-full border-r-2 border-r-borders divide-y-2 divide-borders w-60">
      <div className="px-12 py-8 h-25">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <nav className="flex flex-col justify-between flex-1 py-8 mb-8 mx-6 border-b-2 border-b-borders">
        <div>
          <h3 className="uppercase text-sm tracking-widest mb-4 px-4 text-muted-text font-semibold">
            Workspace
          </h3>
          <div className="flex flex-col gap-1">
            <NavItem href="/">
              <div className="flex items-end gap-3">
                <LayoutDashboard className="size-5" />
                Overview
              </div>
            </NavItem>
            <NavItem href="/posts">
              <div className="flex items-end gap-3">
                <FileText className="size-5" />
                All Posts
              </div>
            </NavItem>
            <NavItem href="/authors">
              <div className="flex items-end gap-3">
                <Users className="size-5" />
                Authors
              </div>
            </NavItem>
          </div>
        </div>
        <NavItem href="/settings">
          <div className="flex items-end gap-3">
            <Settings className="size-5" />
            Settings
          </div>
        </NavItem>
      </nav>

      <div className="flex items-center justify-between px-2 mx-6">
        <div className="flex gap-3 items-center">
          <div className="bg-blue-accent-surface text-blue-600 rounded-full size-10 flex items-center justify-center text-sm font-medium">
            JD
          </div>
          <div className="flex flex-col justify-between">
            <span className="text-white font-semibold">Jordan Davis</span>
            <span className="text-xs text-muted-text">Editor</span>
          </div>
        </div>
        <ChevronDown className="size-4 text-muted-text" />
      </div>
    </motion.aside>
  );
};

export default Sidebar;
