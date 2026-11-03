import { getInitials } from "../utils/getInitials";
import { Authors } from "../utils/type";
import { Mail, Users } from "lucide-react";

type CardProp = {
  author: Authors;
};

const Card = ({ author }: CardProp) => {
  const initials = getInitials(author.name);

  return (
    <div className="p-8 rounded-2xl bg-raised-surface border-2 border-borders flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <div className="size-12 rounded-full flex items-center justify-center bg-primary-text text-blue-600 font-bold">
          {initials}
        </div>
        <div className="flex flex-col gap-0.5">
          <h2 className="text-lg font-bold">{author.name}</h2>
          <small className="text-muted-text">@{author.username}</small>
        </div>
      </div>
      <div className="flex gap-2 text-muted-text items-center">
        <Mail className="size-4" />
        <small className="lowercase">{author.email}</small>
      </div>
      <div className="flex gap-2 text-blue-600 items-center">
        <Users className="size-4" />
        <small>{author.company.name}</small>
      </div>
    </div>
  );
};

export default Card;
