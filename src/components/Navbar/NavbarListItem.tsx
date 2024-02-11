import { cn } from "@/helpers/cn";
import { NavbarListItemProps } from "./types";

export const NavbarListItem = ({ children, className, ...props }: NavbarListItemProps) => {
  return (
    <li
      className={cn(
        "my-2 rounded-lg bg-transparent p-2 hover:bg-indigo-400/40 hover:text-slate-100 cursor-pointer flex gap-2 items-center",
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
};
