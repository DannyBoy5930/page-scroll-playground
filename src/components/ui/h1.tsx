import { cn } from "~/lib/utils";

type H1Props = {
  children: React.ReactNode;
  className?: string;
};

export default function H1({ children, className }: H1Props) {
  return (
    <h1 className={cn("text-4xl font-bold leading-6", className)}>
      {children}
    </h1>
  );
}
