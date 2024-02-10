import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const NavBar = () => {
  return (
    <NavigationMenu className="relative z-[1] flex w-screen justify-center ">
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* <Link href="/docs" /> */}
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          {/* <Link href="/docs" /> */}
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
            About
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          {/* <Link href="/docs" /> */}
          <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
            Projects
          </NavigationMenuTrigger>
          <NavigationMenuContent className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
              <ListItem title="Project 1 ">
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem title="Project 2 ">
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem title="Project 3 ">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem title="Project 4 ">
                Unstyled and compatible with any styling solution.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          {/* <Link href="/docs" /> */}
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            href="/contact-me"
          >
            ContactMe
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default NavBar;
