"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

const routes = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Testbed",
    path: "/testbed",
  },
  {
    label: "VP Snap Scroll",
    path: "/vp-snap-scroll",
  },
  {
    label: "Smooth Scroll",
    path: "/smooth-scroll",
  },
  {
    label: "Page Transition",
    path: "/page-transition",
  },
];

export default function Header() {
  const activePathname = usePathname();

  return (
    <header className="mb-20 mt-5">
      <ul className="flex flex-row justify-start gap-6">
        {routes.map((route) => (
          <li
            key={route.path}
            className={cn(
              "rounded-sm px-2 py-1 text-black/70 transition hover:text-orange-500 focus:text-white",
              { "bg-black/10 text-black": route.path === activePathname },
            )}
          >
            <Link href={route.path}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
