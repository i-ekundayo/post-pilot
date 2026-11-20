"use client";

import { startTransition } from "react";
import { useRouter } from "next/navigation";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <html lang="en">
      <body>
        <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center">
          <h1 className="text-2xl font-bold">Something went wrong</h1>

          <p>We're having trouble displaying the application.</p>

          <button
            type="button"
            onClick={() => reload()}
            className="rounded-xl bg-blue-600 px-5 py-3 font-bold text-white cursor-pointer"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
