import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-slate-900 bg-opacity-80 sticky top-0 z-50 pt-2 pb-2 pl-4">
      <NavigationMenu className="relative">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-slate-800 text-white">Filter</NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col p-6 gap-4 w-36 lg:w-64">
              <NavigationMenuLink><Link to='/'>All Elements</Link></NavigationMenuLink>
              <NavigationMenuLink><Link to='group'>By group</Link></NavigationMenuLink>
              <NavigationMenuLink>By Period</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navbar;
