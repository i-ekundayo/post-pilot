import Link from "next/link";
import Logo from "./Logo";
import EditorialWorkspace from "./EditorialWorkspace";
import { ChartColumn } from "lucide-react";

const Header = () => {
  return (
    <header className="grid grid-cols-5 items-center bg-raised-surface border-b-2 border-b-borders shrink-0">
      <div className="border-r-2 border-r-borders px-12 py-8">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="col-span-4 py-8 px-12 flex justify-between items-center">
        <EditorialWorkspace />

        <div className="flex gap-2 items-center">
          <div className="bg-green-accent-surface rounded-2xl text-green-600 flex gap-1 items-center px-4 py-1 text-sm">
            <div className="size-1.5 rounded-full bg-green-600"></div>
            <span>API connected</span>
          </div>
          <div className="size-10 rounded-full border border-borders p-1 bg-background flex items-center justify-center">
            <ChartColumn className="size-4 text-muted-text" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
