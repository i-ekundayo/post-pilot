"use client";
import { usePathname } from "next/navigation";

const Dashboard = () => {
  const pathname = usePathname();
  console.log(pathname);
  return <div></div>;
};

export default Dashboard;
