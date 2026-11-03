"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center">
          <h1 className="text-2xl font-bold">Something went wrong</h1>

          <p>We're having trouble displaying the application.</p>

          <button
            type="button"
            onClick={() => reset()}
            className="rounded-xl bg-blue-600 px-5 py-3 font-bold text-white"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
