import { LearnCardData } from "../utils/type";

type CardDataProp = {
  cardData: LearnCardData;
};

const Card = ({ cardData }: CardDataProp) => {
  return (
    <div className="p-5 rounded-2xl bg-raised-surface border-2 border-borders flex gap-4 max-w-250">
      <span className="text-blue-600 font-bold">{cardData.number}</span>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-lg">{cardData.heading}</h2>
        <p className="text-muted-text">{cardData.subheading}</p>
      </div>
    </div>
  );
};

export default Card;
