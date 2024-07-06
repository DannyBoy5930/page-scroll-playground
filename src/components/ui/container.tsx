type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: Readonly<ContainerProps>) {
  return (
    <main className="mx-auto flex min-h-[98.2vh] max-w-[1050px] flex-1 flex-col px-4 text-black">
      {children}
    </main>
  );
}
