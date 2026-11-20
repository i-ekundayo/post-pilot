import { CardProp } from "../utils/type";
import { cardIconColor } from "../utils/posts";

const colors = [
  cardIconColor.blue,
  cardIconColor.purple,
  cardIconColor.orange,
  cardIconColor.green,
];

type Prop = {
  index: number;
  card: CardProp;
};

const Card = async ({ index, card }: Prop) => {
  const data = await card.dataPromise;
  const count = Array.isArray(data) ? data.length : 0;
  return (
    <div
      className={` ${colors[index]} p-8 rounded-2xl flex justify-between items-start`}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-muted-text">{card.title}</p>
          <span className="text-3xl text-primary-text font-bold">{count}</span>
        </div>
        <p className="text-muted-text text-sm">
          <span className="text-green-600">{card.percentage}</span> from last
          month
        </p>
      </div>
      <div className={`${colors[index]} rounded-xl p-2.5`}>
        <card.icon />
      </div>
    </div>
  );
};

export default Card;
