import { fetchData } from "../api/function";

const AuthorName = async ({ userId }: { userId: number }) => {
  const author = await fetchData({ url: `users/${userId}` });
  return <span>{author.name}</span>;
};

export default AuthorName;
