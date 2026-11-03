import MainSectionHeading from "../components/MainSectionHeading";
import Card from "./Card";
import { learnCardData } from "../utils/learn";

const page = () => {
  return (
    <div className="flex flex-col gap-8">
      <MainSectionHeading />
      <div className="flex flex-col gap-4">
        {learnCardData.map((cardData, index) => (
          <Card key={index} cardData={cardData} />
        ))}
      </div>
    </div>
  );
};

export default page;
