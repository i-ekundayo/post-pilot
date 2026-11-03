"use server";

import { FetchProp } from "../utils/type";

export async function fetchData({ url, limit, page }: FetchProp) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const endpoint = new URL(`https://jsonplaceholder.typicode.com/${url}`);

  if (limit !== undefined) {
    endpoint.searchParams.set("_limit", String(limit));
  }

  if (page !== undefined) {
    endpoint.searchParams.set("_page", String(page));
  }

  let response: Response;

  try {
    response = await fetch(endpoint);
  } catch {
    throw new Error(
      "Unable to connect to the server. Check your internet connection and try again.",
    );
  }

  if (!response.ok) {
    throw new Error(
      `Unable to fetch ${url}. The server returned status ${response.status}.`,
    );
  }

  return response.json();
}

export type FormState = {
  errors: {
    title?: string;
    body?: string;
  };
  success: boolean;
};

export async function createPost(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  const title = String(formData.get("title") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();

  const errors: FormState["errors"] = {};

  if (!title) {
    errors.title = "Title is required.";
  }

  if (!body) {
    errors.body = "Body is required.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors, success: false };
  }

  return {
    errors: {},
    success: true,
  };
}

export const fetchTotalPosts = async (): Promise<number> => {
  let response: Response;

  try {
    response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=1",
    );
  } catch {
    throw new Error("Failed to fetch total post count.");
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch total post count: ${response.status}`);
  }

  const total = response.headers.get("X-Total-Count");

  if (total === null) {
    throw new Error("The API did not return the total post count.");
  }

  const count = Number(total);

  if (!Number.isInteger(count) || count < 0) {
    throw new Error("The API returned an invalid post count.");
  }

  return count;
};
