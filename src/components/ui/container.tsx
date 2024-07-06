type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: Readonly<ContainerProps>) {
  return (
    <main className="mx-auto flex min-h-screen max-w-[1050px] flex-col px-4 text-black">
      {children}
    </main>
  );
}
