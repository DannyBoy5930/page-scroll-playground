import Link from "next/link";

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
  return (
    <header className="mb-20 mt-5">
      <ul className="flex flex-row justify-start gap-6">
        <li>Home</li>
        <li>About</li>
        <li>Testbed</li>
        <li>VP Snap Scroll</li>
        <li>Smooth Scroll</li>
        <li>Page Transition</li>
      </ul>
    </header>
  );
}
