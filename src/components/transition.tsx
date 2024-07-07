"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type TransitionProps = {
  children: React.ReactNode;
};

// TODO: Fix GSAP transition - tutorial used old pages router, figure out gsap/react and gsap
export default function Transition({ children }: TransitionProps) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(container.current, {
      opacity: 0,
      onComplete: () => {
        setDisplayChildren(children);
        gsap.to(container.current, { opacity: 1 });
      },
    });
  }, [children]);

  return <div ref={container}>{displayChildren}</div>;
}
