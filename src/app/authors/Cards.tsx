import { fetchData } from "../api/function";
import { Authors } from "../utils/type";
import Card from "./Card";

const Cards = async () => {
  const authors: Authors[] = await fetchData({ url: "users" });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {authors.map((author) => (
        <Card key={author.id} author={author} />
      ))}
    </div>
  );
};

export default Cards;
