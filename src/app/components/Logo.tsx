import { PanelsTopLeft } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex gap-2 items-start">
      <div className="bg-brand size-10 rounded-lg flex items-center justify-center cursor-pointer">
        <PanelsTopLeft />
      </div>
      <div>
        <h2 className="text-2xl font-bold">PostPilot</h2>
        <p className="uppercase text-text-muted">Content Studio</p>
      </div>
    </div>
  );
};

export default Logo;
