import { FaceHappyIcon, GamepadIcon, HomeIcon, PrizeIcon, RouteIcon } from "@/components";
import { cn } from "@/helpers/cn";
import { NavbarList } from "./NavbarList";
import { NavbarListItemLink } from "./NavbarListItemLink";
import { NavbarProps } from "./types";

export const Navbar = ({ className, ...props }: NavbarProps) => {
  return (
    <nav
      className={cn(
        "flex h-screen flex-col bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2 text-slate-300",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center my-4">
        <img
          src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png"
          alt="Logo EmersonBrogaDev"
          className="w-auto h-12 p-2"
        />
      </div>
      <NavbarList className={"flex-grow"}>
        <NavbarListItemLink href="/">
          <HomeIcon className="w-4 h-4" /> Home
        </NavbarListItemLink>
        <NavbarListItemLink href="/games">
          <GamepadIcon className="w-4 h4" /> Games
        </NavbarListItemLink>
        <NavbarListItemLink href="/top-10">
          <PrizeIcon className="w-4 h4" /> Top 10
        </NavbarListItemLink>
        <NavbarListItemLink href="/walkthroughs">
          <RouteIcon className="w-4 h4" /> Walkthroughs
        </NavbarListItemLink>
      </NavbarList>
      <NavbarList>
        <NavbarListItemLink href="/user">
          <FaceHappyIcon className="w-4 h4" /> User
        </NavbarListItemLink>
      </NavbarList>
    </nav>
  );
};
