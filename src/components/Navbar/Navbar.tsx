import { handleSignOutForm } from "@/app/auth/sign-out/actions";
import { FaceHappyIcon, FormButton, GamepadIcon, HomeIcon, PrizeIcon, RouteIcon } from "@/components";
import { cn } from "@/helpers/cn";
import Image from "next/image";
import { ExitIcon } from "../Icons/icons/ExitIcon";
import { NavbarList } from "./NavbarList";
import { NavbarListItem } from "./NavbarListItem";
import { NavbarListItemLink } from "./NavbarListItemLink";
import { NavbarProps } from "./types";

export const Navbar = ({ className, user, ...props }: NavbarProps) => {
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 flex h-screen flex-col bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2 text-slate-300",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center my-4">
        <Image
          src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png"
          alt="Logo EmersonBrogaDev"
          className="w-auto h-12 p-2"
          width={112}
          height={32}
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

      {user ? (
        <NavbarList>
          <NavbarListItemLink href="/user">
            <FaceHappyIcon className="w-4 h4" /> {user.name}
          </NavbarListItemLink>
          <NavbarListItem>
            <ExitIcon className="w-4 h4" />
            <FormButton action={handleSignOutForm}>Log out</FormButton>
          </NavbarListItem>
        </NavbarList>
      ) : (
        <NavbarList>
          <NavbarListItemLink href="/auth/sign-in">
            <FaceHappyIcon className="w-4 h4" /> Login
          </NavbarListItemLink>
        </NavbarList>
      )}
    </nav>
  );
};
