import { cn } from "@/helpers/cn";
import Link from "next/link";
import { NavbarListItem } from "./NavbarListItem";
import { NavbarListItemLinkProps } from "./types";

export const NavbarListItemLink = ({ href, children, className, ...props }: NavbarListItemLinkProps) => {
  return (
    <NavbarListItem className={cn("p-0", className)}>
      <Link href={href} className="flex gap-2 items-center rounded-lg p-2 w-full" {...props}>
        {children}
      </Link>
    </NavbarListItem>
  );
};
