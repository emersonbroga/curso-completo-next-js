"use client";

import { cn } from "@/helpers/cn";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ELLIPSIS_LEFT, ELLIPSIS_RIGHT, generatePages } from "./generatePages";

export const Pagination = ({ currentPage, totalPages }: { currentPage: number; totalPages: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pages = generatePages(currentPage, totalPages);

  return (
    <ul className="inline-flex h-10 overflow-hidden rounded-md text-base border border-indigo-400/40">
      {pages.map((page) => {
        const isEllipsis = page === ELLIPSIS_LEFT || page === ELLIPSIS_RIGHT;

        const params = new URLSearchParams(searchParams);
        params.set("page", page.toString());
        const url = `${pathname}?${params.toString()}`;

        const isCurrentPage = page === currentPage;

        if (isEllipsis) {
          return (
            <li
              key={page}
              className="border-x border-indigo-400/40 first:rounded-l last:rouned-r first:border-0 last:border-0"
            >
              <span className="flex h-10 items-center justify-center bg-slate-700 hover:bg-indigo-400/40 px-4 hover:text-slate-300">
                ...
              </span>
            </li>
          );
        }

        return (
          <li
            key={page}
            className="border-x border-indigo-400/40 first:rounded-l last:rouned-r first:border-0 last:border-0"
          >
            <Link
              className={cn(
                "flex h-10 items-center justify-center bg-slate-700 hover:bg-indigo-400/40 px-4 hover:text-slate-300",
                {
                  "bg-indigo-400/50 text-slate-300": isCurrentPage,
                }
              )}
              href={url}
            >
              {page}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
