import { Suspense } from "react";
import MainSectionHeading from "../components/MainSectionHeading";
import Cards from "./Cards";
import CardsSkeleton from "./CardsSkeleton";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-8">
      <MainSectionHeading />
      <Suspense fallback={<CardsSkeleton />}>
        <Cards />
      </Suspense>
    </div>
  );
};

export default Dashboard;
