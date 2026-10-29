import NavItem from "./NavItem";

const Sidebar = () => {
  return (
    <nav className="min-h-full text-sidebar-text bg-sidebar w-1/5 max-w-45 flex flex-col p-4 gap-4">
      <NavItem href="/">Overview</NavItem>
      <NavItem href="/posts">Posts</NavItem>
      <NavItem href="/authors">Authors</NavItem>
    </nav>
  );
};

export default Sidebar;
