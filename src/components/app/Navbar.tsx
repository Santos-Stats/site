"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

export const NavItems = () => {
  const routes = [
    { name: "Estatísticas", url: "/" },
    { name: "Sobre o projeto", url: "/" },
    { name: "Doações", url: "/" },
    { name: "Notícias", url: "/" },
  ];

  return routes.map((route) => (
    <NavigationMenuItem key={route.name}>
      <Link href={route.url} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {route.name}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  ));
};

export const Navbar = () => {
  return (
    <div className="w-full bg-gray-300 p-3">
      <NavigationMenu>
        <NavigationMenuList>{NavItems()}</NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
