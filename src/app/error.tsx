"use client";

import { useEffect } from "react";
import { startTransition } from "react";
import { useRouter } from "next/navigation";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center p-8">
      <div className="size-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-2xl font-bold">
        !
      </div>

      <h1 className="text-2xl font-bold text-primary-text">
        Something went wrong
      </h1>

      <p className="max-w-md text-muted-text">
        We couldn't load this page. Please check your internet connection and
        try again.
      </p>

      {error.digest && (
        <p className="text-xs text-muted-text">Reference: {error.digest}</p>
      )}

      <button
        type="button"
        onClick={() => reload()}
        className="px-5 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorPage;
