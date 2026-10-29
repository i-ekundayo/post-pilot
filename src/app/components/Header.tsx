import Link from "next/link";
import Logo from "./Logo";
import { PanelLeft } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-12 py-8 bg-sidebar text-white">
      <Link href="/">
        <Logo />
      </Link>
      <div className="cursor-pointer">
        <PanelLeft />
      </div>
    </header>
  );
};

export default Header;
