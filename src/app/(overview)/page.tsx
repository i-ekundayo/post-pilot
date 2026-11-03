import { cardData } from "../utils/cards";
import Card from "./Card";
import RecentPosts from "./RecentPosts";
import NextJSConcepts from "./NextJSConcepts";
import { fetchData } from "../api/function";
import { Suspense } from "react";
import CardSkeleton from "./CardSkeleton";
import RecentPostsSkeleton from "./RecentPostsSekleton";
import MainSectionHeading from "../components/MainSectionHeading";

const OverviewPage = () => {
  const cards = cardData.map((card) => ({
    ...card,
    dataPromise: fetchData({ url: card.url }),
  }));

  const recentPostsPromise = fetchData({
    url: "posts",
    limit: 5,
  });

  return (
    <div className="flex flex-col gap-8">
      <MainSectionHeading />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <Suspense key={index} fallback={<CardSkeleton />}>
            <Card card={card} index={index} />
          </Suspense>
        ))}
      </div>
      <Suspense fallback={<RecentPostsSkeleton />}>
        <RecentPosts recentPostsPromise={recentPostsPromise} />
      </Suspense>

      <NextJSConcepts />
    </div>
  );
};

export default OverviewPage;
