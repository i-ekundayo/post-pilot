import { redirect } from "next/navigation";

export function redirectToPost(postId: number) {
  redirect(`/posts/${postId}`);
}
