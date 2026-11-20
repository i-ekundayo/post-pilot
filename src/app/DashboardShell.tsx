"use client";

import { useState } from "react";
import { TextAlignJustify, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-dvh w-full overflow-hidden">
      {/* Sidebar */}
      <div className="hidden min-[900px]:block">
        <Sidebar />
      </div>

      {/* Main content */}
      <main className="flex flex-1 min-w-0 flex-col">
        {/* Header */}
        <div className="flex items-center bg-raised-surface border-b-2 border-b-borders">
          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="ml-8 cursor-pointer min-[900px]:hidden"
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            aria-expanded={isSidebarOpen}
          >
            {isSidebarOpen ? <X /> : <TextAlignJustify />}
          </button>

          <Header />
        </div>

        {/* Page */}
        <section className="p-8 w-full flex-1 overflow-y-auto scrollbar-thin">
          {children}
        </section>
      </main>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 min-[900px]:hidden"
            />

            {/* Sidebar drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-y-0 left-0 z-50 min-[900px]:hidden"
            >
              <Sidebar />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
